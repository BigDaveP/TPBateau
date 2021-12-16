import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBateauComponent } from './detail-bateau.component';

describe('DetailBateauComponent', () => {
  let component: DetailBateauComponent;
  let fixture: ComponentFixture<DetailBateauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBateauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBateauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
