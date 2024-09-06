export default function get3DZoomLevel(width: number): number {
  switch (true) {
    case width < 400:
      return -3.5;
    case width < 600:
      return -2;
    case width < 1000:
      return -1.5;
    case width < 1500:
      return -0.5;
    default:
      return 0;
  }
}
