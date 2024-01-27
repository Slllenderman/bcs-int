import { WidgetProps } from "../widget";

export interface NavbarProps extends WidgetProps {
    homeHref: String;
    organizersHref: String;
    programHref: String;
    themeHref: String;
    requirementsHref: String;
    previousHref: String;
    loginHref: String;
}