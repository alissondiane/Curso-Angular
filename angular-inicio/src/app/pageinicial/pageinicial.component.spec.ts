import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageinicialComponent } from './pageinicial.component';

describe('PageinicialComponent', () => {
  let component: PageinicialComponent;
  let fixture: ComponentFixture<PageinicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageinicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageinicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
