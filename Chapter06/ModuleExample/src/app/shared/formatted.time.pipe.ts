import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formattedTime' })
export class FormattedTimePipe {
  transform(totalMinutes: number) {
    let minutes: number = totalMinutes % 60;
    let hours: number = Math.floor(totalMinutes / 60);
    return `${hours}h:${minutes}m`;
  }
}
