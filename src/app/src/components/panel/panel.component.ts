import { Component, ElementRef, ContentChild, AfterViewInit, contentChild, effect } from '@angular/core';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent{

  button = contentChild.required<ElementRef>('btn');

  constructor(){
    effect(()=> console.log(this.button()))
  }

  /*@ContentChild('btn') button !: ElementRef;

  ngAfterViewInit(): void {
    console.log(this.button.nativeElement);
    this.button.nativeElement.textContent = 'on';
  }*/

}
