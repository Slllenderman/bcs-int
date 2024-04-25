import { Widget } from "./widget";

// Navbar ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=207-1610&mode=design&t=DqHHb2fXLk5DJBlu-4

export interface NavbarProps extends Widget {
    auth_href: String;
    home_href: String;
    logo_name: String;
    logo_img: String;
}

// Conference showcase ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=207-1569&mode=design&t=DqHHb2fXLk5DJBlu-4

export interface ConferenceShowcaseProps extends Widget {
    title: String;
    subtitle: String;
    participate_href: String;
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
