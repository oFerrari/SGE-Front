import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelClientePage } from './sel-cliente.page';

describe('SelClientePage', () => {
  let component: SelClientePage;
  let fixture: ComponentFixture<SelClientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
