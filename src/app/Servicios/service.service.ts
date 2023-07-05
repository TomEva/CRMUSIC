import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Musica } from '../Entidad/Musica';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:7580/api/musica/'

  listaMusica() {
    return this.http.get<Musica[]>(this.url + 'lista');

  }

  buscarMusica(mus: Musica) {
    return this.http.post<Musica>(this.url + 'buscar', mus);

  }

  editarMusica(mus: Musica) {
    return this.http.post<Musica>(this.url + 'editar', mus);

  }
  agregarMusica(mus: Musica) {
    return this.http.post<Musica>(this.url + 'agregar', mus);

  }
  eliminarMusica(mus: Musica) {
    return this.http.post<Musica>(this.url + 'eliminar', mus);

  }
}
