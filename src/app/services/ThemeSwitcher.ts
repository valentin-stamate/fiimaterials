export class ThemeSwitcher{
  darkTheme = true;

  constructor() {
  }

  toggleTheme(): void {
    this.darkTheme = !this.darkTheme;
  }

}
