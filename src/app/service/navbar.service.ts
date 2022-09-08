import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  shrinkNavbar!: boolean;

  constructor() { }
}
