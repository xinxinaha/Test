webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__education_education__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.color = "sblue";
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__education_education__["a" /* EducationPage */];
    }
    TabsPage.prototype.changeColor = function () {
        if (this.color == "sblue") {
            this.color = "light";
        }
    };
    TabsPage.prototype.colorMain = function () {
        this.color = "sblue";
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\zjx_pc\Desktop\Test\test\src\pages\tabs\tabs.html"*/'<ion-tabs color={{color}}>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home" (ionSelect)="colorMain()"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Calendar" tabIcon="calendar" (ionSelect)="changeColor()"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Education" tabIcon="book" (ionSelect)="changeColor()"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Message" tabIcon="contact" (ionSelect)="changeColor()"></ion-tab>\n\n\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\zjx_pc\Desktop\Test\test\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-about',template:/*ion-inline-start:"C:\Users\zjx_pc\Desktop\Test\test\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Calender\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\zjx_pc\Desktop\Test\test\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EducationPage = (function () {
    function EducationPage() {
        this.currentPageClass = this;
        this.alphaScrollItemTemplate = "\n    <ion-item (click)=\"currentPageClass.onItemClick(item)\">\n      <button ion-item detail-none (click)=\"currentPageClass.buttonClick(item)\">\n        {{item.name}}\n      </button>\n      <p>{{contents}}</p>\n    </ion-item>\n  ";
        this.triggerAlphaScrollChange = 0;
        this.assignBreeds();
    }
    EducationPage.prototype.onItemClick = function (item) {
        // This is an example of how you could manually trigger ngOnChange
        // for the component. If you modify "listData" it won't perform
        // an ngOnChange, you will have to trigger manually to refresh the component.
        var itemIndex = __WEBPACK_IMPORTED_MODULE_1_lodash__["findIndex"](this.breed_terms, function (b) {
            return b.name === item.name;
        });
        this.breed_terms.splice(itemIndex, 1);
        this.triggerAlphaScrollChange++;
    };
    EducationPage.prototype.assignBreeds = function () {
        this.breed_terms = [
            {
                "name": "Affenpinscher"
            },
            {
                "name": "Afghan Hound"
            },
            {
                "name": "Airedale Terrier"
            },
            {
                "name": "Akbash"
            },
            {
                "name": "Akita"
            },
            {
                "name": "Alaskan Malamute"
            },
            {
                "name": "American Bulldog"
            },
            {
                "name": "American Eskimo Dog"
            },
            {
                "name": "American Hairless Terrier"
            },
            {
                "name": "American Staffordshire Terrier"
            },
            {
                "name": "American Water Spaniel"
            },
            {
                "name": "Anatolian Shepherd"
            },
            {
                "name": "Appenzell Mountain Dog"
            },
            {
                "name": "Australian Cattle Dog (Blue Heeler)"
            },
            {
                "name": "Australian Kelpie"
            },
            {
                "name": "Australian Shepherd"
            },
            {
                "name": "Australian Terrier"
            },
            {
                "name": "Basenji"
            },
            {
                "name": "Basset Hound"
            },
            {
                "name": "Beagle"
            },
            {
                "name": "Bearded Collie"
            },
            {
                "name": "Beauceron"
            },
            {
                "name": "Bedlington Terrier"
            },
            {
                "name": "Belgian Shepherd Dog Sheepdog"
            },
            {
                "name": "Belgian Shepherd Laekenois"
            },
            {
                "name": "Belgian Shepherd Malinois"
            },
            {
                "name": "Belgian Shepherd Tervuren"
            },
            {
                "name": "Bernese Mountain Dog"
            },
            {
                "name": "Bichon Frise"
            },
            {
                "name": "Black and Tan Coonhound"
            },
            {
                "name": "Black Labrador Retriever"
            },
            {
                "name": "Black Mouth Cur"
            },
            {
                "name": "Black Russian Terrier"
            },
            {
                "name": "Bloodhound"
            },
            {
                "name": "Blue Lacy"
            },
            {
                "name": "Bluetick Coonhound"
            },
            {
                "name": "Boerboel"
            },
            {
                "name": "Bolognese"
            },
            {
                "name": "Border Collie"
            },
            {
                "name": "Border Terrier"
            },
            {
                "name": "Borzoi"
            },
            {
                "name": "Boston Terrier"
            },
            {
                "name": "Bouvier des Flanders"
            },
            {
                "name": "Boxer"
            },
            {
                "name": "Boykin Spaniel"
            },
            {
                "name": "Briard"
            },
            {
                "name": "Brittany Spaniel"
            },
            {
                "name": "Brussels Griffon"
            },
            {
                "name": "Bull Terrier"
            },
            {
                "name": "Bullmastiff"
            },
            {
                "name": "Cairn Terrier"
            },
            {
                "name": "Canaan Dog"
            },
            {
                "name": "Cane Corso Mastiff"
            },
            {
                "name": "Carolina Dog"
            },
            {
                "name": "Catahoula Leopard Dog"
            },
            {
                "name": "Cattle Dog"
            },
            {
                "name": "Caucasian Sheepdog (Caucasian Ovtcharka)"
            },
            {
                "name": "Cavalier King Charles Spaniel"
            },
            {
                "name": "Chesapeake Bay Retriever"
            },
            {
                "name": "Chihuahua"
            },
            {
                "name": "Chinese Crested Dog"
            },
            {
                "name": "Chinese Foo Dog"
            },
            {
                "name": "Chinook"
            },
            {
                "name": "Chocolate Labrador Retriever"
            },
            {
                "name": "Chow Chow"
            },
            {
                "name": "Cirneco dell'Etna"
            },
            {
                "name": "Clumber Spaniel"
            },
            {
                "name": "Cockapoo"
            },
            {
                "name": "Cocker Spaniel"
            },
            {
                "name": "Collie"
            },
            {
                "name": "Coonhound"
            },
            {
                "name": "Corgi"
            },
            {
                "name": "Coton de Tulear"
            },
            {
                "name": "Curly-Coated Retriever"
            },
            {
                "name": "Dachshund"
            },
            {
                "name": "Dalmatian"
            },
            {
                "name": "Dandi Dinmont Terrier"
            },
            {
                "name": "Doberman Pinscher"
            },
            {
                "name": "Dogo Argentino"
            },
            {
                "name": "Dogue de Bordeaux"
            },
            {
                "name": "Dutch Shepherd"
            },
            {
                "name": "English Bulldog"
            },
            {
                "name": "English Cocker Spaniel"
            },
            {
                "name": "English Coonhound"
            },
            {
                "name": "English Pointer"
            },
            {
                "name": "English Setter"
            },
            {
                "name": "English Shepherd"
            },
            {
                "name": "English Springer Spaniel"
            },
            {
                "name": "English Toy Spaniel"
            },
            {
                "name": "Entlebucher"
            },
            {
                "name": "Eskimo Dog"
            },
            {
                "name": "Feist"
            },
            {
                "name": "Field Spaniel"
            },
            {
                "name": "Fila Brasileiro"
            },
            {
                "name": "Finnish Lapphund"
            },
            {
                "name": "Finnish Spitz"
            },
            {
                "name": "Flat-coated Retriever"
            },
            {
                "name": "Fox Terrier"
            },
            {
                "name": "Foxhound"
            },
            {
                "name": "French Bulldog"
            },
            {
                "name": "Galgo Spanish Greyhound"
            },
            {
                "name": "German Pinscher"
            },
            {
                "name": "German Shepherd Dog"
            },
            {
                "name": "German Shorthaired Pointer"
            },
            {
                "name": "German Spitz"
            },
            {
                "name": "German Wirehaired Pointer"
            },
            {
                "name": "Giant Schnauzer"
            },
            {
                "name": "Glen of Imaal Terrier"
            },
            {
                "name": "Golden Retriever"
            },
            {
                "name": "Gordon Setter"
            },
            {
                "name": "Great Dane"
            },
            {
                "name": "Great Pyrenees"
            },
            {
                "name": "Greater Swiss Mountain Dog"
            },
            {
                "name": "Greyhound"
            },
            {
                "name": "Harrier"
            },
            {
                "name": "Havanese"
            },
            {
                "name": "Hound"
            },
            {
                "name": "Hovawart"
            },
            {
                "name": "Husky"
            },
            {
                "name": "Ibizan Hound"
            },
            {
                "name": "Icelandic Sheepdog"
            },
            {
                "name": "Illyrian Sheepdog"
            },
            {
                "name": "Irish Setter"
            },
            {
                "name": "Irish Terrier"
            },
            {
                "name": "Irish Water Spaniel"
            },
            {
                "name": "Irish Wolfhound"
            },
            {
                "name": "Italian Greyhound"
            },
            {
                "name": "Italian Spinone"
            },
            {
                "name": "Jack Russell Terrier"
            },
            {
                "name": "Jack Russell Terrier (Parson Russell Terrier)"
            },
            {
                "name": "Japanese Chin"
            },
            {
                "name": "Jindo"
            },
            {
                "name": "Kai Dog"
            },
            {
                "name": "Karelian Bear Dog"
            },
            {
                "name": "Keeshond"
            },
            {
                "name": "Kerry Blue Terrier"
            },
            {
                "name": "Kishu"
            },
            {
                "name": "Klee Kai"
            },
            {
                "name": "Komondor"
            },
            {
                "name": "Kuvasz"
            },
            {
                "name": "Kyi Leo"
            },
            {
                "name": "Labrador Retriever"
            },
            {
                "name": "Lakeland Terrier"
            },
            {
                "name": "Lancashire Heeler"
            },
            {
                "name": "Leonberger"
            },
            {
                "name": "Lhasa Apso"
            },
            {
                "name": "Lowchen"
            },
            {
                "name": "Maltese"
            },
            {
                "name": "Manchester Terrier"
            },
            {
                "name": "Maremma Sheepdog"
            },
            {
                "name": "Mastiff"
            },
            {
                "name": "McNab"
            },
            {
                "name": "Miniature Pinscher"
            },
            {
                "name": "Mountain Cur"
            },
            {
                "name": "Mountain Dog"
            },
            {
                "name": "Munsterlander"
            },
            {
                "name": "Neapolitan Mastiff"
            },
            {
                "name": "New Guinea Singing Dog"
            },
            {
                "name": "Newfoundland Dog"
            },
            {
                "name": "Norfolk Terrier"
            },
            {
                "name": "Norwegian Buhund"
            },
            {
                "name": "Norwegian Elkhound"
            },
            {
                "name": "Norwegian Lundehund"
            },
            {
                "name": "Norwich Terrier"
            },
            {
                "name": "Nova Scotia Duck-Tolling Retriever"
            },
            {
                "name": "Old English Sheepdog"
            },
            {
                "name": "Otterhound"
            },
            {
                "name": "Papillon"
            },
            {
                "name": "Patterdale Terrier (Fell Terrier)"
            },
            {
                "name": "Pekingese"
            },
            {
                "name": "Peruvian Inca Orchid"
            },
            {
                "name": "Petit Basset Griffon Vendeen"
            },
            {
                "name": "Pharaoh Hound"
            },
            {
                "name": "Pit Bull Terrier"
            },
            {
                "name": "Plott Hound"
            },
            {
                "name": "Podengo Portugueso"
            },
            {
                "name": "Pointer"
            },
            {
                "name": "Polish Lowland Sheepdog"
            },
            {
                "name": "Pomeranian"
            },
            {
                "name": "Poodle"
            },
            {
                "name": "Portuguese Water Dog"
            },
            {
                "name": "Presa Canario"
            },
            {
                "name": "Pug"
            },
            {
                "name": "Puli"
            },
            {
                "name": "Pumi"
            },
            {
                "name": "Rat Terrier"
            },
            {
                "name": "Redbone Coonhound"
            },
            {
                "name": "Retriever"
            },
            {
                "name": "Rhodesian Ridgeback"
            },
            {
                "name": "Rottweiler"
            },
            {
                "name": "Saint Bernard St. Bernard"
            },
            {
                "name": "Saluki"
            },
            {
                "name": "Samoyed"
            },
            {
                "name": "Sarplaninac"
            },
            {
                "name": "Schipperke"
            },
            {
                "name": "Schnauzer"
            },
            {
                "name": "Scottish Deerhound"
            },
            {
                "name": "Scottish Terrier Scottie"
            },
            {
                "name": "Sealyham Terrier"
            },
            {
                "name": "Setter"
            },
            {
                "name": "Shar Pei"
            },
            {
                "name": "Sheep Dog"
            },
            {
                "name": "Shepherd"
            },
            {
                "name": "Shetland Sheepdog Sheltie"
            },
            {
                "name": "Shiba Inu"
            },
            {
                "name": "Shih Tzu"
            },
            {
                "name": "Siberian Husky"
            },
            {
                "name": "Silky Terrier"
            },
            {
                "name": "Skye Terrier"
            },
            {
                "name": "Sloughi"
            },
            {
                "name": "Smooth Fox Terrier"
            },
            {
                "name": "South Russian Ovtcharka"
            },
            {
                "name": "Spaniel"
            },
            {
                "name": "Spitz"
            },
            {
                "name": "Staffordshire Bull Terrier"
            },
            {
                "name": "Standard Poodle"
            },
            {
                "name": "Sussex Spaniel"
            },
            {
                "name": "Swedish Vallhund"
            },
            {
                "name": "Terrier"
            },
            {
                "name": "Thai Ridgeback"
            },
            {
                "name": "Tibetan Mastiff"
            },
            {
                "name": "Tibetan Spaniel"
            },
            {
                "name": "Tibetan Terrier"
            },
            {
                "name": "Tosa Inu"
            },
            {
                "name": "Toy Fox Terrier"
            },
            {
                "name": "Treeing Walker Coonhound"
            },
            {
                "name": "Vizsla"
            },
            {
                "name": "Weimaraner"
            },
            {
                "name": "Welsh Corgi"
            },
            {
                "name": "Welsh Springer Spaniel"
            },
            {
                "name": "Welsh Terrier"
            },
            {
                "name": "West Highland White Terrier Westie"
            },
            {
                "name": "Wheaten Terrier"
            },
            {
                "name": "Whippet"
            },
            {
                "name": "White German Shepherd"
            },
            {
                "name": "Wire Fox Terrier"
            },
            {
                "name": "Wire-haired Pointing Griffon"
            },
            {
                "name": "Wirehaired Terrier"
            },
            {
                "name": "Xoloitzcuintle (Mexican Hairless)"
            },
            {
                "name": "Yellow Labrador Retriever"
            },
            {
                "name": "Yorkshire Terrier Yorkie"
            }
        ];
    };
    EducationPage.prototype.buttonClick = function (item) {
        this.contents = item.content;
    };
    return EducationPage;
}());
EducationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-education',template:/*ion-inline-start:"C:\Users\zjx_pc\Desktop\Test\test\src\pages\education\education.html"*/'<ion-header >\n\n  <ion-navbar color="sblue">\n\n    <ion-title>\n\n      Education\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar color="sblue">\n\n     <ion-searchbar color="white"></ion-searchbar>\n\n  </ion-toolbar>\n\n\n\n\n\n\n\n<ion-toolbar no-border-top color="sblue">\n\n    <ion-segment [(ngModel)]="edu">\n\n      <ion-segment-button value="terms">\n\n        Terms\n\n      </ion-segment-button>\n\n      <ion-segment-button value="procedures">\n\n        Procedures\n\n      </ion-segment-button>\n\n      <ion-segment-button value="well-being">\n\n        Well-being\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<!--  \n\n<ion-content class="alpha-list-page">\n\n      <ion-alpha-scroll *ngIf="breeds"\n\n        [listData]="breeds"\n\n        key="name"\n\n        [itemTemplate]="alphaScrollItemTemplate"\n\n        [currentPageClass]="currentPageClass"\n\n        [triggerChange]="triggerAlphaScrollChange">\n\n      </ion-alpha-scroll>\n\n</ion-content>\n\n-->\n\n\n\n \n\n  <!-- <ion-item-group *ngSwitchCase="\'terms\'">\n\n      <ion-item-divider color="light">A</ion-item-divider>\n\n      <button ion-item detail-none (click)="buttonClick1()">\n\n          Aadffga\n\n      </button>\n\n      <p>{{content1}}</p>\n\n      <button ion-item detail-none (click)="buttonClick2()">\n\n          Afgsartsda\n\n      </button>\n\n      <p>{{content2}}</p>\n\n      <button ion-item detail-none (click)="buttonClick3()">\n\n          Aetef\n\n      </button>\n\n      <p>{{content3}}</p>\n\n  </ion-item-group>\n\n -->\n\n\n\n<ion-content class="alpha-list-page">\n\n  <div [ngSwitch]="edu">\n\n\n\n    <ion-item-group *ngSwitchCase="\'terms\'" >\n\n        <ion-alpha-scroll *ngIf="breed_terms"\n\n          [listData]="breed_terms"\n\n          key="name"\n\n          [itemTemplate]="alphaScrollItemTemplate"\n\n          [currentPageClass]="currentPageClass"\n\n          [triggerChange]="triggerAlphaScrollChange">\n\n        </ion-alpha-scroll>\n\n    </ion-item-group>\n\n\n\n    <ion-item-group *ngSwitchCase="\'procedures\'">\n\n        <ion-alpha-scroll *ngIf="breed_procedures"\n\n          [listData]="breeds"\n\n          key="name"\n\n          [itemTemplate]="alphaScrollItemTemplate"\n\n          [currentPageClass]="currentPageClass"\n\n          [triggerChange]="triggerAlphaScrollChange">\n\n        </ion-alpha-scroll>\n\n      </ion-item-group>\n\n\n\n      <ion-item-group *ngSwitchCase="\'well-being\'">\n\n       <ion-alpha-scroll *ngIf="breed_wellbeing"\n\n          [listData]="breeds"\n\n          key="name"\n\n          [itemTemplate]="alphaScrollItemTemplate"\n\n          [currentPageClass]="currentPageClass"\n\n          [triggerChange]="triggerAlphaScrollChange">\n\n        </ion-alpha-scroll>\n\n      </ion-item-group>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\zjx_pc\Desktop\Test\test\src\pages\education\education.html"*/
    }),
    __metadata("design:paramtypes", [])
], EducationPage);

//# sourceMappingURL=education.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\zjx_pc\Desktop\Test\test\src\pages\home\home.html"*/'<ion-header >\n\n  <ion-navbar color="sblue">\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="home">\n\n  <ion-grid>\n\n    <ion-row>\n\n    <ion-col>\n\n      <ion-fab>\n\n        <button ion-fab><ion-icon name="">25</ion-icon></button>\n\n      </ion-fab>\n\n    </ion-col>\n\n\n\n    <ion-col>\n\n      <ion-fab>\n\n        <button ion-fab><ion-icon name="">ss</ion-icon></button>\n\n      </ion-fab>\n\n    </ion-col>\n\n    </ion-row>\n\n\n\n<ion-fab bottom right>\n\n    <button ion-fab><ion-icon name="add"></ion-icon></button>\n\n    <ion-fab-list side="left">\n\n      <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n\n      <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n\n\n  </ion-grid>\n\n\n\n\n\n\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\zjx_pc\Desktop\Test\test\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_education_education__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic2_alpha_scroll__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic2_alpha_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ionic2_alpha_scroll__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_education_education__["a" /* EducationPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_10_ionic2_alpha_scroll__["IonAlphaScrollModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_education_education__["a" /* EducationPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\zjx_pc\Desktop\Test\test\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\zjx_pc\Desktop\Test\test\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map