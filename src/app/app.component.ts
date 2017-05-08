import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Milton";
  nombre2:string = "MilTon EduarDo LeNis";
  arreglo:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI:number = Math.PI;
  a:number = 0.234;
  salario:number = 1234.5;

  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "Casa #19"
    }
  }

  valorDePromesa = new Promise( (resolve, reject) => {

    setTimeout( () => resolve('Llegó la data!'), 3500 );

  })

  fecha = new Date();
  video = "Jy1E__3tqKU";
  activar:boolean = true;
}
