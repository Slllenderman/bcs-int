import { Widget } from "./widget";
import { Link } from "react-router-dom"
// Navbar ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=207-1610&mode=design&t=DqHHb2fXLk5DJBlu-4

export interface NavbarProps extends Widget {
    auth_href: String;
    home_href: String;
    logo_name: String;
    logo_img: String;
    children: typeof Link;
}

// Conference date & format ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=207-1565&mode=design&t=9zceGAlzsGn9zRcY-4

export enum ConferenceFormat {
    Online, Offline, OffOnline
}

export interface ConferenceDateProps extends Widget {
    start_date: Date;
    end_date: Date;
    format: ConferenceFormat;
    height: number
}

// Conference info ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// No link 

export interface ConferenceInfoItemProps extends Widget {
    title: String;
    info: String;
}

// Conference location ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=247-3111&mode=design&t=9zceGAlzsGn9zRcY-4

export interface ConferenceLoactionProps extends Widget {
    address: String;
    ya_link: String;
}

// Conference location ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=132-3155&mode=design&t=V3ANFZha7n2A741F-4
export interface ConferenceHeadingProps extends Widget {
    title: String;
    subtitle: String;
    part_href: String;
}

// Conference footer ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=207-3386&mode=design&t=l72HAW8gkCmw9N66-4
export interface ConferenceFooter extends Widget {
    connection: String[];
    start_date: Date;
    end_date: Date;
}

// Conference userCard ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=207-1625&mode=design&t=tZ260xfcOh6uD8P1-4
export interface ConferenceUserCard extends Widget {
    post: String,
    image: String,
    initials: String,
    info: String
}