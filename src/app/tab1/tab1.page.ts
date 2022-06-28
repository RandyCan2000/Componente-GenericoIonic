import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  formPadre:FormGroup;
  constructor(private fb:FormBuilder) {  
    this.formPadre = this.fb.group({
      cui:["",[]]
    });
  }

  clickBtnHijo(){
    alert("Mensaje desde Padre")
  }

  addFormControl(name:string,form:FormControl){
    this.formPadre.addControl(name,form)
    console.log(this.formPadre)
  }

  onClickButtonPadre(){
    alert(`La informacion del Formulario es la siguiente
    cui:${this.formPadre.get("cui").value}
    nombre:${this.formPadre.get('formHijo').get("name").value}
    apellido:${this.formPadre.get('formHijo').get("lastName").value}
    `)
  }

}
