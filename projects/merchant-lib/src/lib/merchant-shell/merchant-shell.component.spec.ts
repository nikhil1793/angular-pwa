import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantShellComponent } from './merchant-shell.component';

describe('MerchantShellComponent', () => {
  let component: MerchantShellComponent;
  let fixture: ComponentFixture<MerchantShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchantShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
