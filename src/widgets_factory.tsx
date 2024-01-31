import { FC } from 'react'
import { ConferenceDateProps} from "./widgets/confdate"
import { NavbarProps } from "./widgets/navbar";

export interface WidgetsFactory {
    getConferenceDateWidget(): FC<ConferenceDateProps>;
    getNavbar(): FC<NavbarProps>;
}