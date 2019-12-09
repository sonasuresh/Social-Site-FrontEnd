import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepostsComponent } from './createposts.component';

describe('CreatepostsComponent', () => {
  let component: CreatepostsComponent;
  let fixture: ComponentFixture<CreatepostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
