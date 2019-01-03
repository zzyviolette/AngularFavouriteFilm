import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailModalComponent } from './film-detail-modal.component';

describe('FilmDetailModalComponent', () => {
  let component: FilmDetailModalComponent;
  let fixture: ComponentFixture<FilmDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
