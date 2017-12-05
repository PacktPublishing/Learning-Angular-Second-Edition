import { Component } from '@angular/core';
import { Playlist } from './playlist.model';

@Component({
  selector: 'music-player',
  templateUrl: './music-player.component.html',
  providers: [Playlist]
})
export class MusicPlayerComponent {
  constructor(public playlist: Playlist) {

  }
}