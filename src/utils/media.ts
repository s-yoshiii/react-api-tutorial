export const breakpoints = {
  sm: 640,
};

export const contWidth = {
  lg: 1200,
  lgSpace: 50,
};

export const media = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};
