export default function calculateCanvasSize(length: string, width: string) {
  if (!/^-?\d+$/.test(length) || !/^-?\d+$/.test(width)) {
    return NaN;
  }
  return parseInt(length) * parseInt(width);
}