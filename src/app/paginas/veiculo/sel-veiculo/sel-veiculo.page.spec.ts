import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelVeiculoPage } from './sel-veiculo.page';

describe('SelVeiculoPage', () => {
  let component: SelVeiculoPage;
  let fixture: ComponentFixture<SelVeiculoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelVeiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
