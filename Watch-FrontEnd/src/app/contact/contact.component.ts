import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],

})
export class ContactComponent {

  nm: any;
  ph: any;
  eml?: any ;
  ara?: any ;
  @ViewChild('contactForm')form : NgForm | any;
  

  
 

  sendC(){
    alert("Hello " + this.nm + " , Your Contact Details has been sent!📝 we will call back to you on this number " + this.ph + " soon!📞☎")
   
  }

}
