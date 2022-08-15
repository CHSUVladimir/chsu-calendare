import React from 'react';
import { IDatesView } from '../CalendareEventsView';
import { ICHSUCalendareLocalisation, SatrtDay } from './loc';
export interface ICHSUCalendare {
    Localisation?: ICHSUCalendareLocalisation;
    StartDay?: SatrtDay;
    WithoutLess?: boolean;
    minYear?: number;
    zero?: boolean;
    MonthName?: boolean;
    DatesView?: IDatesView;
}
interface ICalendareState {
    CurentDate: Date;
}
export default class CHSUCalendare extends React.Component<ICHSUCalendare, ICalendareState> {
    constructor(p: ICHSUCalendare);
    state: Readonly<ICalendareState>;
    render(): React.ReactElement<ICHSUCalendare>;
    private get Loc();
    private get MonthPlus();
    private get MonthMinus();
    private get StartWD();
    private get WeekDates();
    private get WeekInMonth();
}
export {};
