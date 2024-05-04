import { Widget } from "./widget";

// Navbar ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=207-1610&mode=design&t=DqHHb2fXLk5DJBlu-4

export interface NavbarProps extends Widget {
    auth_href: string;
    home_href: string;
    logo_name: string;
    logo_img: string;
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
    height: number;
}

// Conference info ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// No link 

export interface ConferenceInfoItemProps extends Widget {
    title: string;
    info: string;
}

// Conference location ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=247-3111&mode=design&t=9zceGAlzsGn9zRcY-4

export interface ConferenceLoactionProps extends Widget {
    address: string;
    ya_link: string;
}

// Conference location ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=132-3155&mode=design&t=V3ANFZha7n2A741F-4
export interface ConferenceHeadingProps extends Widget {
    title: string;
    subtitle: string;
    part_href: string;
}

// Conference footer ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=207-3386&mode=design&t=l72HAW8gkCmw9N66-4
export interface ConferenceFooter extends Widget {
    connection: string[];
    start_date: Date;
    end_date: Date;
}

// Conference userCard ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=207-1625&mode=design&t=tZ260xfcOh6uD8P1-4
export interface ConferenceUserCard extends Widget {
    post: string;
    image: string;
    initials: string;
    info: string;
}

// Conference logo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=207-3386&mode=design&t=9u5PbBdiFiiOLEOR-4
export interface ConferenceLogo extends Widget { 
    img_size: number;
    img_src: string;
    title: string;
    variant: string;
}

// Conference description
// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=207-1477&mode=design&t=UeMZnC2nIjhPJOEn-4
export interface ConferenceDescription extends Widget {
    about_text: string;
    purpose_text: string;
    topic_text: string;
    participation_text: string;
}