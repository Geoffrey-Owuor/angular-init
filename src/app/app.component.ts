import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { ServicesComponent } from "./services/services.component";
import { AboutComponent } from "./about/about.component";
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ContactComponent } from "./contact/contact.component";
import { MapembeddComponent } from "./mapembedd/mapembedd.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FooterComponent, ServicesComponent, AboutComponent, HeaderComponent, NavbarComponent, ContactComponent, MapembeddComponent]
})
export class AppComponent {
  title = 'AngularSite';
}

