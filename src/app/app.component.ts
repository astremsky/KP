import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { LogoboxComponent } from './logobox/logobox.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    MainComponent,
    LogoboxComponent,
    AboutComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'k_practice';
}
