import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentItemComponent } from './sent-item.component';

describe('SentItemComponent', () => {
  let component: SentItemComponent;
  let fixture: ComponentFixture<SentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SentItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
