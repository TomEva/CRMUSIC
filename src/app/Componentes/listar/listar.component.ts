import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Musica } from 'src/app/Entidad/Musica';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  constructor(private router:Router, private service:ServiceService){}

  mus !:Musica[];
  
  ngOnInit(): void {
      this.lista();
  }
  lista(){
    this.service.listaMusica().subscribe(data=>{
      this.mus = data;
      
    })
}

editarCan(mus:Musica){
  localStorage.setItem("id",mus.idMusica.toString());
    this.router.navigate(["editar"]);

}

eliminarCan(mus: Musica){
localStorage.setItem("id", mus.idMusica.toString());
this.router.navigate(['eliminar']);
}
}
