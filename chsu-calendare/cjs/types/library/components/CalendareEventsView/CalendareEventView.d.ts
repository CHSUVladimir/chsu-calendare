/// <reference types="react" />
export interface ICalendareEventView {
    /**
     * Набор элементов для отображения
     */
    elements: JSX.Element[];
}
export interface IDatesView {
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
export declare function getValuesFromDate(model: IDatesView, curDate: Date): ICalendareEventView | undefined;
/**
 * Добавляет набор елементов отображения событий
 * @param {IDatesView} model Контейнер для данных
 * @param {Date} curDate дата для которой добавляются елементы
 * @param {ICalendareEventView} event набор отображений
 */
export declare function AddValuesToDate(model: IDatesView, curDate: Date, event: ICalendareEventView): void;
/**
 * Добавляет елемент отображения события
 * @param {IDatesView} model Контейнер для данных
 * @param {Date} curDate дата для которой добавляется елемент
 * @param {JSX.Element} element отображение
 */
export declare function AddValueToDate(model: IDatesView, curDate: Date, element: JSX.Element): void;
