import { Building, Floor } from './../models/building';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {

    items: Observable<Building[]>;
    buildings: AngularFireList<Building>;

    constructor(private db: AngularFireDatabase) {
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

    addFloor(name: string, f: Floor): void {
        this.db.list<Floor>('/buildings/' + this.transform(name) + '/floors').set(f.name, f);
    }

    deleteFloor(building: string, name: string): void {
        this.db.list<Floor>('/buildings/' + this.transform(building) + '/floors').set(name, null);
    }


    transform(name: string): string {
        return name.toLowerCase().replace(' ', '_');
    }
}
