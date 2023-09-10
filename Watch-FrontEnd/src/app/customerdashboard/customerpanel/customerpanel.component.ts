import { Component } from '@angular/core';
import { MyserviceService } from 'src/app/myservice.service';
import { category } from 'src/app/category';
import { productbycategory } from 'src/app/productbycategory';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { HttpHeaders } from '@angular/common/http';

declare var Razorpay:any;


@Component({
  selector: 'app-customerpanel',
  templateUrl: './customerpanel.component.html',
  styleUrls: ['./customerpanel.component.css']
})
export class CustomerpanelComponent {




catObj?:category[]=[]
catid?:number
cart?:any[]=[]
tot?:number = 0
options?:any
prdtbycat?:productbycategory[]=[]
objResp: any;




constructor(private serv:MyserviceService)
{
  this.serv.getallcategory().subscribe(res=>this.catObj=res,err=>console.log(err))
  this.serv.getallproduct().subscribe(res=>this.prdtbycat=res,err=>console.log(err))

}

showValue(){console.log(this.catid)

  this.serv.getallproductbycategory(this.catid).subscribe(res=>
    this.prdtbycat=res,err=>console.log(err) )

}


addtolocalstorage(a?:any)
{
  console.log(a);
  localStorage.setItem(a.prnm,JSON.stringify(a));
  alert("Your Product has been Cart")
}

showcart()
{
  var obj={};
  this.tot=0;
  this.cart=[];

  for (var i = 0; i < localStorage.length; ++i) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    try{
      obj=JSON.parse(value);
      this.tot += obj["price"]
      this.cart.push(obj);
    }catch (e){

    }


}
//console.log(this.cart)

}

  deletecart(a?:any)
  {
  let obj={}
  this.tot=0;
    let index = this.cart.indexOf(a);

    this.cart.splice(index, 1);
    //first delete existing list
    localStorage.removeItem(a.prnm);

    for (var i = 0; i < localStorage.length; ++i) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      try{
        obj=JSON.parse(value)
      }catch (e){

      }
      this.tot += obj["price"]
      }
  }


  ordernow() {

    let result = window.confirm("Do you really want to confirm the order :");
    if(result)
      {
        this.serv.createTransaction(this.tot).subscribe(
        res => { console.log(res);
        this.openTransactionModal(res);
        
        },
        err=>
        {
          alert(" Error in confirming the order ! ");
        console.log(err); })
      }
    else {
        alert("Order is not confirm");
        }

  }

  openTransactionModal(response:any) {
     this.options={
      order_id: response.orderId,
      key:response.key,
      amount:response.amount,
      currency:response.currency,
      name:'Diptanu Baidya',
      description:'Payment gateway check',
      image:'https://images.sftcdn.net/images/t_app-icon-m/p/9fc73b7b-ed27-4ace-a5a6-4d2a17faada9/1749189921/mahadev-wallpaper-hd-logo',
      handler: (response:any) =>{
        this.processResponse(response);
      },
      prefill:{
        name:'Diptanu Baidyaa',
        email:'diptanubaidya2@gmail.com',
        contact:'9366609069',
      },
      notes:{
        address:'Online Shopping'
      },
      theme:{
        color:'#F37254'
      }
    };
    let razorPayObject=new Razorpay(this.options);
    razorPayObject.open();
  
  }
  
  processResponse(resp:any) {
    const message = "Hey! Our Valuable Customer👨‍💼👩‍💼 Your Payment is Done 😎, with the order id  " +  resp.razorpay_order_id + " " + "  and payment Id " + " " + resp.razorpay_payment_id + " " + "  Once Your Order will Be Shipped, we will send you a message to your registered Number 😄📲";
    alert(message);


  }
  
  



}


