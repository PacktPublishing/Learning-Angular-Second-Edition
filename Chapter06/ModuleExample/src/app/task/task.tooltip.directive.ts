import { Task } from './task.model';
import { Input, Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[task]'
})
export class TaskTooltipDirective {
  private defaultTooltipText: string;
  @Input() task: Task;
  @Input() taskTooltip: any;

  @HostListener('mouseover')
  onMouseOver() {
    if (!this.defaultTooltipText && this.taskTooltip) {
      this.defaultTooltipText = this.taskTooltip.innerText;
    }

    this.taskTooltip.innerText = this.defaultTooltipText;
  }
}
