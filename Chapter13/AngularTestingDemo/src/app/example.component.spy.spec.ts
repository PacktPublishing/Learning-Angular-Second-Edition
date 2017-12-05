import { TestBed } from "@angular/core/testing";
import { ExampleComponent } from "./example.component";
import { DependencyService } from "./dependency.service";

describe('testing example component using a spy', () => {
  let fixture, dependency;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleComponent],
      providers: [DependencyService]
    });

    dependency = TestBed.get(DependencyService);
    let spy = spyOn(dependency, 'getData').and.returnValue('spy value');

    fixture = TestBed.createComponent(ExampleComponent);
  });

  it('should contain spy value', () => {
    var component = fixture.componentInstance;
    expect(component.title).toBe('spy value');
  });
});
