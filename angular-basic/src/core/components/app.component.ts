import { Component } from '@angular/core';

export class AppComponent {
  public static getComponent(selectorId: string): any {
    return Component({
      selector: `angular-${selectorId}`,
      template: `<nav>
      <a routerLink="/customer" routerLinkActive="active">customer</a>
      <a routerLink="/customerdetail" routerLinkActive="active">customerdetail</a>
      </nav>
      <router-outlet></router-outlet>
      `
    })(class AppComponentInner {});
  }
}