import React from 'react';
import { ILocWeek, SatrtDay } from '../loc';
export interface IDayNamesRow {
    /**
     * локализированные данные для дней недели
     */
    Localisation: ILocWeek;
    /**
     * Начало недели
     */
    StartDay: SatrtDay;
    /**
     * Дата для представления с текущего дня
     */
    CurentDate?: Date;
}
export default class DayNamesRow extends React.Component<IDayNamesRow> {
    render(): React.ReactElement<IDayNamesRow>;
    /**
     * @property порядок дней в нелокализированном представлении
     */
    private get DaysOrdering();
}
