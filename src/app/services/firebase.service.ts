import { Building } from './../models/building';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    items: Observable<Building[]>;
    buildings: AngularFireList<Building>;

    constructor(db: AngularFireDatabase) {
        this.buildings = db.list<Building>('/buildings');
        this.items = this.buildings.valueChanges();
    }

    getBuildings(): Observable<Building[]> {
        return this.items;
    }

    addBuilding(b: Building): void {
        this.buildings.set(this.transform(b.name), b);
    }

    deleteBuilding(name: string): void {
        this.buildings.set(this.transform(name), null);
    }


    transform(name: string): string {
        return name.toLowerCase().replace(' ', '_');
    }
}
