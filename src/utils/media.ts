export const breakpoints = {
  sm: 640,
};

export const media = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (max-width: ${breakpoints[key]}px) { ${style} }`;
};
