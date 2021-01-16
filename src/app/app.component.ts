import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Persona } from './interfaces/persona';

@Component(
  {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{

  Personas:any = [];
  datos: Persona;
  bandera: boolean = false;
  bandera2: boolean = false;


  constructor() 
  {

    this.Personas = 
    [
      {"nombre": "Natali", "edad": 21, "apellido": "Vazquez", "sexo": "Mujer"},
      {"nombre": "Yadira", "edad": 15, "apellido": "Vazquez", "sexo": "Mujer"},
      {"nombre": "Esperanza ", "edad": 36, "apellido": "Vazquez", "sexo": "Mujer"},
      {"nombre": "Ubaldo", "edad": 21, "apellido": "De Santiago", "sexo": "Masculino"},
      {"nombre": "Osvaldo", "edad": 24, "apellido": "Viesca", "sexo": "Masculino"},
      {"nombre": "Osvaldo", "edad": 38, "apellido": "Hernandez", "sexo": "Masculino"},
      {"nombre": "Diego", "edad": 42, "apellido": "Rodriguez", "sexo": "Masculino"},
      {"nombre": "Carlos", "edad": 21, "apellido": "Rodriguez", "sexo": "Masculino"},
      {"nombre": "Daniel", "edad": 42, "apellido": "Rodriguez", "sexo": "Masculino"},
      {"nombre": "David", "edad": 36, "apellido": "Rodriguez", "sexo": "Masculino"},
      {"nombre": "Ana", "edad": 42, "apellido": "Rodriguez", "sexo": "Masculino"},
      {"nombre": "Perla", "edad": 15, "apellido": "Rodriguez", "sexo": "Masculino"},
      {"nombre": "Ramiro", "edad": 44, "apellido": "Esquivel", "sexo": "Masculino"},
     
    ]
    console.log(this.Personas);

  }

  boton(nombre: string, idx: number) 
  {
    this.datos = this.Personas[idx];
    console.log(this.datos);
    
  }

  ocultar() 
  {
    if(this.bandera == false)
    {
      this.bandera = true;
    } 
    else 
    {
      this.bandera = false
    }
  }

  ocultarinfo() 
  {
    if(this.bandera2 == false)
    {
      this.bandera2 = true;
    } 
    else
     {
      this.bandera2 = false
    }
  }
}
