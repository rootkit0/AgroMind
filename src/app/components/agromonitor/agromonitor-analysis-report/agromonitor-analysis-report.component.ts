import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FieldAnalysis } from '../../../models/field-analysis';

@Component({
  selector: 'app-agromonitor-analysis-report',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './agromonitor-analysis-report.component.html',
  styleUrls: ['./agromonitor-analysis-report.component.css']
})
export class AgromonitorAnalysisReportComponent {
  /**
   * Input del componente que recibe el análisis de un campo
   * (resultado del script Python con NDVI/NVCI, detección de plagas, imagen, etc.)
   */
  @Input() analysis!: FieldAnalysis;

  /**
   * Devuelve un texto interpretativo del índice NDVI
   */
  get ndviInterpretation(): string {
    if (!this.analysis?.ndviIndex && this.analysis?.ndviIndex !== 0) return 'Sin datos';
    const ndvi = this.analysis.ndviIndex;

    if (ndvi < 0.2) return 'Vegetación muy escasa';
    if (ndvi < 0.4) return 'Vegetación débil';
    if (ndvi < 0.6) return 'Vegetación media';
    if (ndvi < 0.8) return 'Vegetación saludable';
    return 'Vegetación muy saludable';
  }
}
