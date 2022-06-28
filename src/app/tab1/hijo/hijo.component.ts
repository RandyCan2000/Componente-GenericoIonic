import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss'],
})
export class HijoComponent implements OnInit {

  @Input() titleHeader:string="";
  @Input() titleFooter:string="";

  formHijo:FormGroup;

  @Output() formReady:EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
  @Output() onClickBtn:EventEmitter<any> = new EventEmitter();
  constructor(
    private fb:FormBuilder
  ) {
    this.formHijo = this.fb.group({
      name:["",[]],
      lastName:["",[]]
    })
  }

  /**
   * @description metodo de inicializacion de componente
   * @author Randy Can
   * @date 28/06/2022
   * @memberof HijoComponent
   */
  ngOnInit() {
    //Esto enviar el formulario del componente hijo al padre en el momento que se cargue completamente  
    this.formReady.emit(this.formHijo);
  }

  onClickButton(){
    this.onClickBtn.emit();
    alert("Mensaje desde Hijo");
  }

}
