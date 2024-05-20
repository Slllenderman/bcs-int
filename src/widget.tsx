import { createContext, useContext } from "react";

export class Widget {
    width?: number = 1;
    height?: number = 1;
    font_size?: number = 1;
    visibility?: Boolean = true;
    className?: string = "";
    theme?: WidgetTheme;
}

export const useWidget = (props: any): any => {
    const defWidget = new Widget()
    const ret = { ...props }
    if(typeof ret.width === 'undefined') ret.width = defWidget.width
    if(typeof ret.height === 'undefined') ret.height = defWidget.height
    if(typeof ret.font_size === 'undefined') ret.font_size = defWidget.font_size
    if(typeof ret.visibility === 'undefined') ret.visibility = defWidget.visibility
    if(typeof ret.className === 'undefined') ret.className = defWidget.className
    return ret
}

export class WidgetTypography {
    font: string = "Inter";
    size: number = 16;
    color: string = "#000000";
    style: "bold" | "italic" | "normal" = "normal"
}

export class WidgetTheme {
    first_basecolor: string = "#000000";
    second_basecolor: string = "#000000";
    third_basecolor: string = "#000000";
    first_typography: WidgetTypography = new WidgetTypography();
    second_typography: WidgetTypography = new WidgetTypography();
    third_typography: WidgetTypography = new WidgetTypography();
}


const ThemeContext = createContext({})

export const useTheme = (props: any): any => {
    const { theme, setTheme }: any = useContext(ThemeContext)
    if(typeof props.theme !== 'undefined'){
        let new_theme = theme
        if(typeof props.theme.first_basecolor !== 'undefined')
            new_theme.palette.primary.main = props.theme.first_basecolor
        if(typeof props.theme.second_basecolor !== 'undefined')
            new_theme.palette.primary.dark = props.theme.second_basecolor
        if(typeof props.theme.third_basecolor !== 'undefined')
            new_theme.palette.primary.light = props.theme.third_basecolor
        setTheme(new_theme)
    }
    return theme
} 