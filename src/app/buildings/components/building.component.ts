import { Building } from './../../models/building';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-building',
    templateUrl: './building.component.html',
    styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

    private _name: string = null;

    private _buildings;
    private _floors;

    constructor(private activeRoute: ActivatedRoute, private fb: FirebaseService) { }

    ngOnInit() {
        this.activeRoute.params.subscribe(params => {
            this._name = params.name;
            this.updateFloors();
        });

        this.fb.getBuildings().subscribe((data: Building[]) => {
            this._buildings = {};
            data.forEach(item => {
                this._buildings[this.transformTitle(item.name)] = { ...item };
            });

            this.updateFloors();

        });
    }

    updateFloors(): void {
        if (this._buildings && this._name) {
            this._floors = this._buildings[this._name]['floors'];
        }
    }

    transformTitle(title: string): string {
        return title.replace(' ', '-').toLowerCase();
    }
}
