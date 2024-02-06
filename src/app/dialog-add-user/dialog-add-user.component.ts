import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';

import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatDialogModule, 
    MatFormFieldModule, 
    MatIconModule, 
    MatInputModule, 
    MatButtonModule, 
    MatDatepickerModule, 
    FormsModule
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  user = new User();
  birthDate?: Date;
  //item$?: Observable<any[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {

  }

  saveUser() {
    if(this.birthDate != undefined) {
      this.user.birthDate = this.birthDate.getTime();
      console.log('Current user is', this.user);

      this.firestore.collection('users').add(this.user.toJSON()).then((result: any) => {
        console.log('Adding user finished', result);
      });
    }
  }
}
