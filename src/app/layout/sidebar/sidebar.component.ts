import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  @ViewChild('btnSolicitudes') btnSolicitudes!: ElementRef;



  // constructor
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(this.router.url);
    console.log(this.activatedRoute);
    console.log(this.activatedRoute.snapshot.url);
  }




  ngOnInit(): void {
    console.log(this.router.url);
  }

  // funcion
  sideClick(path: string) {
    console.log(path);
    this.router.navigate([path]);
    this.btnSolicitudes.nativeElement.text = 'Whale!';
    console.log(this.btnSolicitudes)
    console.log(this.btnSolicitudes.nativeElement)
  }
}

//let btnPrimary = document.querySelector('#primary');

//btnPrimary.addEventListener('click',() => btnPrimary.style.backgroundColor='#ff9201')
