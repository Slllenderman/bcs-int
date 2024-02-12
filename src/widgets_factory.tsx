import { FC, PropsWithChildren } from 'react'
import * as props from "./widgets/index_components"

type FCWC<Props> = FC<PropsWithChildren<Props>>;

export interface WidgetsFactory {
    getNavbar(): FCWC<props.NavbarProps>;
    getConferenceShowcase(): FC;
    getConferenceDateWidget(): FC<props.ConferenceDateProps>;
    getConferenceInfoGrid(): FCWC<props.NavbarProps>;
    getFooter(): FC;
}