import { FC } from 'react'
import { IConferenceDateProps} from "./widgets/confdate"
import { INavbarProps } from "./widgets/navbar";

export interface WidgetsFactory {
    createConferenceDateWidget(): FC<IConferenceDateProps> | undefined;
    createNavbar(): FC<INavbarProps> | undefined;
}