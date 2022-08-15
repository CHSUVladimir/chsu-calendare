import React from 'react';

interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => JSX.Element;

interface ICalendareEventView {
    /**
     * Набор элементов для отображения
     */
    elements: JSX.Element[];
}
interface IDatesView {
    /**
     * @param {number} Год
     */
    [Year: number]: {
        /**
         * @param {number} Месяц
         */
        [Month: number]: {
            /**
             * @param {number} День
             */
            [Day: number]: ICalendareEventView | undefined;
        };
    };
}
/**
 * Получает набор эоементов для отображения для конкретной даты
 * @param {IDatesView} model Контейнер для данных
 * @param {Date} curDate дата для которой производится поиск данных
 * @returns {ICalendareEventView | undefined} отображение
 */
declare function getValuesFromDate(model: IDatesView, curDate: Date): ICalendareEventView | undefined;
/**
 * Добавляет набор елементов отображения событий
 * @param {IDatesView} model Контейнер для данных
 * @param {Date} curDate дата для которой добавляются елементы
 * @param {ICalendareEventView} event набор отображений
 */
declare function AddValuesToDate(model: IDatesView, curDate: Date, event: ICalendareEventView): void;
/**
 * Добавляет елемент отображения события
 * @param {IDatesView} model Контейнер для данных
 * @param {Date} curDate дата для которой добавляется елемент
 * @param {JSX.Element} element отображение
 */
declare function AddValueToDate(model: IDatesView, curDate: Date, element: JSX.Element): void;

interface ICHSUCalendareLocalisation {
    /**
     * Локализация дней недели
     */
    LocalWeek: ILocWeek;
    /**
     * Локализация месяцев
     */
    LocalYear: ILocYear;
    Warning: IWarning;
}
interface ILocWeek {
    /**
     * День недели с которого начинается неделя
     */
    FirstLocDay: number;
    /**
     * Локализованная неделя
     */
    Week: {
        /**
         * Порядковый день недели принятый в js
         */
        [JSDOF: number]: {
            /**
             * Локальный номер дня недели
             */
            LocDof: number;
            /**
            * Короткое наименование
            */
            ShortName: string;
            /**
             * Длинное наименование
             */
            LongName: string;
            /**
            * Прочие имена при необходимости
            */
            OtherNames?: {
                [name: string]: string;
            };
        };
    };
}
interface ILocYear {
    [JSMonthOrder: number]: {
        /**
         * Локализированный порядковый номер месяца
         */
        LocMonthOrder: number;
        /**
         * Короткое наименование
         */
        ShortName: string;
        /**
         * Длинное наименование
         */
        LongName: string;
        /**
         * Прочие имена при необходимости
         */
        OtherNames?: {
            [name: string]: string;
        };
    };
}
declare type SatrtDay = "FirstDayMonth" | "FirstDayWeek" | "CurentDate";
interface IWarning {
    NoLessMonth: string;
}

interface ICHSUCalendare {
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
declare class CHSUCalendare extends React.Component<ICHSUCalendare, ICalendareState> {
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

export { AddValueToDate, AddValuesToDate, Button, CHSUCalendare, ICHSUCalendareLocalisation, ICalendareEventView, IDatesView, ILocWeek as LocalisedWeek, ILocYear as LocalisedYear, SatrtDay, IWarning as Warnings, getValuesFromDate };
