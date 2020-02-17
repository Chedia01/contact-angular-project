import { Component } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from './modal/modal.component';
import { BehaviorSubject } from 'rxjs';

export interface Contact {
  image: string,
  name: string,
  number: string,
  email: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'contact-savvy';
  initial: string[]=[];
  list:Contact[] = [{
    image: '../assets/user1.jpg',
    name: 'Ben Nevis',
    number: '+27 82 299 5656',
    email: 'ben@fourways.com'
  },
  {
    image: '../assets/user2.jpg',
    name: 'Brian Clayton',
    number: '+27 84 455 7854',
    email: 'brian@gmail.com'
  },
  {
    image: '../assets/user5.jpg',
    name: 'Caitlyn Bowens',
    number: '+27 74 334 5879',
    email: 'caitbow@hotmail.co.za'
  },
  {
    image: '../assets/user3.jpg',
    name: 'Britney Klerk',
    number: '+27 73 254 1587',
    email: 'brit@yahoo.com'
  },
  {
    image: '../assets/user4.jpg',
    name: 'Casandra Harris',
    number: '+27 82 864 2546',
    email: 'charris@gmail.com',
  }
  ]
  contacts = new BehaviorSubject<Object[]>([]);

  mobileStatus: Boolean = false;
  emailStatus: Boolean = false;

  constructor(private modalService: NgbModal){}

  ngOnInit(){
    this.contacts.next(this.list)
    this.headings()
  }

  open(){
    const modal = this.modalService.open(ModalComponent);
    modal.result.then(
      (result) => {
        console.log(result);
      let newContact = {
          image: result.image,
          name: result.name+' '+result.surname,
          number: result.number,
          email: result.email
        }
        this.list.push(newContact)
        this.sort(this.list)
      }
    )
  }

  showMobile(){
    if(this.mobileStatus == false){
      this.mobileStatus = true
    }
    else if(this.mobileStatus == true){
      this.mobileStatus = false;
    }
  }

  showEmail(){
    if(this.emailStatus == false){
      this.emailStatus = true
    }
    else if(this.emailStatus == true){
      this.emailStatus = false;
    }
  }

  sort(list){
    list.sort((a, b) => a.name.localeCompare(b.name))
    this.headings()
  }

  delete(index){
    console.log(index)
    this.list.splice(index, 1)
  }

  headings(){
    console.log('hey')
    let list = this.list
    let y: string[]=[];
    const distinct = (value,index,self)=> {
      return self.indexOf(value) === index;
    }

    for(let i=0;i<list.length;i++){
      console.log(list[i].name)
      const x = list[i].name.charAt(0).toUpperCase()
      y.push(x)
    }

    this.initial= y.filter(distinct)
    this.initial.sort()

    console.log(this.initial)
    
  }
  
}

