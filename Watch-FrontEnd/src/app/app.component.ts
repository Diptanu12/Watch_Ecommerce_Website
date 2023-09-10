import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cakes';
eml: any;
constructor(private serv:MyserviceService){}

emlSub(){
this.serv.sendEmail(this.eml).subscribe(Response=>
  console.log(Response));
  alert("Your are Subscribed with us!😍Thank You! ,  You will get all our updates on your mailbox📩")

}
}
