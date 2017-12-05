import { NgModule } from "@angular/core";

import { FormattedTimePipe } from "./formatted.time.pipe";
import { QueuedOnlyPipe } from "./queued.only.pipe";

@NgModule({
  declarations: [
    FormattedTimePipe,
    QueuedOnlyPipe
  ],
  exports: [FormattedTimePipe, QueuedOnlyPipe]
})
export class SharedModule { }
