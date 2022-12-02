import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  //templateUrl: './app.component.html',
  /*template: `<div>
              <h1>{{pageHeader}}</h1>
              <img src='{{image}}'/>
              <h2>{{callFuntion()}}</h2>
              <my-employee></my-employee>
             
              </div>`, */
  template : `<list-employees><list-employees>`,
   //template : `Your text: <input type='text' [(ngModel)]='userText'>
   //<simple [simpleInput] = 'userText'></simple>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageHeader: string = 'Employee Details';
  userText:string= 'Pregim';
  image: string =
    'https://www.pragimtech.com/wp-content/uploads/2019/02/pargim-logo-1.png';

  fistName: string = 'Shamala';
  lastName: string = 'Kandula';

  callFuntion(): string {
    return this.fistName + '' + this.lastName;
  }

  // appTitle: string = 'Welcome'; //'Angular ' + VERSION.major;
  //appStatus: boolean = true;
  /*appList : any[] = [{
    'Id': '1',
    'Name': 'One'
  },
  {
    'Id': '2',
    'Name': 'Two'
  }];*/
}
