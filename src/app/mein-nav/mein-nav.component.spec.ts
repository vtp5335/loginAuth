import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeinNavComponent } from './mein-nav.component';

describe('MeinNavComponent', () => {
  let component: MeinNavComponent;
  let fixture: ComponentFixture<MeinNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeinNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeinNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
