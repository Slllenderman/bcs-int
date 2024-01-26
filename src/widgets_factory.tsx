import { IConferenceDateWidget } from "./widgets/confdate"
import { INavbar } from "./widgets/navbar";

export interface WidgetsFactory {
    createConferenceDateWidget(): IConferenceDateWidget;
    createNavbar(): INavbar;
}