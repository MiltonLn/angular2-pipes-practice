import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
  transform( value:string, todas:boolean = true ): string {
    value = value.toLowerCase();
    let nombres = value.split(" ");
    let nombresResult = [];
    if ( todas ) {
      for ( let nombre of nombres ) {
        nombresResult.push( nombre[0].toUpperCase() + nombre.substr(1) );
      }
    } else {
      let primerElemento = nombres[0][0].toUpperCase() + nombres[0].substr(1);
      nombresResult.push( primerElemento );
      nombresResult = nombresResult.concat( nombres.slice( 1 ));
    }

    return nombresResult.join( " " );
  }
}
