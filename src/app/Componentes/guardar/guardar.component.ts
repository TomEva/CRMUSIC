import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Musica } from 'src/app/Entidad/Musica';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {

  constructor(private router:Router, private service:ServiceService){}

  mus : Musica = new Musica();

  GuardarCelukar(){
    this.service.agregarMusica(this.mus).subscribe(data=>{
      alert("se guardo el regustro" + this.mus.nombre)
      this.router.navigate(['listar']);
    });
  }

}
