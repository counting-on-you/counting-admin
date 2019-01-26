import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-building',
    templateUrl: './building.component.html',
    styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
    private _name: string;

    movies = [
        'Episode I - The Phantom Menace',
        'Episode II - Attack of the Clones',
        'Episode III - Revenge of the Sith',
        'Episode IV - A New Hope',
        'Episode V - The Empire Strikes Back',
        'Episode VI - Return of the Jedi',
        'Episode VII - The Force Awakens',
        'Episode VIII - The Last Jedi'
    ];

    constructor(private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activeRoute.params.subscribe(params => {
            this._name = params.name;
        });
    }

    drop(event: CdkDragDrop<string[]>) {
        console.log(event);
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
}
