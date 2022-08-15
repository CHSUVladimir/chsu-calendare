import React from 'react';
import { IDatesView } from '../../CalendareEventsView';
import { ILocYear } from '../loc';
export interface IDayCell {
    CurentDate?: Date;
    YearLoc: ILocYear;
    zero?: boolean;
    MonthName?: boolean;
    DatesView?: IDatesView;
}
export default class DayCell extends React.Component<IDayCell> {
    render(): React.ReactElement<IDayCell>;
    /**
     * Число (дата)
     */
    private get DayNumber();
    /**
     * Набор классов css
     */
    private get ClassNames();
    /**
     * Наименование месяца
     */
    private get monthName();
}
