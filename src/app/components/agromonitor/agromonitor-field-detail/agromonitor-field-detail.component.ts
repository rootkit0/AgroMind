import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AgromonitorService } from '../../../services/agromonitor.service';
import { Field } from '../../../models/field';

@Component({
  selector: 'app-agromonitor-field-detail',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './agromonitor-field-detail.component.html',
  styleUrls: ['./agromonitor-field-detail.component.css']
})
export class AgromonitorFieldDetailComponent implements OnInit {
  field?: Field;
  loading = true;

  constructor(private route: ActivatedRoute, private agromonitorService: AgromonitorService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.agromonitorService.getFieldById(id).subscribe(field => {
        this.field = field;
        this.loading = false;
      });
    }
  }

  startAnalysis() {
    if (this.field?.id) this.agromonitorService.analyzeField(this.field.id).subscribe();
  }
}
