import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  
  // display in placeholder  
  sn = 'Sever Name';  
  sc = 'Sever Content';

  // collect input Data
  server_name = '';        
  server_content = ''; 
  @Output() serverCreated = new EventEmitter <{serverName:string , serverContent:string}> () ;
  @Output('bpCreated') bluePrintCreated = new EventEmitter <{serverName:string , serverContent:string}> () ;

  // Add Sever btn
  addServer(){
    if(this.server_name || this.server_content){
      this.serverCreated.emit({
        serverName : this.server_name,
        serverContent : this.server_content
      })
    }  
  }

  // Add Sever BluePrint btn
  addServerBluePrint(){  
    if(this.server_name || this.server_content){
      this.bluePrintCreated.emit({
        serverName : this.server_name,
        serverContent : this.server_content
       })
    }
  }

  constructor() { }
  ngOnInit(): void {  }

}
