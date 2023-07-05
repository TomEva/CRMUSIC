import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudMusica';

  constructor(private router:Router){}

  listaCel(){
    this.router.navigate(['listar']);

  }
  guardarCel(){
    this.router.navigate(['guardar']);
  }
  
}
