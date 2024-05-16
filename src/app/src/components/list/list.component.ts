import { Component, ElementRef, contentChildren, effect } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  listItems = contentChildren<ElementRef>('listItem')

  constructor(){
    effect(() => {
      console.log(this.listItems())
    })
  }
  /*
  @ContentChildren('listItem') listitems !: QueryList<ElementRef>;

  ngAfterContentInit(){
    this.listitems.forEach((item,,index)=> {
      console.log(item.nativeElement);
      item.nativeElement.textContent = `Item ${ index + 1}: 
      ${item.nativeElement.textContent}`      
    })
  }
  */
}
