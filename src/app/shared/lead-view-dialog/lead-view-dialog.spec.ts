import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadViewDialog } from './lead-view-dialog';

describe('LeadViewDialog', () => {
  let component: LeadViewDialog;
  let fixture: ComponentFixture<LeadViewDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadViewDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadViewDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
