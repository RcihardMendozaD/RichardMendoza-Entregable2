import { HtmlTagDefinition, templateJitUrl } from '@angular/compiler';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
}) 
export class HeaderComponent implements OnInit {



  constructor() { 
 
  }
  ngOnInit(): void {

  }  
  public myClase:boolean=true;

  cambiarclass():void {
    this.myClase = !this.myClase
    confirm('ga')
  }
}


