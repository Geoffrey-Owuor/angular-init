import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapembeddComponent } from './mapembedd.component';

describe('MapembeddComponent', () => {
  let component: MapembeddComponent;
  let fixture: ComponentFixture<MapembeddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapembeddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapembeddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
