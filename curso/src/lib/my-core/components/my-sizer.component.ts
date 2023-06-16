import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, WritableSignal, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'my-sizer',
  template: `
  <div>
    <button (click)="dec()">-</button><button (click)="inc()">+</button>
    <label [style.font-size.px]="count">FontSize: {{count()}}px {{factor()}}pt</label>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SizerComponent implements OnChanges, DoCheck {
  @Input()  size: number | string = 12;
  @Output() sizeChange = new EventEmitter<number>();
  count: WritableSignal<number> = signal(0)
  factor = computed(() => this.count() * 1.2)

  constructor() {
    effect(()=> this.sizeChange.emit(this.count()))
  }
  ngDoCheck(): void {
    console.log(`ngDoCheck: ${this.count()}`)
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.count.set(+this.size)
  }
  dec() : void { this.resize(-1); }
  inc() : void { this.resize(+1); }

  resize(delta: number) : void {
    this.count.update(value => value + delta)
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
