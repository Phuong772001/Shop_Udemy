import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  checkoutForm: FormGroup;
  constructor(private fb: FormBuilder, private accountService: AccountService) { }

  ngOnInit(): void {
    this.createCheckoutForm();
    this.loadAddress();
  }

  createCheckoutForm(){
    this.checkoutForm = this.fb.group({
      addressForm: this.fb.group({
        firstName: [null,Validators.required],
        lastName: [null,Validators.required],
        street: [null,Validators.required],
        city: [null,Validators.required],
        state: [null,Validators.required],
        zipCode: [null,Validators.required]
      }),
      deliveryForm: this.fb.group({
        deliveryMethod: [null,Validators.required]
      }),
      paymentForm: this.fb.group({
        nameOnCard: [null, Validators.required]
      })
    })
  }
  loadAddress(){
    this.accountService.getAddressUser().subscribe(address => {
      this.checkoutForm.get('addressForm').patchValue(address);
      console.log(address);
    },error => console.log(error));
  }
  

}