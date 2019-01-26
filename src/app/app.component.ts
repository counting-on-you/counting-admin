import { Building } from './models/building';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
    mobileQuery: MediaQueryList;

    items: Observable<Building[]>;
    private _items: Building[];

    private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, db: AngularFireDatabase) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);

        this.items = db.list<Building>('/building').valueChanges();
        this.items.subscribe((data: Building[]) => {
            this._items = data.map(item => {
                return {
                    ...item,
                    link: this.transformTitle(item.name)
                };
            });
            console.log(this._items);
        });
    }

    transformTitle(title: string): string {
        return title.replace(' ', '-').toLowerCase();
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
