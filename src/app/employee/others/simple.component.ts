import {Component,Input,OnChanges,SimpleChanges} from '@angular/core'

@Component({
  selector : 'simple',
  template:`You entered {{simpleInput}}`
})
export class SimpleComponent implements OnChanges{
  @Input() simpleInput:string;

  ngOnChanges(changes : SimpleChanges){
    for(let PropertyName in changes)
    {
      let change= changes[PropertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
      console.log(changes);
      console.log(change);
      console.log(PropertyName+' : currentValue ='+current+', previousValue='+previous);
    }

  }
}