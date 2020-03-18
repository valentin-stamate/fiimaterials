import { OverlayContainer } from '@angular/cdk/overlay';

export class Themeswitcher{
  lightTheme: boolean;
  themeClass: string;

  private overlayContainer: OverlayContainer;

  constructor() {
  }

  onLightTheme(newTheme: string) {
    this.lightTheme = true;
    this.onChangeTheme(newTheme);
  }

  onDarkTheme(newTheme: string) {
    // this.lightTheme = false;
    // this.onChangeTheme(newTheme);
  }
  onChangeTheme(theme: string) {
    this.themeClass = theme;

    // useful : https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1
  }

}
