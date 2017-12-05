import { TestBed, inject } from "@angular/core/testing";
import { Router } from "@angular/router";
import { ExampleRoutingComponent } from "./example.routing.component";

describe('Testing routing in a component using a Stub', () => {
  let component, fixture;

  class RouterStub {
    navigateByUrl() { }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleRoutingComponent],
      providers: [{
        provide: Router, useClass: RouterStub // replace 'Router' with our Stub
      }]
    }).compileComponents();
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleRoutingComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('test back() method', inject([Router], (router: Router) => {
    const spy = spyOn(router, 'navigateByUrl');
    component.back(); // invoking our back method that should call the spy in turn
    expect(spy.calls.any()).toBe(true);
  }));
});
