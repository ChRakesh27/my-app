import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfeildComponent } from './textfeild.component';

describe('TextfeildComponent', () => {
  let component: TextfeildComponent;
  let fixture: ComponentFixture<TextfeildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextfeildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextfeildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
