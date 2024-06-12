import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  hermanoGrande?: string;
  hermanoPequeno?: string;

  getHermanoGrande(): string {
    return this.hermanoGrande || '';
  }

  setHermanoGrande(value: string) {
    this.hermanoGrande = value;
  }

  getHermanoPequeno(): string {
    return this.hermanoPequeno || '';
  }

  setHermanoPequeno(value: string) {
    this.hermanoPequeno = value;
  }

  saludar(hermano: string){
    console.log(`Hola ${hermano}`);
  }

  preguntarPorHijo():string{
    return 'Como estas hijo?';
  }

  constructor() { }
}
