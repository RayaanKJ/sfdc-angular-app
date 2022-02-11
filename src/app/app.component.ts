import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sfdc-angular-app';
  name='Rayaan Khan';
  mycity='Hubli';

    allowNewServer:boolean=false;
    serverStatus:string='Not Created';

  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true; 
    },4000);
  }

  createserver=()=>{
    this.serverStatus='Server Created';
  }

  fun=():string=>{
    return' fun function works';

  }
}





// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'sfdc-angular-app';
// }
