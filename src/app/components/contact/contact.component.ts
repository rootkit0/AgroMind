import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, MatCardModule, MatListModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private snackBar: MatSnackBar) {}

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
