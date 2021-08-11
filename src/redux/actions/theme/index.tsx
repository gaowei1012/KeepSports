export const THEME_CHANGE = 'THEME_CHANGE'

export function onThemeChange(theme: any) {
    return { type: THEME_CHANGE, theme: theme }
}
