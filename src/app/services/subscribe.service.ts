import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private fs: AngularFirestore) { }


  addSubs(subData: unknown){

    this.fs.collection('subs').add(subData).then(()=>{

      console.log("subscricao feita com sucesso")
    })


  }

  checkSubs(subEmail: any){

    return this.fs.collection('subs', ref => ref.where('email', '==', subEmail)).get()

  }
}
