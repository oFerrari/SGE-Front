import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PainelAdministradorPage } from './painel-administrador.page';

describe('PainelAdministradorPage', () => {
  let component: PainelAdministradorPage;
  let fixture: ComponentFixture<PainelAdministradorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PainelAdministradorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
