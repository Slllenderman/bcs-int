
export class Widget {
    size: number = 1;
    font_size: number = 1;
    visibility: Boolean = true;
    className: String = "";
}

export class WidgetTypography {
    font: String = "Times New Roman";
    size: number = 14;
    color: number = 0;
    isBold: Boolean = false;
    isItalic: Boolean = false;
}

export class WidgetTheme {
    language: String = "rus";
    first_basecolor: Number = 0;
    second_basecolor: Number = 0;
    third_basecolor: Number = 0;
    first_typography: WidgetTypography = new WidgetTypography();
    second_typography: WidgetTypography = new WidgetTypography();
    third_typography: WidgetTypography = new WidgetTypography();
}

