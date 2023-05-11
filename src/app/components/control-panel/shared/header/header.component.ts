import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toogleSideBarMenu: EventEmitter<any> = new EventEmitter();
  @Output() toogleThemeMode: EventEmitter<boolean> = new EventEmitter();

  isChecked = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toogleSideBar(): void {
    this.toogleSideBarMenu.emit();
  }

  closeSesion(): void {
    console.log("HeaderComponent - closeSesion")
  }

  gotoInicio(): void {
    console.log("HeaderComponent - gotoInicio")
  }

  openMiPerfil(): void {
    console.log("HeaderComponent - openMiPerfil")
  }

  changeThemeMode(change: MatSlideToggleChange): void {
    console.log("HeaderComponent - changeThemeMode", MatSlideToggleChange)
  }
  
}
