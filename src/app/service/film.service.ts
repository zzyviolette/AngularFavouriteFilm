import { Injectable } from '@angular/core';
import { Film } from '../model/film';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

/**
 * This service stock and offer the operations(creat/read/delete) of list of films
 * Communicate with api omdb
 */

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  films: Array <Film> = [ ] ;

  constructor(private http: HttpClient) {
  }

/**
 * Delete a film from the list
 */
  deleteFilm(i) {
    this.films.splice(i, 1);
  }
/**
 * Add a new film in list, the default value of isFavoris is false
 */
  addFilm(title, isFavoris) {
    this.films.push({
      Title: title,
      isFavoris: isFavoris ,
    });
  }
/**
 * Get list of favourites film by filtering the list films with the attr isFavoris
 */
  getFavoris() {
    return this.films.filter((item) => item.isFavoris === true);
  }

/**
 * Search the list of films by title
 */
  getFilms(titleValue: any) {
    return this.http.get(`https://www.omdbapi.com/?apikey=e1ee91bd&s=${titleValue}*`);
  }
/**
 * Search the details of a film by title
 */
  getDetails(value: any) {
    return this.http.get(`https://www.omdbapi.com/?apikey=e1ee91bd&t=${value}`);
  }

}
