import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedProductSingleComponent } from './featured-product-single.component';

describe('FeaturedProductSingleComponent', () => {
  let component: FeaturedProductSingleComponent;
  let fixture: ComponentFixture<FeaturedProductSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedProductSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedProductSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
