import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingTableLineComponent } from './selling-table-line.component';

describe('SellingTableLineComponent', () => {
  let component: SellingTableLineComponent;
  let fixture: ComponentFixture<SellingTableLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingTableLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingTableLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
