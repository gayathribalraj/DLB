import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInboxComponent } from './header-inbox.component';

describe('HeaderInboxComponent', () => {
  let component: HeaderInboxComponent;
  let fixture: ComponentFixture<HeaderInboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderInboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
