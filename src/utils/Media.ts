// Code adapted from:
// https://github.com/reactjs/reactjs.org/blob/main/src/theme.js

// Breakpoints obtained from:
// https://github.com/Semantic-Org/Semantic-UI/blob/deb275d2d5fe9a522a0b7bd8b6b6a1c939552718/src/themes/default/globals/site.variables#L208-L216

const MOBILE_BREAKPOINT = 320;
const TABLET_BREAKPOINT = 768;
const COMPUTER_BREAKPOINT = 992;
const LARGE_MONITOR_BREAKPOINT = 1200;
const WIDESCREEN_MONITOR_BREAKPOINT = 1920;

const SIZES = {
  mobile: { min: MOBILE_BREAKPOINT, max: TABLET_BREAKPOINT },
  tablet: { min: TABLET_BREAKPOINT, max: COMPUTER_BREAKPOINT },
  computer: { min: COMPUTER_BREAKPOINT, max: LARGE_MONITOR_BREAKPOINT },
  largeMonitor: {
    min: LARGE_MONITOR_BREAKPOINT,
    max: WIDESCREEN_MONITOR_BREAKPOINT,
  },
  widescreen: { min: WIDESCREEN_MONITOR_BREAKPOINT, max: Infinity },
};

type Size = keyof typeof SIZES;

const Media = {
  between(smallKey: Size, largeKey: Size, excludeLarge: boolean = false) {
    if (excludeLarge) {
      return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${
        SIZES[largeKey].min - 1
      }px)`;
    } else {
      if (SIZES[largeKey].max === Infinity) {
        return `@media (min-width: ${SIZES[smallKey].min}px)`;
      } else {
        return `@media (min-width: ${SIZES[smallKey].min}px) and (max-width: ${SIZES[largeKey].max}px)`;
      }
    }
  },

  greaterThan(key: Size) {
    return `@media (min-width: ${SIZES[key].min}px)`;
  },

  lessThan(key: Size) {
    return `@media (max-width: ${SIZES[key].min - 1}px)`;
  },

  size(key: Size) {
    const size = SIZES[key];

    if (size.min == null) {
      return Media.lessThan(key);
    } else if (size.max == null) {
      return Media.greaterThan(key);
    } else {
      return Media.between(key, key);
    }
  },
};

export default Media;
