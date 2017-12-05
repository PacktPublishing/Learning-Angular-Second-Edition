import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from "./dialog.component";

@Component({
  selector: 'dialog-example',
  template: `
  <button (click)="openDialog()">Open Dialog</button>
  `
})
export class DialogExampleComponent {
  selectedOption;
  jedi: Jedi;

  constructor(private dialog: MatDialog) {
    this.jedi = { name: 'Luke' };
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      data: { jedi: this.jedi }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}

interface Jedi {
  name: string;
}
