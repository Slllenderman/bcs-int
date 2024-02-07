import { FC, PropsWithChildren } from 'react'
import { ConferenceDateProps} from "./widgets/confdate"
import { NavbarProps } from "./widgets/navbar";

export interface WidgetsFactory {
    getConferenceDateWidget(): FC<PropsWithChildren<ConferenceDateProps>>;
    getNavbar(): FC<PropsWithChildren<NavbarProps>>;
}