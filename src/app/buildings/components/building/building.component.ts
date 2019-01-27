import { Building, Floor } from '../../../models/building';
import { FirebaseService } from '../../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-building',
    templateUrl: './building.component.html',
    styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

    private _name: string = null;
    private formatName: string = null;
    selected: string;
    newPIs: string[] = [];
    eids_count: number[] = [0];


    private _buildings;
    private _floors;

    private _newItem: Floor = {

        name: '',
        pi_ids: {}

    };

    constructor(private activeRoute: ActivatedRoute, private fb: FirebaseService, private modalService: NgbModal) { }

    ngOnInit() {
        this.activeRoute.params.subscribe(params => {
            this._name = params.name;
            this.updateFloors();
        });

        this.activeRoute.queryParams.subscribe(params => {
            this.formatName = params.name;
        });

        this.fb.getBuildings().subscribe((data: Building[]) => {
            this._buildings = {};
            data.forEach(item => {
                this._buildings[this.transformTitle(item.name)] = { ...item };
            });

            this.updateFloors();

        });
    }

    submit(): void {
        console.log('Submitting');
        this.newPIs.forEach(item => {
            this._newItem.pi_ids[item] = true;
        });

        console.log(this._name);
        console.log(this._newItem);

        this.fb.addFloor(this._name, this._newItem);

        // Clear newItem
        this._newItem = {
            name: '',
            pi_ids: {}
        };

        this.newPIs = [];
        this.eids_count = [0];
    }

    openVerticallyCentered(content) {
        this.modalService.open(content, { centered: true });
    }

    deleteConfirm(content, name: string) {
        this.selected = name;
        this.openVerticallyCentered(content);
    }


    delete(name: string): void {
        this.fb.deleteFloor(this._name, name);
    }

    updateFloors(): void {
        if (this._buildings && this._name) {
            this._floors = this._buildings[this._name]['floors'];
            console.log(this._floors);
        }
    }

    transformTitle(title: string): string {
        return title.replace(' ', '-').toLowerCase();
    }
}
