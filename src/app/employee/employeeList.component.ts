import { Component,OnInit } from '@angular/core';
import { IEmployee } from './employee';
import {EmployeeService} from './employee.service'
 
@Component({
  selector: 'list-employees',
  templateUrl: 'employeeList.component.html',
  styleUrls: ['employeeList.component.css'],
  providers :[EmployeeService]
})
export class EmployeeListComponent implements OnInit{
  employees: IEmployee[];
  selectedRadioButtonEmployeeCount : string='All';

  constructor(private _employeeService:EmployeeService) {
  
  }
  ngOnInit()
  { 
    this.employees=this._employeeService.getEmployees();
  }
  getAllEmployeesCount(): number {
    return this.employees.length;
  }

  getAllMaleEmployeesCount(): number {
    return this.employees.filter((e) => e.gender === 'Male').length;
  }

  getAllFemaleEmployeesCount(): number {
    return this.employees.filter((e) => e.gender === 'Female').length;
  }

  onEmployeeCountRadioButtonCountChange(selectedRadioButtonValue:any) : void{
    console.log('test'+selectedRadioButtonValue );
    this.selectedRadioButtonEmployeeCount = selectedRadioButtonValue;
   
  }

  getEmployees(): void {
    this.employees = [
      { code: 'emp001', name: 'Tom', gender: 'Male', annualSalary: 20000 },
      { code: 'emp002', name: 'Alex', gender: 'Male', annualSalary: 23000 },
      { code: 'emp003', name: 'Mary', gender: 'Female', annualSalary: 20000 },
      { code: 'emp004', name: 'Mike', gender: 'Male', annualSalary: 25000},
      { code: 'emp005', name: 'Sam', gender: 'Female', annualSalary: 25000.34 },
    ];
  }

  trackByEmployees(index: number, employees: any): string {
    return employees.code;
  }
}
