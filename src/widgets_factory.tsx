import { FC } from 'react'
import { IConferenceDateProps} from "./widgets/confdate"
import { INavbarProps } from "./widgets/navbar";

export interface WidgetsFactory {
    getConferenceDateWidget(): FC<IConferenceDateProps> | undefined;
    getNavbar(): FC<INavbarProps> | undefined;
}