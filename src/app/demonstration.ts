import { Observable } from "rxjs";
import { Component, 
         computed, 
         Injectable, 
         signal, 
         effect,  
         Signal, 
         ChangeDetectionStrategy } from "@angular/core";
import { fromSignal, fromObservable } from '@angular/core/rxjs-interop'

@Injectable({ providedIn: 'root' })
export class SignalService {
    hello: Signal<string> = signal("Hello");
    stringSignal = signal("Hello"); // SettableSignal
    numberSignal = signal(20);
    objSignal = signal({ forename: "John", age: this.numberSignal() },); // age will not update when numberSignal changes

    computedSignal = computed(() => this.stringSignal() + ", " + this.objSignal().forename);
    nestedSignal = computed(() => signal({ forename: "John", age: this.numberSignal() }));
}

@Component({ selector: 'consumer', templateUrl: './demonstration.html', changeDetection: ChangeDetectionStrategy.OnPush })
export class ConsumerComponent {
    readonly JSON = JSON;
    constructor(public service: SignalService) {
        // runs every time derived value of computedSignal() changes
        effect(() => {
            this.service.computedSignal();
            this.service.nestedSignal();
        });
        // setInterval(() => {
        //     this.signalOperations();            
        // }, 2500);
    }

    private _morning: boolean = true;
    signalOperations() {
        this._morning = !this._morning;
        this.service.stringSignal.set(this._morning ? "Hello" : "Goodbye");
        this.service.numberSignal.update((n) => n + 1);
        this.service.objSignal.mutate((obj) => { obj.age = this.service.numberSignal() });
    }

    //Potential interoperability with RxJS
    observable$ : Observable<string> = fromSignal(this.service.stringSignal);
    signal: Signal<string> = fromObservable(this.observable$); 
}

@Component({
    selector: 'consumer2',
    template: `<button (click)="age()">Age John</button>
                        John's age squared: {{this.signalception()[0]()()}}`
})
export class Consumer2Component {
    constructor(public service: SignalService) {
        effect(() => console.log("Consumer2", this.service.computedSignal().toUpperCase()));
    }

    signalception = signal([signal(computed(() => this.service.numberSignal() ** 2))]);

    age() {
        this.service.numberSignal.set(this.signalception()[0]()());
        this.service.objSignal.mutate((obj) => { obj.forename = "Old Man" });
    }

}
