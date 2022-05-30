export interface ICHSUCalendareLocalisation {
    /**
     * Локализация дней недели
     */
    LocalWeek: ILocWeek;
    /**
     * Локализация месяцев
     */
    LocalYear: ILocYear;
}
export interface ILocWeek {
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
export interface ILocYear {
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
export declare type SatrtDay = "FirstDayMonth" | "FirstDayWeek" | "CurentDate";
