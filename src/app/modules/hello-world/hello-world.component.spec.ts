import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldComponent } from './hello-world.component';

describe('HelloWorldComponent', () => {
  let oFixtureComponent: ComponentFixture<HelloWorldComponent>;
  let oHelloWorldComponent: HelloWorldComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloWorldComponent],
    });

    oFixtureComponent = TestBed.createComponent(HelloWorldComponent);
    oFixtureComponent.detectChanges();
    oHelloWorldComponent = oFixtureComponent.componentInstance;
  });

  it('is instanciated', () => {
    expect(oHelloWorldComponent).toBeInstanceOf(HelloWorldComponent);
  });
});
