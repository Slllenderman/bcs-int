
export enum ConferenceFormat {
    is_online, is_offline, is_onoffline
}

export interface IConferenceDateWidget {
    date: Date;
    format: ConferenceFormat;
}