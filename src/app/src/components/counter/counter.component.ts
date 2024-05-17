import { Component, computed, effect, signal } from '@angular/core';
import { patchState, signalState } from '@ngrx/signals';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {

  // RXJS normal con signal

  // counter = signal<number>(0);

  // double = computed(() => this.counter() * 2);

  // constructor(){
  //   effect(()=> console.log('this value is:' + this.counter()))
  // }

  // increment(){
  //   this.counter.update((current:number)=> current + 1)
  // }

  // decrement(){
  //   this.counter.update((current:number)=> current - 1)
  // }

  // reset(){
  //   this.counter.set(0);
  // }

  // RXJS con signalState

  state = signalState({counter: 0});
  constructor(){
    effect(()=> console.log('this value is:' + this.state.counter()))
  }

  increment(){
    patchState(this.state,(state)=>({counter: state.counter + 1 }))
  }

  decrement(){
    patchState(this.state,(state)=>({counter: state.counter - 1 }))
  }

  reset(){
    patchState(this.state,()=>({counter: 0 }))
  }
}
