import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // inputs collect array 
  collect_inputs: any = [];

  // Add Sever btn
  onServerAdded(serverData:{serverName:string , serverContent:string}){ 
    this.collect_inputs.push({
      type : 'server',
      name : serverData.serverName, 
      content : serverData.serverContent
    })
  }

  // Add Sever BluePrint btn
  onBluePrintAdded(bluePrintData:{serverName:string , serverContent:string}){  
    this.collect_inputs.push({
      type : 'bluePrint',
      name : bluePrintData.serverName, 
      content : bluePrintData.serverContent
    })
  }
  
}