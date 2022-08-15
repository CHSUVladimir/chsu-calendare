import React from 'react';
import { IDatesView } from '../../CalendareEventsView';
import { ILocWeek, ILocYear, SatrtDay } from '../loc';
export interface IWeekRow {
    Localisation: ILocWeek;
    StartDay: SatrtDay;
    CurentDate: Date;
    YearLoc: ILocYear;
    zero?: boolean;
    MonthName?: boolean;
    WithoutLess?: boolean;
    DatesView?: IDatesView;
    WN: number;
}
export default class WeekRow extends React.Component<IWeekRow> {
    render(): React.ReactElement<IWeekRow>;
    private get WeekDates();
    private DayDate;
}
