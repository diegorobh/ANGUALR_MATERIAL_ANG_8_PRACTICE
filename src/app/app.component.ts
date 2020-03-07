import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dusoftNG';
  notifications=2;
  showSpinner=false;
  opened_ = false;

  loadData(){
    this.showSpinner = true;
    setTimeout(()=>{
      this.showSpinner = false;
    },5000)
  }

  consoleOpen(){
    console.log(this.opened_);
  }

}
