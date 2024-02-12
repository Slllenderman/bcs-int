import { WidgetProps } from "../widget";

// NavBar ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export interface NavbarHrefProps {
    href: String;
    name: String;
}

export interface NavbarProps extends WidgetProps {
    auth_href: String;
    home_href: String;
    logo_name: String;
    logo_img: String;
}

// Conference showcase ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Conference date & format ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export enum ConferenceFormat {
    Online, Offline, OffOnline
}

export interface ConferenceDateProps extends WidgetProps {
    date: Date;
    format: ConferenceFormat;
}

// Conference info ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Footer ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~