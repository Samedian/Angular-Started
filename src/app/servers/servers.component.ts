import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]', //<div app-servers></div>
  selector: '.app-servers', //<div class='app-servers'></div>
   templateUrl: './servers.component.html',
  // template:'<app-server></app-server><hr><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer =false;
  serverCreationStatus ="No Server created!! ";
  serverName :string="";
  serverCreated=false;
  servers=['server1' , 'server2'];
  constructor() {

    setTimeout(() =>{

      this.allowNewServer=true;
    },2000)
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus="Server Created : "+this.serverName;
  }
  onServerUpdate(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
