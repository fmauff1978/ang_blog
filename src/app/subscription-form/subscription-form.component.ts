import { Component, OnInit } from '@angular/core';
import { Sub } from '../models/sub';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {


  constructor (private subS: SubscribeService){}
  ngOnInit(): void {
   
  }

onSubmit(formValue: any){

  console.log(formValue)
  const subData : Sub = {


    name: formValue.name,
    email: formValue.email
  }

  this.subS.checkSubs(subData.email).subscribe(val =>{

    console.log(val)

    if(val.empty){
      this.subS.addSubs(subData)

    }else{

      console.log("email ja cadastrado!")
    }
  })

}
  

}
