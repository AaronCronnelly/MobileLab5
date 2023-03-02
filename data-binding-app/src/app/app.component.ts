import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';

  count:number=0;
  myVar:boolean=true;

  onClcik()
  {
    this.count++;

    if(this.count==11)
    {
      this.count=0;
    }
  }

  dblClick()
  {
    if(this.myVar==true)
    {
      this.myVar=false
    }
    else if(this.myVar==false)
    {
      this.myVar=true;
    }
  }
}
