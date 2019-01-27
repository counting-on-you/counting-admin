(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buildings-buildings-module"],{

/***/ "./src/app/buildings/buildings-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/buildings/buildings-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: BuildingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingsRoutingModule", function() { return BuildingsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_building_building_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/building/building.component */ "./src/app/buildings/components/building/building.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/buildings/components/landing/landing.component.ts");





var routes = [{
        path: ':name',
        component: _components_building_building_component__WEBPACK_IMPORTED_MODULE_1__["BuildingComponent"]
    },
    {
        path: '',
        component: _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]
    }];
var BuildingsRoutingModule = /** @class */ (function () {
    function BuildingsRoutingModule() {
    }
    BuildingsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], BuildingsRoutingModule);
    return BuildingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/buildings/buildings.module.ts":
/*!***********************************************!*\
  !*** ./src/app/buildings/buildings.module.ts ***!
  \***********************************************/
/*! exports provided: BuildingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingsModule", function() { return BuildingsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _buildings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buildings-routing.module */ "./src/app/buildings/buildings-routing.module.ts");
/* harmony import */ var _components_building_building_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/building/building.component */ "./src/app/buildings/components/building/building.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/buildings/components/landing/landing.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var BuildingsModule = /** @class */ (function () {
    function BuildingsModule() {
    }
    BuildingsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_building_building_component__WEBPACK_IMPORTED_MODULE_4__["BuildingComponent"], _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _buildings_routing_module__WEBPACK_IMPORTED_MODULE_3__["BuildingsRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ]
        })
    ], BuildingsModule);
    return BuildingsModule;
}());



/***/ }),

/***/ "./src/app/buildings/components/building/building.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/buildings/components/building/building.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inside-btn {\n    color: white;\n  }\n\n  .plus {\n      color: #28a745;\n  }\n\n  .plus-holder {\n    display: flex;\n    justify-content: center;\n    align-items: center\n  }\n\n  .card {\n    margin: 1em;\n}\n\n  .holder {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVpbGRpbmdzL2NvbXBvbmVudHMvYnVpbGRpbmcvYnVpbGRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7RUFDZDs7RUFFQTtNQUNJLGNBQWM7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCO0VBQ0Y7O0VBRUY7SUFDSSxXQUFXO0FBQ2Y7O0VBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvYnVpbGRpbmdzL2NvbXBvbmVudHMvYnVpbGRpbmcvYnVpbGRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnNpZGUtYnRuIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAucGx1cyB7XG4gICAgICBjb2xvcjogIzI4YTc0NTtcbiAgfVxuXG4gIC5wbHVzLWhvbGRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXG4gIH1cblxuLmNhcmQge1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG4uaG9sZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/buildings/components/building/building.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/buildings/components/building/building.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br/>\n<h1 style=\"text-align: center;\">{{formatName}}</h1>\n\n<div class=\"d-flex flex-row justify-content-around flex-wrap\">\n    <div class=\"card p-2\" style=\"width: 18rem;\" *ngFor=\"let floor of _floors | keyvalue\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">{{floor.value.name}}</h5>\n            <p class=\"card-text\" *ngFor=\"let pid of floor.value.pi_ids | keyvalue\">{{pid.key}}</p>\n            <div class=\"holder\">\n                <a (click)=\"deleteConfirm(deleteContent, floor.value.name)\" class=\"btn btn-danger\" style=\"margin-left:1em\">  <i class=\"far fa-trash-alt inside-btn\"> Remove</i></a>\n            </div>\n        </div>\n    </div>\n     <div class=\"p-2 plus-holder\" style=\"width: 18rem;\" >\n        <div class=\"plus-holder\">\n            <span (click)=\"openVerticallyCentered(content)\" style=\"align-items:center\"><i class=\"fas fa-plus-circle fa-5x plus\"></i></span>\n        </div>\n    </div>\n</div>\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">New Floor</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form>\n  <div class=\"form-group\">\n    <label for=\"inputName\">Floor Name</label>\n    <input [(ngModel)]=\"_newItem.name\" type=\"text\" class=\"form-control\" id=\"inputName\" name=\"inputName\" placeholder=\"Floor One\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputPI\">PI Identifiers</label>\n    <input *ngFor=\"let myNum of eids_count\" [(ngModel)]=\"newPIs[myNum]\" type=\"text\" class=\"form-control\" id=\"inputPI\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"\">\n    <h3 (click)=\"eids_count.push(eids_count.length)\"class=\"list-group-item\"> <strong>+</strong></h3>\n    \n  </div>\n  \n  <div class=\"modal-footer\">\n    <button type=\"submit\" class=\"btn btn-outline-dark\" (click)=\"submit();modal.close('Save click')\">Submit</button>\n  </div>\n</form>\n</div>\n</ng-template>\n\n<ng-template #deleteContent let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-title\">Floor deletion</h4>\n    <button type=\"button\" class=\"close\" aria-describedby=\"modal-title\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p><strong>Are you sure you want to delete <span class=\"text-primary\">{{selected}}</span>?</strong></p>\n    <p>All information associated to this building will be permanently deleted.\n    <span class=\"text-danger\">This operation can not be undone.</span>\n    </p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"modal.dismiss('cancel click')\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(selected);modal.close('Ok click')\">Ok</button>\n  </div>\n</ng-template>\n\n\n"

/***/ }),

/***/ "./src/app/buildings/components/building/building.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/buildings/components/building/building.component.ts ***!
  \*********************************************************************/
/*! exports provided: BuildingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingComponent", function() { return BuildingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");





var BuildingComponent = /** @class */ (function () {
    function BuildingComponent(activeRoute, fb, modalService) {
        this.activeRoute = activeRoute;
        this.fb = fb;
        this.modalService = modalService;
        this._name = null;
        this.formatName = null;
        this.newPIs = [];
        this.eids_count = [0];
        this._newItem = {
            name: '',
            pi_ids: {}
        };
    }
    BuildingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this._name = params.name;
            _this.updateFloors();
        });
        this.activeRoute.queryParams.subscribe(function (params) {
            _this.formatName = params.name;
        });
        this.fb.getBuildings().subscribe(function (data) {
            _this._buildings = {};
            data.forEach(function (item) {
                _this._buildings[_this.transformTitle(item.name)] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item);
            });
            _this.updateFloors();
        });
    };
    BuildingComponent.prototype.submit = function () {
        var _this = this;
        console.log('Submitting');
        this.newPIs.forEach(function (item) {
            _this._newItem.pi_ids[item] = true;
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
    };
    BuildingComponent.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true });
    };
    BuildingComponent.prototype.deleteConfirm = function (content, name) {
        this.selected = name;
        this.openVerticallyCentered(content);
    };
    BuildingComponent.prototype.delete = function (name) {
        this.fb.deleteFloor(this._name, name);
    };
    BuildingComponent.prototype.updateFloors = function () {
        if (this._buildings && this._name) {
            this._floors = this._buildings[this._name]['floors'];
            console.log(this._floors);
        }
    };
    BuildingComponent.prototype.transformTitle = function (title) {
        return title.replace(' ', '-').toLowerCase();
    };
    BuildingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-building',
            template: __webpack_require__(/*! ./building.component.html */ "./src/app/buildings/components/building/building.component.html"),
            styles: [__webpack_require__(/*! ./building.component.css */ "./src/app/buildings/components/building/building.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], BuildingComponent);
    return BuildingComponent;
}());



/***/ }),

/***/ "./src/app/buildings/components/landing/landing.component.css":
/*!********************************************************************!*\
  !*** ./src/app/buildings/components/landing/landing.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inside-btn {\n    color: white;\n  }\n\n  .plus {\n      color: #28a745;\n  }\n\n  .plus-holder {\n    display: flex;\n    justify-content: center;\n    align-items: center\n  }\n\n  .card {\n    margin: 1em;\n}\n\n  .holder {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVpbGRpbmdzL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7TUFDSSxjQUFjO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QjtFQUNGOztFQUVGO0lBQ0ksV0FBVztBQUNmOztFQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2J1aWxkaW5ncy9jb21wb25lbnRzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluc2lkZS1idG4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIC5wbHVzIHtcbiAgICAgIGNvbG9yOiAjMjhhNzQ1O1xuICB9XG5cbiAgLnBsdXMtaG9sZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcbiAgfVxuXG4uY2FyZCB7XG4gICAgbWFyZ2luOiAxZW07XG59XG5cbi5ob2xkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/buildings/components/landing/landing.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/buildings/components/landing/landing.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"d-flex flex-row justify-content-around flex-wrap\">\n    <div class=\"card p-2\" style=\"width: 18rem;\" *ngFor=\"let item of _items\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">{{item.name}}</h5>\n            <p class=\"card-text\">{{item.address}}</p>\n            <div class=\"holder\">\n                <a [routerLink]=\"item.link\" [queryParams]=\"{name: item.name}\"class=\"btn btn-secondary\"> <i class=\"far fa-building inside-btn\"> Floors</i></a>\n                <a (click)=\"deleteConfirm(deleteContent, item.name)\" class=\"btn btn-danger\" style=\"margin-left:1em\">  <i class=\"far fa-trash-alt inside-btn\"> Remove</i></a>\n            </div>\n        </div>\n    </div>\n     <div class=\"p-2 plus-holder\" style=\"width: 18rem;\" >\n        <div class=\"plus-holder\">\n            <span (click)=\"openVerticallyCentered(content)\" style=\"align-items:center\"><i class=\"fas fa-plus-circle fa-5x plus\"></i></span>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">New Building</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form>\n  <div class=\"form-group\">\n    <label for=\"inputName\">Name</label>\n    <input [(ngModel)]=\"_newItem.name\" type=\"text\" class=\"form-control\" id=\"inputName\" name=\"inputName\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputAddress\">Address</label>\n    <input [(ngModel)]=\"_newItem.address\" type=\"text\" class=\"form-control\" id=\"inputAddress\" name=\"inputAddress\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"inputAddress\">Starting Floor</label>\n    <input [(ngModel)]=\"_newItem.floors[0].name\" type=\"text\" class=\"form-control\" id=\"inputAddress\" name=\"inputFloor\" placeholder=\"Floor One\">\n  </div>\n  \n  <div class=\"modal-footer\">\n    <button type=\"submit\" class=\"btn btn-outline-dark\" (click)=\"submit();modal.close('Save click')\">Submit</button>\n  </div>\n</form>\n</div>\n</ng-template>\n\n<ng-template #deleteContent let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-title\">Building deletion</h4>\n    <button type=\"button\" class=\"close\" aria-describedby=\"modal-title\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p><strong>Are you sure you want to delete <span class=\"text-primary\">{{selected}}</span>?</strong></p>\n    <p>All information associated to this building will be permanently deleted.\n    <span class=\"text-danger\">This operation can not be undone.</span>\n    </p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"modal.dismiss('cancel click')\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete(selected);modal.close('Ok click')\">Ok</button>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/buildings/components/landing/landing.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/buildings/components/landing/landing.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");




var LandingComponent = /** @class */ (function () {
    function LandingComponent(fb, modalService) {
        this.fb = fb;
        this.modalService = modalService;
        this._newItem = {
            name: '',
            address: '',
            floors: [{
                    name: '',
                    pi_ids: []
                }]
        };
    }
    LandingComponent.prototype.open = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    };
    LandingComponent.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true });
    };
    LandingComponent.prototype.transformTitle = function (title) {
        return title.replace(' ', '-').toLowerCase();
    };
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fb.getBuildings().subscribe(function (data) {
            _this._items = data.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { link: _this.transformTitle(item.name) });
            });
            console.log(_this._items);
        });
    };
    LandingComponent.prototype.submit = function () {
        console.log('Submitting');
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
    };
    LandingComponent.prototype.deleteConfirm = function (content, name) {
        this.selected = name;
        this.openVerticallyCentered(content);
    };
    LandingComponent.prototype.delete = function (name) {
        this.fb.deleteBuilding(name);
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/buildings/components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/buildings/components/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");



var FirebaseService = /** @class */ (function () {
    function FirebaseService(db) {
        this.db = db;
        this.buildings = db.list('/building');
        this.items = this.buildings.valueChanges();
    }
    FirebaseService.prototype.getBuildings = function () {
        return this.items;
    };
    FirebaseService.prototype.addBuilding = function (b) {
        this.buildings.set(this.transform(b.name), b);
    };
    FirebaseService.prototype.deleteBuilding = function (name) {
        this.buildings.set(this.transform(name), null);
    };
    FirebaseService.prototype.addFloor = function (name, f) {
        this.db.list('/building/' + this.transform(name) + '/floors').set(f.name, f);
    };
    FirebaseService.prototype.deleteFloor = function (building, name) {
        this.db.list('/building/' + this.transform(building) + '/floors').set(name, null);
    };
    FirebaseService.prototype.transform = function (name) {
        return name.toLowerCase().replace(' ', '_');
    };
    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ })

}]);
//# sourceMappingURL=buildings-buildings-module.js.map