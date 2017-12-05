import { Queueable } from "./queued.model";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'queuedOnly' })
export class QueuedOnlyPipe implements PipeTransform {
  transform(queueableItems: Queueable[], ...args): Queueable[] {
    return queueableItems.filter(queueableItem => queueableItem.queued === args[0]
    )
  }
}
