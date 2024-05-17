import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  mensajeRecibido: string = '';

  recibirMensaje($event: string){
    this.mensajeRecibido = $event;
  }



  //CONTADOR
  valorContador: number = 0;
  // mensajePadre: string = 'Ojala Messi llegue al proximo mundial';

  incrementar(){
    this.valorContador++;
  }

  decrementar(){
    this.valorContador--;
  }


}
