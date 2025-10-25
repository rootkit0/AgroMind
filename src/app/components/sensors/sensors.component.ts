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
      id: 'fertirrigacion',
      name: 'Sensor de Fertirrigación / Conductividad Eléctrica (CE)',
      icon: 'bolt',
      image: 'assets/sensors/sensor-ce.png',
      description:
        'Permite medir la conductividad eléctrica (CE) y el contenido de nutrientes disueltos en el agua de riego. Es esencial para un control preciso de la fertirrigación y evitar la acumulación de sales en el suelo.',
      parameters: [
        'Rango de medición: 0–20 mS/cm',
        'Compensación automática de temperatura',
        'Detección de salinidad y concentración de fertilizantes'
      ]
    },
    {
      id: 'humectacion-foliar',
      name: 'Sensor de Humectación Foliar',
      icon: 'opacity',
      image: 'assets/sensors/sensor-foliar.png',
      description:
        'Detecta la presencia de agua o rocío en la superficie de las hojas. Permite anticipar condiciones favorables para enfermedades fúngicas como mildiu u oidio y ajustar tratamientos preventivos.',
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
        'Mide la cantidad de precipitación acumulada y la intensidad de lluvia en tiempo real. Ayuda a optimizar el riego y evaluar la eficiencia de los eventos naturales de lluvia.',
      parameters: [
        'Resolución: 0.2 mm por basculación',
        'Acumulación automática por hora y día',
        'Resistente a polvo y radiación UV (IP65)'
      ]
    },
    {
      id: 'sonda-capacitativa',
      name: 'Sonda Capacitativa de Humedad del Suelo',
      icon: 'water_drop',
      image: 'assets/sensors/sensor-capacitativo.png',
      description:
        'Mide la humedad volumétrica del suelo mediante tecnología capacitiva sin contacto directo con el agua. Es ideal para un control preciso del riego en profundidad y la gestión del balance hídrico.',
      parameters: [
        'Rango de humedad: 0–100% VWC',
        'Mediciones en múltiples profundidades (10–80 cm)',
        'Alta estabilidad frente a salinidad y temperatura',
        'Instalación rápida sin mantenimiento'
      ]
    },
    {
      id: 'termometro-higrometro',
      name: 'Higrómetro Ambiental',
      icon: 'airwave',
      image: 'assets/sensors/sensor-higrometro.png',
      description:
        'Registra la temperatura y la humedad relativa del aire. Permite evaluar condiciones microclimáticas, estrés térmico y riesgo de enfermedades asociadas a alta humedad.',
      parameters: [
        'Temperatura: -40 a +80°C',
        'Humedad relativa: 0–100% HR',
        'Sensor protegido con filtro sinterizado anti-condensación',
        'Ideal para invernaderos y cultivos de exterior'
      ]
    },
    {
      id: 'termometro-suelo',
      name: 'Termómetro de Suelo',
      icon: 'thermostat',
      image: 'assets/sensors/sensor-temperatura.png',
      description:
        'Mide la temperatura del suelo a distintas profundidades, parámetro clave para la germinación, desarrollo radicular y actividad microbiológica.',
      parameters: [
        'Rango de temperatura: -20 a +60°C',
        'Sonda inoxidable IP68',
        'Compatible con dataloggers y estaciones meteorológicas',
        'Calibrado para uso agrícola y forestal'
      ]
    }
  ];
}
