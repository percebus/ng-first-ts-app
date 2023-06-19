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

  describe('FixtureComponent', () => {
    describe('ComponentInstance', () => {
      it('is instanciated', () => {
        expect(oDemoComponent).toBeTruthy();
      });

      describe('title', () => {
        it(`equals 'demo'`, () => {
          expect(oDemoComponent.title).toEqual('demo');
        });

        describe('.content span', () => {
          it('contains "{title} is running!"', () => {
            const oHTMLElement =
              demoFixtureComponent.nativeElement as HTMLElement;
            const textContent =
              oHTMLElement.querySelector('.content span')?.textContent;
            expect(textContent).toContain('demo app is running!');
          });
        });
      });
    });
  });
});
