import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/service/film.service';
import { FormControl } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';


/**
 * This component is home page
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
/**
 * @param searchFilms This result of search films from api omdb
 * @param titleValue The value of search input text
 * @param filmFormControl  Search form control to adapt the result of search to the change of search input text
 * @param searchResult Search result notice for user
 * @param alertMsg If size of list of films is 0 , we should show a alert for users
 */

  searchFilms = [ ] ;
  titleValue: any;
  filmFormControl = new FormControl();
  searchResult = '';
  alertMsg = 'There is no films in the list, please add some new films !';
  constructor(public filmSer: FilmService, private ngxSmartModalService: NgxSmartModalService) { }

/**
 * Adapt the search result by the value of search input text
 */
  ngOnInit() {
    this.filmFormControl.valueChanges
    .subscribe(newValue => {
        this.titleValue = newValue;
        this.filmSer.getFilms(newValue)
          .subscribe(
            data => {
              if (data['Response'] !== 'False') {
                const myArr = [];
                for (const key in data) {
                  if (data.hasOwnProperty(key)) {
                    myArr.push(data[key]);
                  }
                }
                this.searchResult = `Result for "${this.titleValue}"`;
                this.searchFilms = myArr[0];
                console.log(this.searchFilms);
              } else {
                this.searchFilms.length = null;
                if (this.titleValue === '') {
                  this.searchResult = `Please Search!`;
                } else {
                  this.searchResult = `"${this.titleValue}" Not Found or needs to be more specific.`;
                }
                console.log('Not Found');
              }
            }
          );
      }
    );

  }

/**
 * Show the details of the selectd film
 */
  getShowFilmDetailModalEvent(i) {
    this.filmSer.getDetails(this.filmSer.films[i].Title).subscribe( data => {
      this.ngxSmartModalService.resetModalData('filmModal');
      this.ngxSmartModalService.setModalData(data, 'filmModal');
      this.ngxSmartModalService.getModal('filmModal').open();
    });
   }

/**
 * Delete the selected film
 */
  getDeleteFilmEvent(i) {
    this.filmSer.deleteFilm(i);
  }

/**
 * Add a film in list by the choice of user in searchFilms
 */
  addFilm(film) {
    this.filmSer.addFilm(film.value, false);
  }

}
