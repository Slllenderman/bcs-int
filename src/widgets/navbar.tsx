import { Widget } from "../widget";

export interface INavbar extends Widget {
    homeHref: String;
    organizersHref: String;
    programHref: String;
    themeHref: String;
    requirementsHref: String;
    previousHref: String;
    loginHref: String;
}