import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UserData {
  email: string
  password: string
}

@Component({
  selector: 'views-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  email: string
  password: string

  constructor(public dialog: MatDialog) { }

  signUpDialog(): void {
    const dialogRef = this.dialog.open(SignUpDialog, {
      width: '480px',
      data: {email: this.email, password: this.password}
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    })
  }

}

@Component({
  selector: 'views-sign-up-dialog',
  templateUrl: './sign-up-dialog.html',
  styleUrls: ['./sign-up-dialog.scss']
})
export class SignUpDialog {

  constructor(
    public dialogRef: MatDialogRef<SignUpDialog>,
    @Inject(MAT_DIALOG_DATA) public data: UserData
  ) {}

  onNoClick(): void {
    this.dialogRef.close()
  }
}