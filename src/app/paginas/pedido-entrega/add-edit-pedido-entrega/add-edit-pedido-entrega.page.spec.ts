import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddEditPedidoEntregaPage } from './add-edit-pedido-entrega.page';

describe('AddEditPedidoEntregaPage', () => {
  let component: AddEditPedidoEntregaPage;
  let fixture: ComponentFixture<AddEditPedidoEntregaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddEditPedidoEntregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
