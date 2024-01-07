import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortbydateComponent } from './sortbydate.component';

describe('SortbydateComponent', () => {
  let component: SortbydateComponent;
  let fixture: ComponentFixture<SortbydateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortbydateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortbydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
