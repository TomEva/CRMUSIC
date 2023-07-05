import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Musica } from 'src/app/Entidad/Musica';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit{   

  constructor(private router:Router, private service:ServiceService){}

  ngOnInit(): void{
    this.buscarM();
  }  

  mus : Musica = new Musica(); 

  buscarM(){
    let idMusica= localStorage.getItem('id');
    this.mus.idMusica = Number(idMusica);
    this.service.buscarMusica(this.mus).subscribe(data=>{
      this.mus = data;
    });
   }EliminarMusica(){
    this.service.eliminarMusica(this.mus).subscribe(data=>{
      alert("se elimino la cancion: " + this.mus.nombre)
      this.router.navigate(['listar']);
    });
   }
   Cancelar(){
    this.router.navigate(['listar']);
   }

}
