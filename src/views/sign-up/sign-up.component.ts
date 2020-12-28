import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User, UserService } from "../services/user.service";

@Component({
  selector: 'views-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  email: string
  password: string

  constructor(public dialog: MatDialog, private userService: UserService) { }

  signUpDialog(): void {
    const dialogRef = this.dialog.open(SignUpDialog, {
      width: '480px',
      data: {email: this.email, password: this.password}
    })

    dialogRef.afterClosed().subscribe(result => {
      this.create(result)
    })
  }

  create(user: User): void {
    if (!user) { return }
    this.userService.createUser(user).subscribe()
  }

}

@Component({
  selector: 'views-sign-up-dialog',
  templateUrl: './sign-up-dialog.html',
  styleUrls: ['./sign-up-dialog.scss']
})
export class SignUpDialog {
  hide = true
  constructor(
    public dialogRef: MatDialogRef<SignUpDialog>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  onNoClick(): void {
    this.dialogRef.close()
  }
}