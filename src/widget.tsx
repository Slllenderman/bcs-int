
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

