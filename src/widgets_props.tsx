import { Widget } from "./widget";


// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=207-1610&mode=design&t=DqHHb2fXLk5DJBlu-4

export interface NavbarProps extends Widget {
    auth_href: string;
    home_href: string;
    logo_name: string;
    logo_img: string;
}

// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=207-1565&mode=design&t=9zceGAlzsGn9zRcY-4

export interface ConferenceDateProps extends Widget {
    start_date: Date;
    end_date: Date;
    format: "online" | "offline" | "both";
    height: number;
}

// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=247-3111&mode=design&t=9zceGAlzsGn9zRcY-4

export interface ConferenceLoactionProps extends Widget {
    address: string;
    ya_link: string;
}

// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=132-3155&mode=design&t=V3ANFZha7n2A741F-4
export interface ConferenceHeadingProps extends Widget {
    title: string;
    subtitle: string;
    part_href: string;
}

// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=207-3386&mode=design&t=l72HAW8gkCmw9N66-4
export interface ConferenceFooter extends Widget {
    connection: string[];
    start_date: Date;
    end_date: Date;
}

// https://www.figma.com/file/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?type=design&node-id=207-1625&mode=design&t=tZ260xfcOh6uD8P1-4
export interface ConferenceUserCard extends Widget {
    post: string;
    image: string;
    initials: string;
    info: string;
}

// https://www.figma.com/design/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?node-id=556-7196&t=vcofsvNVIUJ0Yi7f-4

export interface ArticalCard extends Widget {
    title: string;
    creation_date: Date;
    last_update_date: Date;
    review_state: "reviewed" | "not reviewed";
}

// https://www.figma.com/design/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?node-id=434-5409&t=dEBoHKKYm33BL4BP-4

export interface TopicsTable extends Widget {
    topics: Array<string>;
}

// https://www.figma.com/design/ySvtPDNcNYmCHJlhLACAFi/%F0%9F%A7%A0-%D0%A1%D0%B0%D0%B9%D1%82-%D0%98%D0%98%D0%90%D0%A1%D0%A3?node-id=434-5902&t=dEBoHKKYm33BL4BP-4

export interface InfoList extends Widget {
    list: Array<string>;
    variant: "main" | "accent";
}
