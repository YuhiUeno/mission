import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'views-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  constructor(public dialog: MatDialog) { }

  logInDialog(): void {
    const dialogRef = this.dialog.open(LogInDialog, {
      width: '480px'
    })
  }

}

@Component({
  selector: 'views-log-in-dialog',
  templateUrl: 'log-in.dialog.html'
})
export class LogInDialog {

  constructor(
    public dialogRef: MatDialogRef<LogInDialog>,
  ) {}

  onNoClick(): void {
    this.dialogRef.close()
  }
}