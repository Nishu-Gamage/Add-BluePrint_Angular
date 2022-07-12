import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  // Print array element
  @Input("srvElement") element: { name:string; type: string; content: string; } = {
    name: '',
    type: '',
    content: ''
  } 

  constructor() { }
  ngOnInit(): void { }

}
