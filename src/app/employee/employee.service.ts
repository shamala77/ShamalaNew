import {Injectable, INJECTOR} from '@angular/core';
import {IEmployee} from './employee';
import {Http,response } from '@angular/http';

@Injectable()

export class EmployeeService
{




  getEmployees() : IEmployee[]{
    return [  
    { code: 'emp001', name: 'Tom', gender: 'Male', annualSalary: 20000 },
    { code: 'emp002', name: 'Alex', gender: 'Male', annualSalary: 23000 },
    { code: 'emp003', name: 'Mary', gender: 'Female', annualSalary: 20000 },
    { code: 'emp004', name: 'Mike', gender: 'Male', annualSalary: 25000 },
    { code: 'emp005', name: 'Sam', gender: 'Female', annualSalary: 25000.34 },
    { code: 'emp004', name: 'Jhon', gender: 'Male', annualSalary: 25000 },
  ];
  }
}

