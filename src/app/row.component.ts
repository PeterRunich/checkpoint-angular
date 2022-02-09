import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";

@Component({
  selector: "app-row",
  template: `
    <tr>
      <td *ngFor="let v of values">{{v}}</td>
      <button (click)="delete()">DEL</button>
    </tr>
  `
})
export class RowComponent implements OnInit {
  @Input() rowData!: object;
  @Input() index!: number;
  public values!: Array<any>;

  ngOnInit() {
    this.values = Object.values(this.rowData)
  }

  @Output() onDel = new EventEmitter<number>();
  delete() {
    this.onDel.emit(this.index);
  }
}
