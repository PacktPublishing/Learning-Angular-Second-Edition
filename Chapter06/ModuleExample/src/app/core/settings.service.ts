export class SettingsService {
  timerMinutes: number;
  labelsMap: any;
  pluralsMap: any;

  constructor() {
    this.timerMinutes = 25;
    this.labelsMap = {
      timer: {
        start: 'Start Timer',
        pause: 'Pause Timer',
        resume: 'Resume Countdown',
        other: 'Unknown'
      }
    };

    this.pluralsMap = {
      tasks: {
        '=0': 'No points',
        '=1': 'One point',
        'other': '# points'
      }
    }
  }
}
