import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../services/managerService/manager.service'
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
data:any
  submitted: boolean;
  formProcess: boolean;
  message: string;
  constructor(private service: ManagerService) {


   }
  handler: any = null;
  ngOnInit() {
    this.loadStripe()
  }


  

  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51Jji91SJgMg3LQvEOgfXkQ5f9U8foDKtBHV2avtILChYkQBVq26H5LrLsa04EfbX2I0RLglO4r3yY8JmBfK7axLQ00iMEeEvsK',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }

  pay(amount) {

    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51Jji91SJgMg3LQvEOgfXkQ5f9U8foDKtBHV2avtILChYkQBVq26H5LrLsa04EfbX2I0RLglO4r3yY8JmBfK7axLQ00iMEeEvsK',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        // this.payStore(token)
        this.data=token
        alert('Token Created!!');
     
      }
    });

    handler.open({
      name: 'Subscriptions',
      description: '2 widgets',
      amount: amount * 100
    });

  }
  payStore(data) {
    console.log("token inside",data);
    
    this.service.PaymentsService(data).subscribe((res) => {
      console.log(res);

    }, err => {
      console.log(err);

    })
  }



}
