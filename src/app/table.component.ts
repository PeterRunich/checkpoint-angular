import {Component, Input} from "@angular/core";

@Component({
  selector: "app-table",
  template: `
    <table style="width:80%">
      <tr>
        <th *ngFor="let name of headers">{{name}}</th>
      </tr>
      <app-row (onDel)="rowDelete($event)" style="display: contents;" *ngFor="let row of rows; let i = index"
               [rowData]="row" [index]="i"></app-row>
    </table>
  `
})
export class TableComponent {
  @Input() headers!: string[];
  @Input() rows!: Array<object>;

  rowDelete(index: number) {
    this.rows.splice(index, 1)
  }
}
