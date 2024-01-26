import { WidgetProps } from "../widget";

export enum ConferenceFromat {
    Online, Offline, OffOnline
}

export interface IConferenceDateProps extends WidgetProps {
    date: Date;
    format: ConferenceFromat;
}