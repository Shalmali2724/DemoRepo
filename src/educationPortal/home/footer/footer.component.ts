// footer.component.ts
import { Component } from '@angular/core';
import { faYoutube, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faYoutube = faYoutube;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  currentYear: number = new Date().getFullYear();
}
