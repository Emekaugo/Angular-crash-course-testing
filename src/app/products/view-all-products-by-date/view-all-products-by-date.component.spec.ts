import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date.component';
import { RouterModule } from '@angular/router';

describe('ViewAllProductsByDateComponent', () => {
  let component: ViewAllProductsByDateComponent;
  let fixture: ComponentFixture<ViewAllProductsByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllProductsByDateComponent ],
      imports: [HttpClientTestingModule,RouterModule.forRoot([]),],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllProductsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
