import { Component } from '@angular/core';


@Component({
  selector: 'my-employee',
  templateUrl: 'employee.component.html',
})
export class EmployeeComponent {
  firstName: string = 'Shamala';
  lastName: string = 'Kandula';
  gender: string = 'Female';
  age: number = 30;
  name: string = 'Tom';

  showDetails: boolean = false;

  toggleDetails() : void{
    this.showDetails = !this.showDetails;
  }
}
