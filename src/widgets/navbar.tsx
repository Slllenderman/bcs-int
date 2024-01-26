import { WidgetProps } from "../widget";

export interface INavbarProps extends WidgetProps {
    homeHref: String;
    organizersHref: String;
    programHref: String;
    themeHref: String;
    requirementsHref: String;
    previousHref: String;
    loginHref: String;
}