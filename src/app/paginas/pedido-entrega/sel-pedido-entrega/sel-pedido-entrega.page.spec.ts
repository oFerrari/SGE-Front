import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelPedidoEntregaPage } from './sel-pedido-entrega.page';

describe('SelPedidoEntregaPage', () => {
  let component: SelPedidoEntregaPage;
  let fixture: ComponentFixture<SelPedidoEntregaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelPedidoEntregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
