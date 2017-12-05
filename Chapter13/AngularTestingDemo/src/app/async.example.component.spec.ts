import { TestBed } from "@angular/core/testing";
import { AsyncExampleComponent } from "./async.example.component";
import { AsyncDependencyService } from "./async.dependency.service";

describe('test an component with an async service', () => {
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncExampleComponent],
      providers: [AsyncDependencyService]
    });

    fixture = TestBed.createComponent(AsyncExampleComponent);
  });

  it('should contain async data', async () => {
    const component = fixture.componentInstance;

    fixture.whenStable.then(() => {
      fixture.detectChanges();
      expect(component.title).toBe('async data');
    });
  });
});
