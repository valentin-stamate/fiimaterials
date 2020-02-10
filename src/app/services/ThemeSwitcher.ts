export class ThemeSwitcher{
  darkTheme = false;

  constructor() {
  }

  toggleTheme(): void {
    this.darkTheme = !this.darkTheme;
  }

}
