import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostBasisComponent } from './cost-basis.component';

describe('Child1Component', () => {
  let component: CostBasisComponent;
  let fixture: ComponentFixture<CostBasisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostBasisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostBasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
