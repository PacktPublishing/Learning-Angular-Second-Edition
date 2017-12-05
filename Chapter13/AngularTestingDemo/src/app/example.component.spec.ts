import { TestBed, async } from "@angular/core/testing";

import { DependencyService } from "./dependency.service";
import { ExampleComponent } from "./example.component";

class DependencyServiceStub {
  getData() { return 'stub'; }
}

describe('testing a component with dependency', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleComponent],
      providers: [{ provide: DependencyService, useClass: DependencyServiceStub }]
    });
  })

  it(`should have as title 'stub'`, async(() => {
    const fixture = TestBed.createComponent(ExampleComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('stub');
  }));
})
