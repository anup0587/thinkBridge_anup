import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDialogeBoxComponent } from './edit-dialoge-box.component';

describe('EditDialogeBoxComponent', () => {
  let component: EditDialogeBoxComponent;
  let fixture: ComponentFixture<EditDialogeBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDialogeBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDialogeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
