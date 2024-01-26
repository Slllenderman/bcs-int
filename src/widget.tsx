import { Slice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export class WidgetTypography {
    font: String = "Times New Roman";
    size: Number = 14;
    color: Number = 0;
    isBold: Boolean = false;
    isItalic: Boolean = false;
}

export const GlobalProps = createSlice({
    name: 'GlobalSettings',
    initialState : {
        language: "rus",
        first_basecolor: 0,
        second_basecolor: 0,
        third_basecolor: 0,
        first_typography: new WidgetTypography(),
        second_typography: new WidgetTypography(),
        third_typography: new WidgetTypography()
    },
    reducers: {
        changeLanguage(state, action) {
            state.language = action.payload;
        }
    }
})

export class WidgetProps {
    size: Number = 1;
    font_size: Number = 1;
    visibility: Boolean = true;
    global_settings: Slice = GlobalProps
}

