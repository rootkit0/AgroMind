import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';

import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-home',
    imports: [CommonModule, FormsModule, MatCardModule, MatButtonModule, MatIcon, MatTableModule, MatFormFieldModule, MatInputModule, MatLabel],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
    services = [
    { title: 'AgroSense', text: 'Sensores inteligentes para medir humedad, temperatura y nutrientes del suelo.', icon: 'sensors' },
    { title: 'AgroMonitor', text: 'Plataforma satelital para visualizar índices NDVI, salud de cultivos e identificar plagas.', icon: 'monitor' },
    { title: 'AgroRegen', text: 'Asistente con modelo de IA propio para acompañarte en la regeneración de tus suelos y reducir insumos.', icon: 'eco' },
  ];

  kits = [
    { kit: 'Kit básico', contenido: 'Sensor de estrés térmico + Sonda capacitativa para medir la humedad', precio: '299€' },
    { kit: 'Kit nutrientes', contenido: 'Sensor de conductividad eléctrica + Sensor micro/macro nutrientes', precio: '299€' },
    { kit: 'Sensor humedad foliar', contenido: 'Sensor de estrés hídrico de la planta/potencial de la hoja o tallo', precio: '299€' },
    { kit: 'Estación meteorológica', contenido: 'Pluviómetro + Temperatura/Humedad en aire + Viento + Radiación solar', precio: '699€' },
    { kit: 'Kit Regenerativo', contenido: 'Análisis avanzado de suelo (Auditoría) + AgroRegen IA', precio: '199€ + 15€/mes' },
    { kit: 'Kit Personalizado', contenido: 'Personalizado', precio: 'A consultar'}
  ];

  displayedColumns = ['kit', 'contenido', 'precio'];

  @ViewChild('contactSection') contactSection!: ElementRef;

  scrollToContact() {
    this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  @ViewChild('servicesSection') servicesSection!: ElementRef;

  scrollToServices() {
    this.servicesSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  private serviceID = environment.emailjs.serviceID;
  private templateID = environment.emailjs.templateID;
  private publicKey = environment.emailjs.publicKey;

  sendEmail(): void {
    const form = document.querySelector('form');
    if (!form) return;

    emailjs.sendForm(this.serviceID, this.templateID, form, this.publicKey)
      .then((result: EmailJSResponseStatus) => {
        console.log('✅ Email enviado con éxito', result.text);
        alert('¡Mensaje enviado con éxito!');
        form.reset();
      })
      .catch((error) => {
        console.error('❌ Error al enviar el correo', error);
        alert('Hubo un error al enviar tu mensaje. Inténtalo más tarde.');
      });
  }
}
