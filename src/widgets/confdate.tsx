import { Widget } from "../widget";

export enum ConferenceFromat {
    Online, Offline, OffOnline
}

export interface IConferenceDateWidget extends Widget {
    date: Date;
    format: ConferenceFromat;
}