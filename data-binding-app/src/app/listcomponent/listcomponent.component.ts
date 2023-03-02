import { Component } from '@angular/core';

@Component({
  selector: 'app-listcomponent',
  templateUrl: './listcomponent.component.html',
  styleUrls: ['./listcomponent.component.css']
})
export class ListcomponentComponent {

  presidents:any[]=
  [
    {name:"Higgins", term:"2011-"},
    {name:"McAlesse", term:"1997-2011"},
    {name:"Robinson", term:"1990-1997"},
    {name:"Hilery", term:"1976-1990"},
    {name:"O'Dakaigh", term:"1974-1976"},
  ];

}
