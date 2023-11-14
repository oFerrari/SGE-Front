import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditVeiculoPage } from './add-edit-veiculo.page';

describe('AddEditVeiculoPage', () => {
  let component: AddEditVeiculoPage;
  let fixture: ComponentFixture<AddEditVeiculoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEditVeiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
