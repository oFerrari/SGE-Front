import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelMotoristaPage } from './sel-motorista.page';

describe('SelMotoristaPage', () => {
  let component: SelMotoristaPage;
  let fixture: ComponentFixture<SelMotoristaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelMotoristaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
