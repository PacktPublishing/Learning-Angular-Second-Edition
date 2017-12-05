import { convertToParamMap, ActivatedRoute, Router } from '@angular/router';
import { Subject } from "rxjs/Subject";
import { TestBed } from "@angular/core/testing";
import { ExampleRoutingParamsComponent } from "./example.routing.params.component";
import { JediService } from "./jedi.service";
import { HttpClient, HttpHandler } from "@angular/common/http";

class ActivatedRouteStub {
  private subject: Subject<any>;

  constructor() {
    this.subject = new Subject();
  }

  sendParameters(params: {}) {
    this.subject.next(convertToParamMap(params)); // emitting data
  }

  get paramMap() {
    return this.subject.asObservable();
  }
}

describe('A example routing params component', () => {
  let fixture, component, activatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleRoutingParamsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useClass: ActivatedRouteStub
        },
        JediService,
        HttpClient,
        HttpHandler
      ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleRoutingParamsComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.get(ActivatedRoute);
  });

  it('should execute the ExampleRoutingParamsComponent', () => {
    // listen for the router parameter
    activatedRoute.paramMap.subscribe(para => {
      const id = para.get('id');
      // assert that the correct routing parameter is being emitted
      expect(id).toBe(1);
    });
    // send the route parameter
    activatedRoute.sendParameters({ id: 1 });
  })
})
