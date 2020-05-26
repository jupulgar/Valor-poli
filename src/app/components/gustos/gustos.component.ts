// import { Component, OnInit } from '@angular/core';
// import { AngularDualListBoxModule, DualListComponent } from 'angular-dual-listbox';
// @Component({
// 	selector: 'app-gustos',
// 	templateUrl: './gustos.component.html',
// 	styleUrls: ['./gustos.component.css']
// })
// export class GustosComponent implements OnInit {

// 	constructor() {
// 	}

// 	tab = 1;
// 	keepSorted = true;
// 	key: string;
// 	display: any;
// 	filter = false;
// 	source: Array<any>;
// 	confirmed: Array<any>;
// 	userAdd = '';
// 	disabled = false;

// 	sourceLeft = true;
// 	format: any = DualListComponent.DEFAULT_FORMAT;
// 	fin : any = DualListComponent.CONFIRMED_LIST_NAME;
// 	private sourceTube: Array<string>;
// 	private sourceStations: Array<any>;
// 	private sourceChessmen: Array<any>;

// 	private confirmedTube: Array<string>;
// 	private confirmedStations: Array<any>;
// 	private confirmedChessmen: Array<any>;

// 	arrayType = [
// 		{ name: 'Rio Grande', detail: '(object array)', value: 'station' },
// 		{ name: 'Chessmen', detail: '(object array)', value: 'chess' },
// 		{ name: 'Underground', detail: '(string array)', value: 'tube' }
// 	];

// 	type = this.arrayType[0].value;

// 	private stations: Array<any> = [
// 		//{ key: 1, station: 'Matematicas', state: 'CO' },
// 		{ key: 1, station: 'Matematicas' },
// 		{ key: 2, station: 'Ciencias básicas' },
// 		{ key: 3, station: 'Inglés' },
// 		{ key: 4, station: 'Humanidades' },
// 		{ key: 5, station: 'Lingüistica' },
// 		{ key: 6, station: 'Ciencias aplicadas' },

// 	];

// 	private chessmen: Array<any> = [
// 		{ _id: 1, name: 'Pawn' },
// 		{ _id: 2, name: 'Rook' },
// 		{ _id: 3, name: 'Knight' },
// 		{ _id: 4, name: 'Bishop' },
// 		{ _id: 5, name: 'Queen' },
// 		{ _id: 6, name: 'King' }
// 	];

// 	private tube: Array<string> = [
// 		'Harrow & Wealdstone',
// 		'Kenton',
// 		'South Kenton',
// 		'North Wembley',
// 		'Wembley Central',
// 		'Stonebridge Park',
// 		'Harlesden',
// 		'Willesden Junction',
// 		'Kensal Green',
// 		"Queen's Park",
// 		'Kilburn Park',
// 		'Maida Vale',
// 		'Warwick Avenue',
// 		'Paddington',
// 		'Edgware Road',
// 		'Marylebone',
// 		'Baker Street',
// 		"Regent's Park",
// 		'Oxford Circus',
// 		'Piccadilly Circus',
// 		'Charing Cross',
// 		'Embankment',
// 		'Waterloo',
// 		'Lambeth North',
// 		'Elephant & Castle'
// 	];

// 	ngOnInit() {
// 		this.doReset();
// 	}

// 	private stationLabel(item: any) {
// 		//return item.station + ', ' + item.state;
// 		return item.station;
// 	}

// 	private useStations() {
// 		this.key = 'key';
// 		this.display = this.stationLabel;
// 		this.keepSorted = true;
// 		this.source = this.sourceStations;
// 		this.confirmed = this.confirmedStations;
		
// 	}

// 	// private useChessmen() {
// 	// 	this.key = '_id';
// 	// 	this.display = 'name';
// 	// 	this.keepSorted = false;
// 	// 	this.source = this.sourceChessmen;
// 	// 	this.confirmed = this.confirmedChessmen;
// 	// }

// 	// private useTube() {
// 	// 	this.key = undefined;
// 	// 	this.display = undefined;
// 	// 	this.keepSorted = false;
// 	// 	this.source = this.sourceTube;
// 	// 	this.confirmed = this.confirmedTube;
// 	// }

// 	// swapSource() {
// 	// 	switch (this.type) {
// 	// 	case this.arrayType[0].value:
// 	//     this.useStations();      
// 	// 		break;
// 	// 	case this.arrayType[1].value:
// 	// 		this.useChessmen();
// 	// 		break;
// 	// 	case this.arrayType[2].value:
// 	// 		this.useTube();
// 	// 		break;
// 	// 	}
// 	// }

// 	doReset() {
// 		this.sourceChessmen = JSON.parse(JSON.stringify(this.chessmen));
// 		this.sourceStations = JSON.parse(JSON.stringify(this.stations));
// 		this.sourceTube = JSON.parse(JSON.stringify(this.tube));
// 		this.confirmedChessmen = new Array<any>();
// 		this.confirmedStations = new Array<any>();
// 		this.confirmedTube = new Array<string>();

// 		// Preconfirm some items.
// 		this.confirmedStations.push(this.stations[31]);
// 		this.confirmedTube.push(this.tube[13]);
// 		this.confirmedTube.push(this.tube[23]);

// 		switch (this.type) {
// 			case this.arrayType[0].value:
// 				this.useStations();

// 				break;
// 			// case this.arrayType[1].value:
// 			// 	this.useChessmen();
// 			// 	break;
// 			// case this.arrayType[2].value:
// 			// 	this.useTube();
// 			// 	break;

// 		}
// 	}

// }

// 	// doDelete() {
// 	// 	if (this.source.length > 0) {
// 	// 		this.source.splice(0, 1);
// 	// 	}
// 	// }

// 	// doCreate() {
// 	// 	if (typeof this.source[0] === 'object') {
// 	// 		const o = {};
// 	// 		o[this.key] = this.source.length + 1;
// 	// 		o[this.display] = this.userAdd;
//   //     this.source.push( o );
// 	// 	} else {
// 	// 		this.source.push(this.userAdd);
// 	// 	}
// 	// 	this.userAdd = '';
// 	// }

// 	// doAdd() {
// 	// 	for (let i = 0, len = this.source.length; i < len; i += 1) {
// 	// 		const o = this.source[i];
// 	// 		const found = this.confirmed.find( (e: any) => e === o );
// 	// 		if (!found) {
// 	// 			this.confirmed.push(o);
// 	// 			break;
// 	// 		}
// 	// 	}
// 	// }

// 	// doRemove() {
// 	// 	if (this.confirmed.length > 0) {
// 	// 		this.confirmed.splice(0, 1);
// 	// 	}
// 	// }

// 	// doFilter() {
// 	// 	this.filter = !this.filter;
// 	// }

// 	// filterBtn() {
// 	// 	return (this.filter ? 'Hide Filter' : 'Show Filter');
// 	// }

// 	// doDisable() {
// 	// 	this.disabled = !this.disabled;
// 	// }

// 	// disableBtn() {
// 	// 	return (this.disabled ? 'Enable' : 'Disabled');
// 	// }

// 	// swapDirection() {
// 	// 	this.sourceLeft = !this.sourceLeft;
// 	// 	this.format.direction = this.sourceLeft ? DualListComponent.LTR : DualListComponent.RTL;
// 	// }

