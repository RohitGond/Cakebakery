import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderconfermComponent } from './orderconferm.component';

describe('OrderconfermComponent', () => {
  let component: OrderconfermComponent;
  let fixture: ComponentFixture<OrderconfermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderconfermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderconfermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
