
export class WidgetTypography {
    font: String = "Times New Roman";
    size: Number = 14;
    color: Number = 0;
    isBold: Boolean = false;
    isItalic: Boolean = false;
}

export class GlobalParams {
    language: String = "rus";
    first_basecolor: Number = 0;
    second_basecolor: Number = 0;
    third_basecolor: Number = 0;
    first_typography: WidgetTypography = new WidgetTypography();
    second_typography: WidgetTypography = new WidgetTypography();
    third_typography: WidgetTypography = new WidgetTypography();
}

export class WidgetProps {
    size: Number = 1;
    font_size: Number = 1;
    visibility: Boolean = true;
    className: String = "";
}

