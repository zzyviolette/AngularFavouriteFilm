import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/service/film.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

/**
 * This component is favoris page
 */
@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit {
/**
 * @param alertMsg If size of list of films is 0 , we should show a alert for users
 */
  alertMsg = 'There is no favourite film, please add some favourites films !';

  constructor(public filmSer: FilmService, private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

/**
 * Open the modal to show details of selected film
 */
  getShowFilmDetailModalEvent(i) {
    this.filmSer.getDetails(this.filmSer.films[i].Title).subscribe( data => {
      this.ngxSmartModalService.resetModalData('filmModal');
      this.ngxSmartModalService.setModalData(data, 'filmModal');
      this.ngxSmartModalService.getModal('filmModal').open();
    });
   }

}
