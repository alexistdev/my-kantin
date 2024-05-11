import {Component, Inject, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor (
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.renderer.addClass(this.document.body, 'hold-transition');
    this.renderer.addClass(this.document.body, 'login-page');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'hold-transition');
    this.renderer.removeClass(this.document.body, 'login-page');
  }
}
