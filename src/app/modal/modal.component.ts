import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {
  form: FormGroup;

  constructor(private activeModal: NgbActiveModal, 
    private fb: FormBuilder) { 
      this.createForm();
    }

    createForm(){
      this.form = this.fb.group({
        image: '../../assets/profile-placeholder.png',
        name: '',
        surname: '',
        number: '',
        email: '',
        address: ''
      })
    }

  ngOnInit() {
  }

  cancel(){
    this.activeModal.close()
  }

  save(){
    this.activeModal.close(this.form.value) 
   }

}
