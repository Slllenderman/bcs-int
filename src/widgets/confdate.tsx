import { WidgetProps } from "../widget";

export enum ConferenceFormat {
    Online, Offline, OffOnline
}

export interface ConferenceDateProps extends WidgetProps {
    date: Date;
    format: ConferenceFormat;
}