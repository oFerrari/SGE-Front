import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditAdministradorPage } from './add-edit-administrador.page';

describe('AddEditAdministradorPage', () => {
  let component: AddEditAdministradorPage;
  let fixture: ComponentFixture<AddEditAdministradorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEditAdministradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
