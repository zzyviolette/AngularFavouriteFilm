import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * This component is to show the list of films, the child component of home or favoris
 */
@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

 /**
  * The data source from parent component
  */
  @Input() filmList;
 /**
  * The parent component is home(false) or favoris(true)
  */
  @Input() favoris;
 /**
  * The alert message for users if the size of list is 0
  */
  @Input() alertMsg;

 /**
  * The methode for open the modal to show the details of selected film,
  * the parent component will recevie the notifation and implement it
  */
  @Output() showFilmDetailModalEvent = new EventEmitter<any>();
 /**
  * The methode for delete selected film,
  * the parent component will recevie the notifation and implement it
  */
  @Output() deleteFilmEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

 /**
  * The methode is to notify the parent to show the details of item
  * @param i index of selected film
  */
  openFilmModal(i) {
     this.showFilmDetailModalEvent.emit(i);
  }

 /**
  * The methode is to notify the parent to delete the selected item from the list of films
  * @param i index of selected film
  */
  deleteFilm(i) {
    this.deleteFilmEvent.emit(i);
  }
}
