import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

interface Solution {
  id: string;
  name: string;
  image: string;
  tagline: string;
  overview: string;
  features: string[];
  useCases: string[];
  workflow: string[];
  metrics: string[];
  includes: string[];
  ctaLink?: string;
}

@Component({
  selector: 'app-solutions',
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, MatDividerModule, MatChipsModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
  nav = [
    { id: 'agrosense', label: 'AgroSense' },
    { id: 'agromonitor', label: 'AgroMonitor' },
    { id: 'agroregen', label: 'AgroRegen' },
  ];

  solutions: Solution[] = [
    {
      id: 'agrosense',
      name: 'AgroSense',
      image: 'assets/solutions/agricultura1.jpg',
      tagline: 'Monitoreo IoT del suelo y microclima en tiempo real.',
      overview:
        'AgroSense integra sensores de humedad, temperatura, pH, conductividad, ORP y NPK para ofrecer datos en tiempo real del suelo y el ambiente. El panel muestra históricos, alertas configurables y recomendaciones de riego/fertilización basadas en modelos de balance hídrico. Pensado para reducir consumos y en todos los sectores agrícolas.',
      features: [
        'Lectura continua de humedad, temperatura, pH, CE y ORP.',
        'Cálculo de VWC, ETo local (con datos meteo) y déficit hídrico por sector.',
        'Alarmas por SMS/email/app ante umbrales de humedad, salinidad o temperatura.',
        'Cuadros de mando con gráficos comparativos por parcela y campaña.',
        'Exportación Excel para integración con otras herramientas.',
      ],
      useCases: [
        'Riego de precisión por sector en frutales y hortícolas.',
        'Control de salinidad en suelos con riesgo de sodificación.',
        'Seguimiento del establecimiento de nuevos cultivos y épocas críticas.',
      ],
      workflow: [
        'Sensórica: sondas de suelo + microclima.',
        'Gateway ESP32/NBIoT → envío a la nube.',
        'Normalización y cálculo mediante algoritmos propios en plataforma.',
        'Panel y alertas: recomendaciones de riego/fertirriego.',
      ],
      metrics: [
        'Ahorro medio de agua: 20–35%.',
        'Reducción de eventos de estrés hídrico: >40%.',
        'Menor variabilidad entre sectores: 10–25%.',
      ],
      includes: [
        'Kit de sensores (configurable).',
        'Aplicación web para ordenador y móvil.',
        'Soporte y mantenimiento remoto.',
      ],
      ctaLink: '/signup',
    },
    {
      id: 'agromonitor',
      name: 'AgroMonitor',
      image: 'assets/solutions/agricultura2.jpg',
      tagline: 'Analítica y predicción de riesgos con IA.',
      overview:
        'AgroMonitor combina datos de campo con meteorología y satélite para generar indicadores de riesgo de plagas, enfermedades y estrés hídrico. Emplea modelos de fenología, índices de vegetación (NDVI) y patrones históricos para anticipar intervenciones y priorizar parcelas.',
      features: [
        'Modelos fenológicos y de riesgo según cultivo y patógeno.',
        'Ingesta de datos meteo (estación propia o red pública) y satélite.',
        'Mapas de vigor/estrés y priorización de zonas calientes.',
        'Planificador de tareas con ventanas óptimas de tratamiento.',
        'Bitácora de actuaciones y comparativa de campañas.',
      ],
      useCases: [
        'Aviso de condiciones favorables a enfermedades fúngicas según humedad y temperatura.',
        'Alertas de estrés térmico o riesgo de heladas en cultivos de invernadero',
        'Seguimiento de crecimiento mediante índice NDVI',
      ],
      workflow: [
        'Ingesta de datos (meteo y satélite).',
        'Cálculos de índices y modelos predictivos.',
        'Generación de alertas y planes sugeridos.',
        'Seguimiento de resultados y aprendizaje del sistema.',
      ],
      metrics: [
        'Reducción de tratamientos innecesarios: 10–20%.',
        'Mejor ajuste de fechas de intervención: +25–40%.',
        'Disminución de pérdidas por estrés: 10–15%.',
      ],
      includes: [
        'Acceso a plataforma avanzada con modelos por cultivo.',
        'Conectores meteo/satélite y a AgroSense.',
        'Soporte agronómico para configuración de modelos.',
      ],
      ctaLink: '/signup',
    },
    {
      id: 'agroregen',
      name: 'AgroRegen',
      image: 'assets/solutions/agricultura3.jpg',
      tagline: 'Gestión regenerativa del suelo, guiada por datos.',
      overview:
        'AgroRegen orienta la transición hacia prácticas regenerativas apoyándose en indicadores biogeoquímicos (pH, ORP, Conductividad Eléctrica, Materia Organica, Actividad Microbiana) y en un plan de mejora del suelo. Define objetivos por parcela, propone prácticas (coberturas, compost, biofertilizantes, rotaciones) y verifica avances con mediciones periódicas.',
      features: [
        'Diagnóstico inicial de suelo (químico + biológico) y línea base.',
        'Plan de prácticas con cronograma y recomendaciones dosificadas.',
        'Seguimiento con sensores y muestreos de verificación.',
        'Informe anual de impacto y retorno técnico-económico.',
      ],
      useCases: [
        'Reconversión a manejos con menor insumo sintético.',
        'Mejora de estructura y retención hídrica en suelos degradados.',
        'Certificaciones de sostenibilidad y huella de carbono.',
      ],
      workflow: [
        'Diagnóstico y objetivos por cultivo/parcela.',
        'Ejecución de prácticas (coberturas, bioinsumos, rotaciones).',
        'Monitoreo de indicadores (sensores + muestreos).',
        'Ajustes del plan e informe de impacto anual.',
      ],
      metrics: [
        'Incremento de MO: +0.2–0.6 puntos/año (según contexto).',
        'Mejora de infiltración y retención: +10–30%.',
        'Reducción de fertilización sintética: 10–25%.',
      ],
      includes: [
        'Plan técnico personalizado y acompañamiento.',
        'Cuadro de mando con KPIs regenerativos.',
        'Sesiones de revisión trimestral.',
      ],
      ctaLink: '/signup',
    },
  ];
}
