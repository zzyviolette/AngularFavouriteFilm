import { Component, OnInit} from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { FilmService } from 'src/app/service/film.service';

/**
 * This component is the modal to show the details of selected film in the list films
 */
@Component({
  selector: 'app-film-detail-modal',
  templateUrl: './film-detail-modal.component.html',
  styleUrls: ['./film-detail-modal.component.scss']
})
export class FilmDetailModalComponent implements OnInit {

  constructor(private filmSer: FilmService, public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

}
