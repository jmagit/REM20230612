/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, RouterLink } from '@angular/router';
import { LibrosViewModelService } from './servicios.service';
import { ErrorMessagePipe } from '../../lib/my-core/pipes/cadenas.pipe';
import { FormButtonsComponent } from '../common-component/form-buttons/form-buttons.component';
import { TypeValidatorDirective } from '../../lib/my-core/directives/validadores/mis-validaciones.directive';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-libros-list',
    templateUrl: './tmpl-list.component.html',
    styleUrls: ['./componente.component.css'],
    standalone: true,
    imports: [RouterLink, NgFor, NgIf, PaginatorModule]
})
export class LibrosListComponent implements OnInit, OnDestroy {
  constructor(protected vm: LibrosViewModelService) { }
  public get VM(): LibrosViewModelService { return this.vm; }
  ngOnInit(): void {
    // this.vm.list();
    this.vm.load()
  }
  ngOnDestroy(): void { this.vm.clear(); }
}
@Component({
    selector: 'app-libros-add',
    templateUrl: './tmpl-form.component.html',
    styleUrls: ['./componente.component.css'],
    standalone: true,
    imports: [FormsModule, TypeValidatorDirective, FormButtonsComponent, ErrorMessagePipe]
})
export class LibrosAddComponent implements OnInit {
  constructor(protected vm: LibrosViewModelService) { }
  public get VM(): LibrosViewModelService { return this.vm; }
  ngOnInit(): void {
    this.vm.add();
  }
}
@Component({
    selector: 'app-libros-edit',
    templateUrl: './tmpl-form.component.html',
    styleUrls: ['./componente.component.css'],
    standalone: true,
    imports: [FormsModule, TypeValidatorDirective, FormButtonsComponent, ErrorMessagePipe]
})
export class LibrosEditComponent implements OnChanges {
  @Input() id?: string;
  constructor(protected vm: LibrosViewModelService, protected router: Router) { }
  public get VM(): LibrosViewModelService { return this.vm; }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.id) {
      this.vm.edit(+this.id);
    } else {
      this.router.navigate(['/404.html']);
    }
  }
}

@Component({
    selector: 'app-libros-view',
    templateUrl: './tmpl-view.component.html',
    styleUrls: ['./componente.component.css'],
    standalone: true
})
export class LibrosViewComponent implements OnChanges {
  @Input() id?: string;
  constructor(protected vm: LibrosViewModelService, protected router: Router) { }
  public get VM(): LibrosViewModelService { return this.vm; }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.id) {
      this.vm.view(+this.id);
    } else {
      this.router.navigate(['/404.html']);
    }
  }
}

export const LIBROS_COMPONENTES = [
  LibrosListComponent, LibrosAddComponent, LibrosEditComponent, LibrosViewComponent,
];
