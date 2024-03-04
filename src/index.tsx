import { Widget, WidgetTypography, WidgetTheme } from "./widget";
import { WidgetsFactory, FCWC } from "./widgets_factory";
import * as props from './widgets_props';

const defparams = { ...new Widget() }
const defthemes = { ...new WidgetTheme() }

export { Widget, WidgetTypography, WidgetTheme, WidgetsFactory, FCWC, props, defparams, defthemes };