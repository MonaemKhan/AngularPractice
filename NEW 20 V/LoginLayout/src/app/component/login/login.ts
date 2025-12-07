import { AfterViewInit, Component } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements AfterViewInit {

  ngAfterViewInit(): void {
    particlesJS('particles-js', {
      particles: {
        number: { value: 100, density: { enable: true, value_area: 800 }},
        color: { value: '#0ff' },
        shape: { type: 'polygon' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#0ff',
          opacity: 0.4,
          width: 1
        },
        move: { enable: true, speed: 3 }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'grab' } }
      },
      retina_detect: true
    });
  }

}
