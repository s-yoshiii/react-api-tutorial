export const breakpoints = {
  sm: 640,
};

export const contWidth = {
  lg: 1200,
  lgSpace: 50,
  spSpace: 20,
};

export const media = (key: keyof typeof breakpoints) => {
  return `@media (max-width: ${breakpoints[key]}px)`;
};
