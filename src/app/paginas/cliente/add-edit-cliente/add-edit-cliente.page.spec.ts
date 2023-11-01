import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditClientePage } from './add-edit-cliente.page';

describe('AddEditClientePage', () => {
  let component: AddEditClientePage;
  let fixture: ComponentFixture<AddEditClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEditClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
