import { Injectable } from "@angular/core";
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Workteam } from "../interfaces/workteam.interface";

@Injectable({
    providedIn: 'root'
})
export class WorkteamService {
    constructor(private firestore: Firestore) { }

    addWorkteam(workteam: Workteam){
        const workteamRef = collection(this.firestore, 'workteam');
        return addDoc(workteamRef, workteam);
    }

    getWorkteam(): Observable<Workteam[]>{
        const workteamRef = collection(this.firestore, 'workteam');
        return collectionData(workteamRef, {idField: 'id'}) as Observable<Workteam[]>;
    }
    
    deleteWorkteam(workteam: Workteam){
        const workteamDocRef = doc(this.firestore, `workteam/${workteam['id']}`);
        return deleteDoc(workteamDocRef);
    }
}