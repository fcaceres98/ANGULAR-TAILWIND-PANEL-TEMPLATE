import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Output() toogleThemeModeLayout: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('appDrawer') appDrawer!: ElementRef;

  sideBarOpen = true;
  isDark = true;

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  sideBarToogler($event: any): void {
    this.sideBarOpen = !this.sideBarOpen;
  }

  switchTheme(thememMode: any): void {
    this.isDark = thememMode;
    const theme = ( this.isDark ) ? 'theme-dark' : 'theme-light';
    this.renderer.setAttribute(this.document.body, 'class', theme);
    this.renderer.addClass(this.document.body, 'mat-typography');
  }

  closeSideBar(): void {
    this.sideBarOpen = false;
  }

}
