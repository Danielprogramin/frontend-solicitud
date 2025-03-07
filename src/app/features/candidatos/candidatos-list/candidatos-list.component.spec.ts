import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosListComponent } from './candidatos-list.component';

describe('CandidatosListComponent', () => {
  let component: CandidatosListComponent;
  let fixture: ComponentFixture<CandidatosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatosListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidatosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
