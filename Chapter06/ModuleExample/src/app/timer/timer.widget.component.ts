import { Component } from '@angular/core';
import { SettingsService } from "../core/settings.service";

@Component({
  selector: 'timer-widget',
  template: `
    <div class="text-center">
      <h1> {{ minutes }}:{{ seconds | number }}</h1>
      <p>
        <button (click)="togglePause()" class="btn btn-danger">
        {{ buttonLabelKey | i18nSelect: buttonLabelsMap }}
        </button>
      </p>
    </div>
  `
})
export class TimerWidgetComponent {
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabelKey: string;
  buttonLabelsMap: any;

  constructor(private settingsService: SettingsService) {
    this.buttonLabelsMap = this.settingsService.labelsMap.timer;
  }

  ngOnInit() {
    this.reset();
    setInterval(() => this.tick(), 1000);
  }

  reset() {
    this.isPaused = true;
    this.minutes = this.settingsService.timerMinutes - 1;
    this.seconds = 59;
    this.buttonLabelKey = 'start';
  }

  private tick(): void {
    if (!this.isPaused) {
      this.buttonLabelKey = 'pause';
      if (--this.seconds < 0) {
        this.seconds = 59;
        if (--this.minutes < 0) {
          this.reset();
        }
      }
    }
  }

  togglePause(): void {
    this.isPaused = !this.isPaused;
    if (this.minutes < this.settingsService.timerMinutes ||
      this.seconds < 59
    ) {
      this.buttonLabelKey = this.isPaused ? 'resume' : 'pause';
    }
  }
}
