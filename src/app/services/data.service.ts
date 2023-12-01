import { Injectable } from "@angular/core";
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from "@angular/fire/firestore";
import { Data } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private firestore: Firestore) { }

    addData(data: Data){
        const dataRef = collection(this.firestore, 'data');
        return addDoc(dataRef, data);
    }

    getData(): Observable<Data[]>{
        const dataRef = collection(this.firestore, 'data');
        return collectionData(dataRef, {idField: 'id'}) as Observable<Data[]>;
       
    }
    
    deleteData(data: Data){
        const dataDocRef = doc(this.firestore, `dashboard/tables/data/${data['id']}`);
        return deleteDoc(dataDocRef);
    }}
