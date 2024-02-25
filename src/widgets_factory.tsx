import { FC, PropsWithChildren } from 'react'
import * as props from "./widgets_props"
import { Widget, WidgetTheme } from './widget';

export type FCWC<Props> = FC<PropsWithChildren<Props>>;

export interface WidgetsFactory {
    setTheme(theme: WidgetTheme): void;
    getNavbar(): FCWC<props.NavbarProps>;
    getConferenceShowcase(): FC<props.ConferenceShowcaseProps>;
    getConferenceDateWidget(): FC<props.ConferenceDateProps>;
    getConferenceInfoGrid(): FCWC<Widget>;
}