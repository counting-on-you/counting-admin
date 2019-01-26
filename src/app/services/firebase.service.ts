import { Building } from './../models/building';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    items: Observable<Building[]>;

    constructor(db: AngularFireDatabase) {
        this.items = db.list<Building>('/building').valueChanges();
    }

    getBuildings(): Observable<Building[]> {
        return this.items;
    }
}
