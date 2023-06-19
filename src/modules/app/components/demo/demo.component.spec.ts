import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DemoComponent } from './demo.component';

describe('DemoComponent', () => {
  let demoFixtureComponent: ComponentFixture<DemoComponent>;
  let oDemoComponent: DemoComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DemoComponent],
    });

    demoFixtureComponent = TestBed.createComponent(DemoComponent);
    demoFixtureComponent.detectChanges();
    oDemoComponent = demoFixtureComponent.componentInstance;
  });

  it('is instanciated', () => {
    expect(oDemoComponent).toBeInstanceOf(DemoComponent);
  });

  describe('title', () => {
    it(`equals 'demo'`, () => {
      expect(oDemoComponent.title).toEqual('demo');
    });

    describe('HTML', () => {
      it('contains "{title} is running!"', () => {
        const oHTMLElement: HTMLElement = demoFixtureComponent.nativeElement;

        const textContent =
          oHTMLElement.querySelector('.content span')?.textContent;

        expect(textContent).toContain('demo app is running!');
      });
    });
  });
});
