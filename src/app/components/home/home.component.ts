import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';

import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-home',
    imports: [CommonModule, RouterModule, FormsModule, MatCardModule, MatButtonModule, MatIcon, MatTableModule, MatFormFieldModule, MatInputModule, MatLabel],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  constructor(private snackBar: MatSnackBar) {}

  services = [
    { title: 'AgroSense', text: 'Sensores inteligentes para medir humedad, temperatura y nutrientes del suelo.', icon: 'sensors' },
    { title: 'AgroMonitor', text: 'Plataforma satelital para visualizar índices NDVI, salud de cultivos e identificar plagas.', icon: 'monitor' },
    { title: 'AgroRegen', text: 'Asistente con modelo de IA propio para acompañarte en la regeneración de tus suelos y reducir insumos.', icon: 'eco' },
  ];

  kits = [
    { kit: 'Sensor de estrés térmico', contenido: 'Mide la temperatura del suelo a distintas profundidades', precio: '159€' },
    { kit: 'Sonda capacitativa', contenido: 'Mide la humedad volumétrica del suelo mediante tecnología capacitiva', precio: '199€' },
    { kit: 'Sensor de fertirrigación', contenido: 'Mide la conductividad eléctrica (CE) y el contenido de nutrientes disueltos en el agua de riego', precio: '199€' },
    { kit: 'Sensor NPK', contenido: 'Mide la el contenido de nutrientes disueltos en el suelo (Nitrógeno, Fósforo y Potáseo)', precio: '199€' },
    { kit: 'Sensor de humectación foliar', contenido: 'Detecta la presencia de agua o rocío en la superficie de las hojas', precio: '199€' },
    { kit: 'Pluviómetro', contenido: 'Mide la cantidad de precipitación acumulada y la intensidad de lluvia', precio: '299€' },
    { kit: 'Higrómetro ambiental', contenido: 'Registra la temperatura y la humedad relativa del aire', precio: '359€' },
    { kit: 'Kit básico', contenido: 'Sensor de estrés térmico + Sensor capacitativo', precio: '299€' },
    { kit: 'Kit nutrientes', contenido: 'Sensor de fertirrigación + Sensor NPK', precio: '349€' },
    { kit: 'Kit regenerativo', contenido: 'Análisis avanzado de suelo (Auditoría) + AgroRegen IA', precio: '249€ + 15€/mes' },
    { kit: 'Kit personalizado', contenido: 'Personalizado', precio: 'A consultar'}
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

  sendEmail(): void {
    const form = document.querySelector('form');
    if (!form) return;

    const nameInput = form.querySelector('input[name="name"]') as HTMLInputElement;
    const emailInput = form.querySelector('input[name="email"]') as HTMLInputElement;
    const phoneInput = form.querySelector('input[name="phone"]') as HTMLInputElement;
    const messageInput = form.querySelector('textarea[name="message"]') as HTMLTextAreaElement;

    if (!nameInput.value.trim() || !emailInput.value.trim() || !phoneInput.value.trim() || !messageInput.value.trim()) {
      this.snackBar.open('⚠️ Por favor, completa todos los campos antes de enviar.', 'Cerrar', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      this.snackBar.open('⚠️ Introduce un correo electrónico válido.', 'Cerrar', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    emailjs
      .sendForm(
        environment.emailjs.serviceID,
        environment.emailjs.templateID,
        form as HTMLFormElement,
        environment.emailjs.publicKey
      )
      .then((result: EmailJSResponseStatus) => {
        console.log('✅ Email enviado con éxito', result.text);
        this.snackBar.open('✅ ¡Mensaje enviado con éxito!', 'Cerrar', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
        (form as HTMLFormElement).reset();
      })
      .catch((error) => {
        console.error('❌ Error al enviar el correo', error);
        this.snackBar.open('❌ Hubo un error al enviar tu mensaje. Inténtalo más tarde.', 'Cerrar', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      });
  }
}
