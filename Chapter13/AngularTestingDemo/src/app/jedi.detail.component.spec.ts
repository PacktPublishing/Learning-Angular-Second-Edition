import { TestBed, async } from "@angular/core/testing";
import { JediDetailComponent } from "./jedi.detail.component";
import { Jedi } from "./jedi.model";
import { By } from '@angular/platform-browser';;

describe('a jedi detail component', () => {
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        JediDetailComponent
      ],
    }).compileComponents();
  }));

  it('should contain a jedi', async () => {
    fixture = TestBed.createComponent(JediDetailComponent);

    const component = fixture.debugElement.componentInstance;
    component.jedi = new Jedi(1, 'Luke', 'Light');
    fixture.detectChanges();

    expect(component.jedi.name).toBe('Luke');
  });

  it('should invoke switchSide with correct Jedi', async () => {
    fixture = TestBed.createComponent(JediDetailComponent);
    const component = fixture.debugElement.componentInstance;
    let selectedJedi;

    component.switchSide.subscribe(data => {
      selectedJedi = data;
    });
    fixture.detectChanges();

    const elem = fixture.debugElement.query(By.css('.jedi'));
    elem.triggerEventHandler('click', null);

    expect(selectedJedi.name).toBe('Luke');
  });

});
