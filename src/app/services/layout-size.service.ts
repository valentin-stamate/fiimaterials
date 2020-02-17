export class LayoutSizeService {
  smallScreen: boolean;
  setSmallScreen(width: number) {
    this.smallScreen = width < 720;
  }
}
