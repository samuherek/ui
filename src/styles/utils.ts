import { ThemeStyled } from "./theme";

type PropsWithTheme = {
  theme: ThemeStyled;
};

export function baseColors(
  props: PropsWithTheme,
  key: string,
  fallback: string = ""
): string {
  return props.theme.base[key] || fallback || "#000000";
}

export function colorByKey(key: string, fallback?: string) {
  return function(props: PropsWithTheme): string {
    return baseColors(props, key, fallback);
  };
}
