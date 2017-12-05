import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";

@Component({
  selector: 'my-dialog',
  template: `
    <h1 mat-dialog-title>Save changes to jedi?</h1>
    <mat-dialog-content>
      <input matInput [(ngModel)]="data.jedi.name" />
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)="saveAndClose()">Yes</button>
      <button mat-button mat-dialog-close>No</button>
   </mat-dialog-actions>
  `,
})
export class DialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('dialog opened');
  }

  saveAndClose() {
    this.dialogRef.close('save');
  }
}
