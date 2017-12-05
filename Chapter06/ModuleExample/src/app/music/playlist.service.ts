import { SongsService } from "./songs.service";
import { Injectable } from "@angular/core";
import { Song } from "./song.model";

@Injectable()
export class Playlist {
  songs: Song[];
  constructor(songsService: SongsService) {
    this.songs = songsService.fetch();
  }
}


