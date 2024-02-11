import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  constructor(private fs: AngularFirestore) { }


loadData(){

 return this.fs.collection('categories').snapshotChanges().pipe(map(actions =>{

  return actions.map(a =>{

    const data = a.payload.doc.data();
    const id = a.payload.doc.id;
    return {id,data}
    console.log(data);
  })
 }))
}

}
