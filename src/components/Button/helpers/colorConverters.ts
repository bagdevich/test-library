export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const hexToRgbValuesString = (hex) => {
  const rgb = hexToRgb(hex);
  return rgb ? `${rgb.r}, ${rgb.g}, ${rgb.b}` : null;
};

export const hexToRgbAString = (hex, alpha) => {
  const rgbString = hexToRgbValuesString(hex);

  return rgbString ? `rgba(${rgbString}, ${alpha})` : null;
};

const componentToHex = (c) => {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

export const rgbToHex = (r, g, b) => {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
};

export const hexToHSL = (H) => {
  // Convert hex to RGB first
  let r: any = 0;
  let g: any = 0;
  let b: any = 0;
  if (H.length === 4) {
    r = `0x${H[1]}${H[1]}`;
    g = `0x${H[2]}${H[2]}`;
    b = `0x${H[3]}${H[3]}`;
  } else if (H.length === 7) {
    r = `0x${H[1]}${H[2]}`;
    g = `0x${H[3]}${H[4]}`;
    b = `0x${H[5]}${H[6]}`;
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l, color: `hsl(${h},${s}%,${l}%)` };
};

export const hexColorToHslWithShade = (hex, shade: 'light' | 'dark' = 'dark') => {
  const { h, s, l } = hexToHSL(hex);

  let hDelta = 1;
  let sDelta = 0;
  let lDelta = 12.4;

  if (shade === 'dark') {
    hDelta *= -1;
    sDelta *= -1;
    lDelta *= -1;
  }

  return `hsl(${h + hDelta},${s + sDelta}%,${l + lDelta}%)`;
};
