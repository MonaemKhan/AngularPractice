import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../services/shared/modal/modal.service';
import { ModalType } from '../../Class/modal';
import { LoginServices } from '../../services/login/login.services';
import { Router } from '@angular/router';

declare var particlesJS: any;

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements AfterViewInit {

  userName:string = "";
  userPassword:string = "";
  isRemember:boolean = false;

  constructor(
    private modal : ModalService,
    private login : LoginServices,
    private route : Router
  ){}

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

  async onLogin(){
    var errM = await this.login.doLogin(this.userName,this.userPassword,this.isRemember);
    if(errM.length > 0){
      this.modal.open(errM,ModalType.Error);
    }else{
      this.route.navigate([''])
    }
  }
}
