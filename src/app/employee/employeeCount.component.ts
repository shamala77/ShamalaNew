import {Component,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector :'employee-count',
  templateUrl:'employeeCount.component.html',
  styleUrls:['employeeCount.component.css']
})

export class EmployeeCountComponent {
    @Input()
    all :number;

    @Input()
    male:number;

    @Input()
    female:number;

    selectedRadioButtonValue : string ='All';
    @Output()
    radioButtonSelectionChanged : EventEmitter<string> = new EventEmitter<string>();
    onRadioButtonSelectChanged(){
      this.radioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
      console.log(this.selectedRadioButtonValue);
    }

}

