import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Add-BluePrint_Angular';
  
  // display in placeholder  
  sn = 'Sever Name';  
  sc = 'Sever Content';

  // collect input Data
  server_name = '';        
  server_content = ''; 
  
  // Error msg
  emptyInputEr ='Check your inputs and try again.';
  emptyError = false;

  // inputs collect array 
  collect_inputs: any = [];

  // Add Sever btn
  addServer(){    
    if(!this.server_name || !this.server_content){
      this.emptyError = true;
    } else {
      this.emptyError = false;
      this.collect_inputs.push({
        type : 'server',
        name : this.server_name, 
        content : this.server_content
      })
    }
  }

  // Add Sever BluePrint btn
  addServerBluePrint(){    
    if(!this.server_name || !this.server_content){
      this.emptyError = true;
    } else {
      this.emptyError = false;
      this.collect_inputs.push({
        type : 'bluePrint',
        name : this.server_name, 
        content : this.server_content
      })
    }
  }
}