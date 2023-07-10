import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-createdialog',
  templateUrl: './createdialog.component.html',
  styleUrls: ['./createdialog.component.css']
})
export class CreatedialogComponent {
  constructor(public dialogRef: MatDialogRef<CreatedialogComponent>) { }
}
