import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter = signal<number>(0);

  double = computed(() => this.counter() * 2);

  constructor(){
    effect(()=> console.log('this value is:' + this.counter()))
  }

  increment(){
    this.counter.update((current:number)=> current + 1)
  }

  decrement(){
    this.counter.update((current:number)=> current - 1)
  }

  reset(){
    this.counter.set(0);
  }
}
