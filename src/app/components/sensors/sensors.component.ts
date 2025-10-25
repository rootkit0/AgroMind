import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Sensor {
  id: string;
  name: string;
  icon: string;
  image: string;
  description: string;
  parameters: string[];
}

@Component({
  selector: 'app-sensors',
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './sensors.component.html',
  styleUrl: './sensors.component.css'
})
export class SensorsComponent {
  sensors: Sensor[] = [
    {
      id: 'estres-termico',
      name: 'Sensor de estrés térmico IoT',
      icon: 'thermostat',
      image: 'assets/sensors/sensor-temperatura.png',
      description:
        'Monitoriza la temperatura del suelo a distintas profundidades para comprender el estado térmico del cultivo. Un parámetro clave que influye en la germinación, el desarrollo radicular y la actividad microbiana del suelo.',
      parameters: [
        'Rango de temperatura: -20 a +60°C',
        'Sonda inoxidable IP68',
        'Compatible con dataloggers y estaciones meteorológicas',
        'Calibrado para uso agrícola y forestal'
      ]
    },
    {
      id: 'sonda-capacitativa',
      name: 'Sonda capacitativa IoT',
      icon: 'water_drop',
      image: 'assets/sensors/sensor-capacitativo.png',
      description:
        'Mide la humedad volumétrica del suelo mediante tecnología capacitiva avanzada, sin contacto directo con el agua. Ideal para un control de riego preciso, optimización del consumo hídrico y seguimiento del balance de humedad en diferentes profundidades.',
      parameters: [
        'Rango de humedad: 0–100% VWC',
        'Mediciones en múltiples profundidades (10–80 cm)',
        'Alta estabilidad frente a salinidad y temperatura',
        'Instalación rápida sin mantenimiento'
      ]
    },
    {
      id: 'fertirrigacion',
      name: 'Sensor de fertirrigación IoT',
      icon: 'bolt',
      image: 'assets/sensors/sensor-ce.png',
      description:
        'Analiza la conductividad eléctrica (CE) y la concentración de nutrientes disueltos en el agua de riego. Permite optimizar la fertirrigación, ajustar dosis de fertilizantes y prevenir la acumulación de sales en el suelo.',
      parameters: [
        'Rango de medición: 0–20 mS/cm',
        'Compensación automática de temperatura',
        'Detección de salinidad y concentración de fertilizantes'
      ]
    },
    {
      id: 'npk',
      name: 'Sensor NPK IoT',
      icon: 'science',
      image: 'assets/sensors/sensor-ce.png',
      description:
        'Mide en tiempo real la concentración de macronutrientes esenciales (nitrógeno, fósforo y potasio) en el suelo o en el agua de riego. Facilita un manejo preciso de la fertilización y mejora la productividad del cultivo.',
      parameters: [
        'Rango de detección calibrado para N, P y K',
        'Lectura directa en suelo o disolución nutritiva',
        'Alta precisión y respuesta rápida',
        'Ideal para control de fertilización en campo o hidroponía'
      ]
    },
    {
      id: 'humectacion-foliar',
      name: 'Sensor de humectación foliar IoT',
      icon: 'opacity',
      image: 'assets/sensors/sensor-foliar.png',
      description:
        'Detecta la presencia y duración de agua, rocío o niebla sobre las hojas. Permite anticipar condiciones propicias para enfermedades fúngicas como mildiu u oidio y programar tratamientos preventivos de forma inteligente.',
      parameters: [
        'Sensibilidad configurable (0–100%)',
        'Detección de agua libre, rocío o niebla',
        'Resistente a radiación solar y variaciones térmicas',
        'Ideal para viña, hortícolas y frutales'
      ]
    },
    {
      id: 'pluviometro',
      name: 'Pluviómetro IoT',
      icon: 'thunderstorm',
      image: 'assets/sensors/sensor-pluviometro.png',
      description:
        'Registra en tiempo real la cantidad de precipitación y la intensidad de lluvia. Ayuda a ajustar los programas de riego, aprovechar al máximo el agua natural y evaluar la eficiencia de los eventos pluviométricos.',
      parameters: [
        'Resolución: 0.2 mm por basculación',
        'Acumulación automática por hora y día',
        'Resistente a polvo y radiación UV (IP65)'
      ]
    },
    {
      id: 'higrometro',
      name: 'Higrómetro ambiental IoT',
      icon: 'airwave',
      image: 'assets/sensors/sensor-higrometro.png',
      description:
        'Mide la temperatura y la humedad relativa del aire para caracterizar las condiciones microclimáticas del entorno. Permite detectar situaciones de estrés térmico, condensación o riesgo de enfermedades en invernaderos y cultivos al aire libre.',
      parameters: [
        'Temperatura: -40 a +80°C',
        'Humedad relativa: 0–100% HR',
        'Sensor protegido con filtro sinterizado anti-condensación',
        'Ideal para invernaderos y cultivos de exterior'
      ]
    }
  ];
}
