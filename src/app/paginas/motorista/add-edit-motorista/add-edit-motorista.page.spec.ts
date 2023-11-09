import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditMotoristaPage } from './add-edit-motorista.page';

describe('AddEditMotoristaPage', () => {
  let component: AddEditMotoristaPage;
  let fixture: ComponentFixture<AddEditMotoristaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEditMotoristaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
