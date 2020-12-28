import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UserData {
  email: string
  password: string
}

@Component({
  selector: 'views-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  email: string
  password: string

  constructor(public dialog: MatDialog) { }

  logInDialog(): void {
    const dialogRef = this.dialog.open(LogInDialog, {
      width: '480px',
      data: {email: this.email, password: this.password}
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })
  }

}

@Component({
  selector: 'views-log-in-dialog',
  templateUrl: './log-in.dialog.html'
})
export class LogInDialog {

  constructor(
    public dialogRef: MatDialogRef<LogInDialog>,
    @Inject(MAT_DIALOG_DATA) public data: UserData
  ) {}

  onNoClick(): void {
    this.dialogRef.close()
  }
}
