import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

interface Sensor {
  nombre: string;
  valor: number | string;
  unidad: string;
}

interface Campo {
  id: string;
  nombre: string;
  estado: string;
  ndvi: number;
  sensores: Sensor[];
  imagenNDVI: string;
  recomendaciones: string[];
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatLabel, MatSelectModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('ndviCanvas') ndviCanvas!: ElementRef<HTMLCanvasElement>;

  campos: Campo[] = [];
  campoSeleccionado = '';
  campoActivo!: Campo;
  recomendacionesCampo: string[] = [];

  ngOnInit(): void {
    this.campos = [
    {
      id: 'ejea',
      nombre: 'Campo Ejea de los Caballeros',
      estado: 'Saludable',
      ndvi: 0.83,
      imagenNDVI: '',
      sensores: [
        { nombre: 'Humedad del suelo', valor: 48, unidad: '%' },
        { nombre: 'Temperatura del suelo', valor: 21.0, unidad: '°C' },
        { nombre: 'Conductividad eléctrica', valor: 1.4, unidad: 'mS/cm' },
        { nombre: 'Temperatura ambiente', valor: 23.2, unidad: '°C' },
        { nombre: 'Humedad relativa', valor: 57, unidad: '%' }
      ],
      recomendaciones: [
        'Excelente vigor del cultivo y buena humedad del suelo.',
        'Mantener la programación de riego actual.',
        'Controlar presencia de malas hierbas en zonas húmedas.'
      ]
    },
    {
      id: 'tauste',
      nombre: 'Campo Tauste',
      estado: 'Moderado',
      ndvi: 0.61,
      imagenNDVI: '',
      sensores: [
        { nombre: 'Humedad del suelo', valor: 37, unidad: '%' },
        { nombre: 'Temperatura del suelo', valor: 25.3, unidad: '°C' },
        { nombre: 'Conductividad eléctrica', valor: 1.0, unidad: 'mS/cm' },
        { nombre: 'Temperatura ambiente', valor: 27.8, unidad: '°C' },
        { nombre: 'Humedad relativa', valor: 44, unidad: '%' }
      ],
      recomendaciones: [
        'Humedad algo baja: revisar la eficiencia del riego por sectores.',
        'NDVI medio estable: sin signos de estrés, pero vigilar zonas amarillas.',
        'Mantener control de fertilización nitrogenada.'
      ]
    },
    {
      id: 'borja',
      nombre: 'Campo Borja',
      estado: 'En alerta',
      ndvi: 0.38,
      imagenNDVI: '',
      sensores: [
        { nombre: 'Humedad del suelo', valor: 20, unidad: '%' },
        { nombre: 'Temperatura del suelo', valor: 28.5, unidad: '°C' },
        { nombre: 'Conductividad eléctrica', valor: 0.6, unidad: 'mS/cm' },
        { nombre: 'Temperatura ambiente', valor: 31.0, unidad: '°C' },
        { nombre: 'Humedad relativa', valor: 33, unidad: '%' }
      ],
      recomendaciones: [
        'Estrés hídrico severo: programar riego urgente.',
        'Alta temperatura del suelo: riesgo de marchitez en cultivos jóvenes.',
        'Aumentar cobertura vegetal o acolchado en zonas expuestas.'
      ]
    },
    {
      id: 'fuentes',
      nombre: 'Campo Fuentes de Ebro',
      estado: 'Saludable',
      ndvi: 0.76,
      imagenNDVI: '',
      sensores: [
        { nombre: 'Humedad del suelo', valor: 55, unidad: '%' },
        { nombre: 'Temperatura del suelo', valor: 20.5, unidad: '°C' },
        { nombre: 'Conductividad eléctrica', valor: 1.2, unidad: 'mS/cm' },
        { nombre: 'Temperatura ambiente', valor: 22.6, unidad: '°C' },
        { nombre: 'Humedad relativa', valor: 60, unidad: '%' }
      ],
      recomendaciones: [
        'Campo equilibrado: buena humedad y desarrollo vegetativo.',
        'NDVI alto y estable: mantener fertilización actual.',
        'Revisar sensores antes de la próxima lluvia prevista.'
      ]
    },
    {
      id: 'caspe',
      nombre: 'Campo Caspe',
      estado: 'Moderado',
      ndvi: 0.54,
      imagenNDVI: '',
      sensores: [
        { nombre: 'Humedad del suelo', valor: 35, unidad: '%' },
        { nombre: 'Temperatura del suelo', valor: 26.4, unidad: '°C' },
        { nombre: 'Conductividad eléctrica', valor: 0.9, unidad: 'mS/cm' },
        { nombre: 'Temperatura ambiente', valor: 29.0, unidad: '°C' },
        { nombre: 'Humedad relativa', valor: 42, unidad: '%' }
      ],
      recomendaciones: [
        'Humedad intermedia: vigilar riego en zonas más arenosas.',
        'Ligeras fluctuaciones de NDVI detectadas en la última semana.',
        'Evitar labores mecánicas durante las horas de máxima insolación.'
      ]
    }];

    this.campoSeleccionado = this.campos[0].id;
    this.actualizarCampo();
  }

  ngAfterViewInit(): void {
    this.renderNDVI();
  }

  private renderNDVI() {
    if (!this.ndviCanvas) return;

    const canvas = this.ndviCanvas.nativeElement;
    const parent = canvas.parentElement as HTMLElement;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssW = Math.max(600, Math.round(parent.getBoundingClientRect().width));
    const cssH = 340;

    canvas.style.width = cssW + 'px';
    canvas.style.height = cssH + 'px';
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const seed = this.hash(this.campoActivo.id);
    const w = canvas.width;
    const h = canvas.height;

    const imgData = ctx.createImageData(w, h);
    const scale = 60;
    const octaves = 3;
    const persistence = 0.5;

    for (let y = 0; y < h; y++) {
      const ys = y / dpr;
      for (let x = 0; x < w; x++) {
        const xs = x / dpr;
        const n = this.fractalNoise2D(xs, ys, seed, scale, octaves, persistence);
        const ndvi = Math.min(1, Math.max(0, 0.15 + n * 0.85));
        const [r, g, b] = this.ndviColor(ndvi);
        const i = (y * w + x) * 4;
        imgData.data[i] = r;
        imgData.data[i + 1] = g;
        imgData.data[i + 2] = b;
        imgData.data[i + 3] = 255;
      }
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.putImageData(imgData, 0, 0);

    const label = `NDVI medio: ${this.campoActivo.ndvi.toFixed(2)}`;
    const chipX = 12, chipY = 12, chipH = 30, padX = 12, radius = 8;

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.font = '600 14px "Inter","Roboto",Arial';
    const chipW = ctx.measureText(label).width + padX * 2;

    ctx.fillStyle = 'rgba(255,255,255,0.88)';
    ctx.strokeStyle = 'rgba(0,0,0,0.12)';
    ctx.lineWidth = 1;
    ctx.shadowColor = 'rgba(0,0,0,0.2)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 2;

    ctx.beginPath();
    ctx.moveTo(chipX + radius, chipY);
    ctx.lineTo(chipX + chipW - radius, chipY);
    ctx.quadraticCurveTo(chipX + chipW, chipY, chipX + chipW, chipY + radius);
    ctx.lineTo(chipX + chipW, chipY + chipH - radius);
    ctx.quadraticCurveTo(chipX + chipW, chipY + chipH, chipX + chipW - radius, chipY + chipH);
    ctx.lineTo(chipX + radius, chipY + chipH);
    ctx.quadraticCurveTo(chipX, chipY + chipH, chipX, chipY + chipH - radius);
    ctx.lineTo(chipX, chipY + radius);
    ctx.quadraticCurveTo(chipX, chipY, chipX + radius, chipY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#043915';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, chipX + padX, chipY + chipH / 2);
    ctx.restore();
  }

  private hash(s: string): number {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
    }
    return h >>> 0;
  }

  private valueNoise2D(x: number, y: number, seed: number, grid = 64): number {
    const x0 = Math.floor(x / grid);
    const y0 = Math.floor(y / grid);
    const xf = (x % grid) / grid;
    const yf = (y % grid) / grid;

    const ix0iy0 = this.hash(`${x0},${y0},${seed}`) / 0xffffffff;
    const ix1iy0 = this.hash(`${x0 + 1},${y0},${seed}`) / 0xffffffff;
    const ix0iy1 = this.hash(`${x0},${y0 + 1},${seed}`) / 0xffffffff;
    const ix1iy1 = this.hash(`${x0 + 1},${y0 + 1},${seed}`) / 0xffffffff;

    const u = xf * xf * (3 - 2 * xf);
    const v = yf * yf * (3 - 2 * yf);

    const xL = ix0iy0 * (1 - u) + ix1iy0 * u;
    const xU = ix0iy1 * (1 - u) + ix1iy1 * u;

    return xL * (1 - v) + xU * v;
  }

  private fractalNoise2D(x: number, y: number, seed: number, baseScale: number, octaves: number, persistence: number) {
    let total = 0;
    let freq = 1;
    let amp = 1;
    let maxAmp = 0;

    for (let i = 0; i < octaves; i++) {
      total += this.valueNoise2D(x * freq, y * freq, seed + i * 1013904223, baseScale / freq) * amp;
      maxAmp += amp;
      amp *= persistence;
      freq *= 2;
    }
    return total / maxAmp;
  }

  private ndviColor(v: number): [number, number, number] {
    const stops = [
      { t: 0.0, c: [215, 48, 39] },
      { t: 0.25, c: [244, 109, 67] },
      { t: 0.5, c: [254, 224, 139] },
      { t: 0.7, c: [102, 189, 99] },
      { t: 1.0, c: [26, 152, 80] }
    ];
    for (let i = 1; i < stops.length; i++) {
      if (v <= stops[i].t) {
        const a = stops[i - 1], b = stops[i];
        const r = (v - a.t) / (b.t - a.t);
        return [
          Math.round(a.c[0] + r * (b.c[0] - a.c[0])),
          Math.round(a.c[1] + r * (b.c[1] - a.c[1])),
          Math.round(a.c[2] + r * (b.c[2] - a.c[2]))
        ];
      }
    }
    return stops[stops.length - 1].c as [number, number, number];
  }

  @HostListener('window:resize')
  onResize() {
    this.renderNDVI();
  }

  actualizarCampo() {
    this.campoActivo = this.campos.find(c => c.id === this.campoSeleccionado)!;
    this.generarRecomendacionesEspecificas();
    this.renderNDVI();
  }

  generarRecomendacionesEspecificas() {
    const s = this.campoActivo.sensores;
    this.recomendacionesCampo = [];

    const humedad = this.valorSensor(s, 'Humedad del suelo');
    const temperatura = this.valorSensor(s, 'Temperatura del suelo');
    const ce = this.valorSensor(s, 'Conductividad eléctrica');
    const hr = this.valorSensor(s, 'Humedad relativa');
    const ndvi = this.campoActivo.ndvi;

    if (humedad < 25) this.recomendacionesCampo.push('💧 Humedad muy baja: activa el riego de emergencia.');
    else if (humedad < 40) this.recomendacionesCampo.push('💧 Humedad moderada: programa un riego en las próximas 24 h.');
    else if (humedad > 70) this.recomendacionesCampo.push('⚠️ Exceso de humedad: evalúa drenaje o reduce frecuencia de riego.');
    else this.recomendacionesCampo.push('✅ Humedad óptima para el desarrollo radicular.');

    if (temperatura > 27) this.recomendacionesCampo.push('🌡️ Alta temperatura del suelo: riesgo de estrés térmico, considera riego evaporativo.');
    else if (temperatura < 10) this.recomendacionesCampo.push('❄️ Temperatura baja: ralentiza la actividad microbiológica.');
    else this.recomendacionesCampo.push('🌱 Temperatura adecuada para la germinación y actividad biológica.');

    if (ce > 2) this.recomendacionesCampo.push('🧂 CE elevada: posible acumulación de sales, revisa fertirrigación.');
    else if (ce < 0.8) this.recomendacionesCampo.push('🌿 CE baja: revisa dosis de fertilizantes.');
    else this.recomendacionesCampo.push('✅ CE dentro del rango ideal para el cultivo.');

    if (hr > 85) this.recomendacionesCampo.push('☁️ Alta humedad ambiental: riesgo de enfermedades fúngicas.');
    else if (hr < 35) this.recomendacionesCampo.push('💨 Humedad ambiental baja: riesgo de deshidratación foliar.');

    if (ndvi < 0.4) this.recomendacionesCampo.push('🌾 NDVI bajo: posible estrés vegetal o déficit nutricional.');
    else if (ndvi < 0.6) this.recomendacionesCampo.push('🟡 NDVI moderado: revisa fertilización o riego en zonas críticas.');
    else this.recomendacionesCampo.push('🟢 NDVI alto: campo con buena actividad fotosintética.');

    const tendencia = Math.random();
    if (tendencia < 0.3) this.recomendacionesCampo.push('📉 Tendencia descendente del NDVI: revisar condiciones de estrés.');
    else if (tendencia > 0.7) this.recomendacionesCampo.push('📈 Tendencia positiva: el campo está mejorando su vigor.');
  }

  valorSensor(sensores: any[], nombre: string): number {
    const sensor = sensores.find(s => s.nombre === nombre);
    return sensor ? Number(sensor.valor) : NaN;
  }
}
