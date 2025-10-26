import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
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
  constructor(private viewportScroller: ViewportScroller) {}

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
      tagline: 'Sensores inteligentes que transforman los datos del suelo en decisiones agrícolas precisas',
      overview:
        'AgroSense monitoriza en tiempo real la humedad, temperatura, pH, conductividad eléctrica, potencial REDOX y nutrientes (NPK) del suelo. Los datos se procesan en nuestra plataforma inteligente, que muestra históricos, genera alertas automáticas y recomienda cuándo y cuánto regar o fertilizar, optimizando recursos y rendimiento.',
      features: [
        'Medición continua de parámetros críticos del suelo y microclima',
        'Alertas inteligentes por app, SMS o correo ante niveles fuera de rango',
        'Cuadros de mando comparativos por parcela, cultivo y campaña',
        'Exportación de datos a Excel o integración con otras herramientas agronómicas'
      ],
      useCases: [
        'Riego inteligente con reducción de consumo de agua',
        'Control preciso de fertirrigación evitando exceso de sales y nutrientes',
        'Monitorización microclimática para prevenir estrés térmico',
        'Detección temprana de plagas y enfermedades fúngicas mediante condiciones favorables',
        'Regeneración del suelo y equilibrio microbiológico gracias al seguimiento del potencial REDOX',
        'Comparativa de zonas o sectores para mejorar la uniformidad del cultivo'
      ],
      workflow: [
        'Captura de datos mediante sondas de suelo y sensores microclimáticos',
        'Transmisión al servidor a través de microcontrolador ESP32 con conectividad GPRS',
        'Procesamiento mediante algoritmos propios de IA y análisis de patrones',
        'Visualización y alertas en panel web con recomendaciones automáticas'
      ],
      metrics: [
        'Ahorro medio de agua: 25–40%',
        'Reducción de eventos de estrés hídrico: +40%',
        'Menor variabilidad entre sectores del cultivo: 15–30%'
      ],
      includes: [
        'Kit de sensores personalizable según cultivo y tipo de suelo',
        'Acceso completo a la plataforma web y móvil',
        'Soporte técnico y mantenimiento 24/7'
      ],
      ctaLink: '/contacto'
    },
    {
      id: 'agromonitor',
      name: 'AgroMonitor',
      image: 'assets/solutions/agricultura2.jpg',
      tagline: 'Observación satelital e inteligencia predictiva al servicio de tus cultivos',
      overview:
        'AgroMonitor combina imágenes satelitales y datos meteorológicos para anticipar riesgos y optimizar la gestión del campo. Genera mapas NDVI, evalúa el vigor vegetativo, detecta zonas de estrés hídrico o térmico y ofrece alertas automáticas con sugerencias de intervención adaptadas a cada cultivo.',
      features: [
        'Integración de datos satelitales y meteorológicos en una misma plataforma',
        'Cálculo automático de índices de vegetación (NDVI, EVI, NDWI)',
        'Modelos fenológicos y de riesgo específicos según cultivo',
        'Mapas interactivos con zonas de manejo diferenciado',
        'Informes de evolución y comparativas entre campañas'
      ],
      useCases: [
        'Seguimiento del vigor vegetativo mediante índices de vegetación',
        'Identificación de zonas de manejo diferenciado para agricultura de precisión',
        'Detección de sequía o exceso de humedad a nivel de parcela',
        'Evaluación del impacto real de tratamientos y fertilización',
        'Alerta temprana ante estrés térmico o déficit hídrico',
        'Monitoreo continuo de anomalías y generación automática de alertas'
      ],
      workflow: [
        'Integración de datos satelitales y meteorológicos',
        'Procesamiento mediante modelos de IA y algoritmos predictivos',
        'Generación de alertas, mapas de riesgo y planes de acción sugeridos',
        'Seguimiento de la evolución y aprendizaje continuo del sistema'
      ],
      metrics: [
        'Reducción de tratamientos innecesarios: 15–25%',
        'Mejor ajuste de fechas de intervención: +30–45%',
        'Disminución de pérdidas por estrés o plagas: 10–20%'
      ],
      includes: [
        'Acceso a plataforma satelital avanzada con vistas por cultivo y zona',
        'Interpretación cruzada con datos de AgroSense para mayor precisión',
        'Soporte técnico remoto y actualizaciones automáticas'
      ],
      ctaLink: '/contacto'
    },
    {
      id: 'agroregen',
      name: 'AgroRegen',
      image: 'assets/solutions/agricultura3.jpg',
      tagline: 'IA regenerativa que mide, guía y mejora la vida del suelo',
      overview:
        'AgroRegen impulsa la transición hacia una agricultura regenerativa basada en datos. Analiza indicadores biogeoquímicos y diseña un plan personalizado por parcela. Propone prácticas sostenibles y mide la evolución real del suelo a lo largo del tiempo.',
      features: [
        'Diagnóstico inicial del suelo con análiticas microbiológicas',
        'Plan de manejo regenerativo con objetivos medibles y cronograma',
        'Seguimiento con sensores, muestreos y análisis de evolución',
        'Informe anual de impacto técnico, ambiental y económico'
      ],
      useCases: [
        'Evaluación integral de la salud del suelo y su tendencia de mejora o degradación',
        'Recomendaciones regenerativas adaptadas a cada cultivo y contexto',
        'Optimización biológica del riego y fertilización favoreciendo la microbiología',
        'Modelos predictivos de recuperación del suelo mediante IA'
      ],
      workflow: [
        'Diagnóstico y establecimiento de objetivos por parcela',
        'Ejecución de prácticas regenerativas seleccionadas (coberturas, bioinsumos, rotaciones)',
        'Monitoreo de indicadores y validación del progreso',
        'Ajustes del plan e informe anual de resultados'
      ],
      metrics: [
        'Incremento anual de materia orgánica: +0.3–0.6 puntos',
        'Mejora de infiltración y retención de agua: +15–35%',
        'Reducción del uso de fertilización sintética: 20–30%'
      ],
      includes: [
        'Plan técnico personalizado y asesoramiento continuo',
        'Dashboard con KPIs regenerativos y evolución del suelo',
        'Revisión trimestral con equipo técnico especializado'
      ],
      ctaLink: '/contacto'
    }
  ];

  scrollTo(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
}
