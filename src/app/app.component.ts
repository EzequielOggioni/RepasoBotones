import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Botones2Component } from './componentes/botones2/botones2.component';
import { BotonesComponent } from "./componentes/botones/botones.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, Botones2Component, BotonesComponent]
})
export class AppComponent {
  title = 'primerproycto';
}
