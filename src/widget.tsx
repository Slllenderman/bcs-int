
export class Widget {
    size?: number = 1;
    font_size?: number = 1;
    visibility?: Boolean = true;
    className?: String = "";
}

export const useWidget = (props: any): any => {
    const defWidget = new Widget()
    const ret = { ...props }
    if(typeof ret.size === 'undefined') ret.size = defWidget
    if(typeof ret.font_size === 'undefined') ret.font_size = defWidget
    if(typeof ret.visibility === 'undefined') ret.visibility = defWidget
    if(typeof ret.className === 'undefined') ret.className = defWidget
    return ret
}

export class WidgetTypography {
    font: String = "Times New Roman";
    size: number = 14;
    color: number = 0;
    isBold: Boolean = false;
    isItalic: Boolean = false;
}

export class WidgetTheme {
    language: "rus" | "eng" = "rus";
    first_basecolor: String = "#000000";
    second_basecolor: String = "#000000";
    third_basecolor: String = "#000000";
    first_typography: WidgetTypography = new WidgetTypography();
    second_typography: WidgetTypography = new WidgetTypography();
    third_typography: WidgetTypography = new WidgetTypography();
}

