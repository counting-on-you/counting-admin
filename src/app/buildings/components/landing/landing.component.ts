import { Building } from './../../../models/building';
import { FirebaseService } from './../../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';



import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

    closeResult: string;
    selected: string;

    items: Observable<Building[]>;
    private _items: Building[];

    private _newItem: Building | any = {
        name: '',
        address: '',
        floors: [{
            name: '',
            pi_ids: []
        }]
    };

    constructor(private fb: FirebaseService, private modalService: NgbModal) { }

    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }

    openVerticallyCentered(content) {
        this.modalService.open(content, { centered: true });
    }

    transformTitle(title: string): string {
        return title.replace(/ /g, '_').toLowerCase();
    }

    ngOnInit() {
        this.fb.getBuildings().subscribe((data: Building[]) => {
            this._items = data.map(item => {
                return {
                    ...item,
                    link: this.transformTitle(item.name)
                };
            });
            console.log(this._items);
        });
    }

    submit(): void {
        console.log('Submitting');

        const newFloor: any = this._newItem.floors[0];
        console.log(newFloor);
        this._newItem.floors = {
            [newFloor.name]: {
                ...newFloor
            },
        };
        this.fb.addBuilding(this._newItem);

        // Clear newItem
        this._newItem = {
            name: '',
            address: '',
            floors: [{
                name: '',
                pi_ids: []
            }]
        };
    }

    deleteConfirm(content, name: string) {
        this.selected = name;
        this.openVerticallyCentered(content);
    }

    delete(name: string): void {
        this.fb.deleteBuilding(name);
    }

}
