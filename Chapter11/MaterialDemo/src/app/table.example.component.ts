import { Component, OnInit, ViewChild } from '@angular/core';
import { Jedi } from "./jedi.model";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";

@Component({
  selector: 'table-example',
  template: `
  <div>
    <mat-table #table [dataSource]="tableSource" matSort>
      <ng-container matColumnDef="name">
        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
      </ng-container>

      <ng-container matColumnDef="side">
        <mat-header-cell *matHeaderCellDef mat-sort-header> Side </mat-header-cell>
        <mat-cell *matCellDef="let element"> {{element.side}} </mat-cell>
      </ng-container>

      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
    </mat-table>
    <mat-paginator #paginator [pageSize]="2" [pageSizeOptions]="[1, 5, 10]">
    </mat-paginator>
  </div>
  `
})
export class TableExampleComponent {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  tableSource: MatTableDataSource<Jedi>;
  displayedColumns: string[];
  jediSource: Array<Jedi> = [{
    name: 'Yoda',
    side: 'Good'
  },
  {
    name: 'Darth',
    side: 'Evil'
  },
  {
    name: 'Palpatine',
    side: 'Evil'
  },
  {
    name: 'Anakin',
    side: 'Good'
  },
  {
    name: 'Mace Windu',
    side: 'Good'
  },
  {
    name: 'Darth Plagueous',
    side: 'Evil'
  }];

  constructor() {
    this.tableSource = new MatTableDataSource<Jedi>(this.jediSource);
    this.displayedColumns = ['name', 'side'];
  }

  ngAfterViewInit() {
    this.tableSource.sort = this.sort;
    this.tableSource.paginator = this.paginator;
  }
}
