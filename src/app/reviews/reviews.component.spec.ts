import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { ReviewsComponent } from './reviews.component';

describe('ReviewsComponent', () => {

  let component: ReviewsComponent;
  let fixture: ComponentFixture<ReviewsComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsComponent ],
      imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de=fixture.debugElement.query(By.css('form'));
    el=de.nativeElement;
  });

  it('should create a title-text', async(() => {

    expect(component.text).toEqual("form-review page");

  }));

  it('should set submission to be true', async(() => {

    component.onSubmit();
    expect(component.submitted).toBeTruthy();

  }));

  it('should call onsubmit when button is clicked', async(() => {

    fixture.detectChanges();
    spyOn(component, "onSubmit")
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);

  }));

  it('should be invalid', async(() => {



    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['text'].setValue('');

    expect(component).toBeTruthy();

  }));

  it('should be valid', async(() => {

    component.contactForm.controls['email'].setValue('qaz@zaq.com');
    component.contactForm.controls['name'].setValue('qaz');
    component.contactForm.controls['text'].setValue('zaq');


    expect(component).toBeTruthy();

  }));

});
