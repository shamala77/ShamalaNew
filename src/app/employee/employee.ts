export interface IEmployee {
  code: string;
  name: string;
  gender: string;
  annualSalary: number;
  department?:string;

  computeMonthlySalary?(annualSalary:number) : number;
}

export class EmployeeInterface implements IEmployee
{
  constructor(public code:string,public name:string,public gender:string,public annualSalary :number){    
  }

  computeMonthlySalary(annualSalary : number) : number {
    return annualSalary/12;
  }

}
