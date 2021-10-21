import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingTableComponent } from './selling-table.component';

describe('SellingTableComponent', () => {
  let component: SellingTableComponent;
  let fixture: ComponentFixture<SellingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
