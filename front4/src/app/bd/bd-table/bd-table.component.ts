import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { BdDto } from '../../model/model'
import { BdService } from '../bd.service'



export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

export interface BdData {
  id: string;
  titre: string;
  saga: string;
  tome: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];




@Component({
  selector: 'app-bd-table',
  templateUrl: './bd-table.component.html',
  styleUrls: ['./bd-table.component.scss']
})
export class BdTableComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'titre', 'saga', 'tome'];
//   dataSource: MatTableDataSource<UserData>;
  dataSource: MatTableDataSource<BdData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  bds: BdDto[] = [];
  users:BdData[]= [];

  constructor( private bdService: BdService ) {

//     const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

//      this.users = Array.from(this.bds, (bd:BdDto) => createNewUser(bd));

    // Assign the data to the data source for the table to render
//     this.dataSource = new MatTableDataSource(users);
    this.dataSource = new MatTableDataSource(this.users);

  }

  ngOnInit(): void {
    this.bdService.getBds().subscribe(
          (bds) => {
              this.bds = bds;
              this.users = Array.from(this.bds, (bd:BdDto) => createNewUser(bd));
              this.dataSource = new MatTableDataSource(this.users);
            }
        );
  }


   ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
   }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




}


//
// /** Builds and returns a new User. */
// function createNewUser(id: number): UserData {
//   const name =
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
//     ' ' +
//     NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
//     '.';
//
//   return {
//     id: id.toString(),
//     name: name,
//     progress: Math.round(Math.random() * 100).toString(),
//     fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
//   };
// }



/** Builds and returns a new User. */
function createNewUser(bd: BdDto): BdData {

  return {
    id: bd.id.toString(),
    titre: bd.title,
    saga: bd.saga.name,
    tome: bd.tome
  };
}
