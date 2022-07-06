import { Component, OnInit } from '@angular/core';
import { Inject, Injectable } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  // display in placeholder  
  sn = 'Sever Name';  
  sc = 'Sever Content';
  pHeading ='';
  pBody ='';

  // collect input Data
  sever_name = '';        
  sever_content = '';  
  btnValue = 0;
  // arraylength: any = '';  
  collect_inputs: any = [];
  print_in_panel: any = [];
  
  // Error msg
  emptyInputEr ='Check your inputs and try again.';
  emptyError = false;

  // Add Sever & Add Sever BluePrint btn
  addServer(btnVal:any){
    
    if(!this.sever_name || !this.sever_content){
      this.emptyError = true;
    } else {
      this.emptyError = false;
      this.btnValue = btnVal;
      this.collect_inputs.push(this.sever_name, this.sever_content);
      
      // this.print_in_panel = this.collect_inputs.slice(-2);
      // return btnVal;
      
      if(btnVal == 1){

        // this.pHeading = this.collect_inputs.slice(-2)[0];
        // this.pBody = this.collect_inputs.slice(-2)[1];          
        // return this.collect_inputs.slice(), btnVal;
      } 
      else if(btnVal == 2){
        return this.collect_inputs.slice(), btnVal;
      }

    }
  }

  
  constructor() { }
  ngOnInit(): void {}

}
