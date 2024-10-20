import { useMatches, useNavigation } from "react-router";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export const isValidTheme = (theme: any): theme is Theme => theme && Object.values(Theme).includes(theme);

export const useTheme = (): Theme => {
  const theme = useNavigation().formData?.get("theme") || (useMatches()?.[0]?.data as any)?.theme;
  return isValidTheme(theme) ? theme : Theme.DARK;
};
