import { NgModule } from "@angular/core";
import { MusicAppComponent } from "./music.app.component";
import { MusicPlayerComponent } from "./music.player.component";
import { MusicLibraryComponent } from "./music.library.component";
import { SongsService } from "./songs.service";

@NgModule({
  declarations: [MusicAppComponent, MusicPlayerComponent, MusicLibraryComponent],
  providers: [SongsService]
})
export class MusicModule { }
