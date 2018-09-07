import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRevisionComponent } from './second-revision.component';

describe('SecondRevisionComponent', () => {
  let component: SecondRevisionComponent;
  let fixture: ComponentFixture<SecondRevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondRevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
