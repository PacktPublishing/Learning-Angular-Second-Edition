import { Component } from '@angular/core';
import { Playlist } from './playlist.service';

@Component({
  selector: 'music-player',
  templateUrl: 'music.player.component.html',
  providers: [Playlist]
})
export class MusicPlayerComponent {
  constructor(private playlist: Playlist) {
  }
}

