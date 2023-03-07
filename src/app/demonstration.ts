import { Observable } from "rxjs";
import { Component, computed, Injectable, signal, effect, Input, Signal } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SignalService {
    stringSignal = signal("Hello");
    numberSignal = signal(20);
    objSignal = signal({ forename: "John", age: 20 });
    
    computedSignal = computed(() => this.stringSignal() + ", " + this.objSignal().forename);
}

@Component({selector: 'consumer', templateUrl: './demonstration.html'})
export class ConsumerComponent {
    readonly JSON = JSON;
    private _morning: boolean = true;
    constructor(public service: SignalService){
        // runs every time derived value of computedSignal() changes
        effect(() => console.log("Consumer1", this.service.computedSignal()));
    }

    signalOperations() {
        this.service.stringSignal.set(this._morning ? "Hello" : "Goodbye");
        this.service.numberSignal.update((n) => n + 1);
        this.service.objSignal.mutate((obj) => {obj.age = this.service.numberSignal()});
        this._morning = !this._morning;
    }

    // Potential interoperability with RxJS
    // observable$ : Observable<string> = fromSignal(this.service.stringSignal);
    // signal: Signal<string> = fromObservable(this.observable$); 
}

@Component({selector: 'consumer2', template: '<button (click)="age()">Age John</button> {{this.signalception()[0]()()}}' })
export class Consumer2Component {
    constructor(public service: SignalService){
        effect(() => console.log("Consumer2", this.service.computedSignal().toUpperCase()));
    }

    signalception = signal([signal(computed(() => this.service.numberSignal()**2))]);

    age() {
        this.service.numberSignal.set(this.signalception()[0]()());
    }
   
}
