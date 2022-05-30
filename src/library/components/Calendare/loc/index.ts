export interface ICHSUCalendareLocalisation{
    LocalWeek:ILocWeek;
}


export interface ILocWeek{
    /**
     * День недели с которого начинается неделя
     */
    FirstLocDay:number;
    /**
     * Локализованная неделя
     */
    Week: {
        /**
         * Порядковый день недели принятый в js
         */
        [JSDOF:number]:{
        /**
         * Локальный номер дня недели
         */
        LocDof:number;
        /**
        * Короткое наименование
        */
        ShortName:string;
       /**
        * Длинное наименование
        */
        LongName:string;
        /**
        * Прочие имена при необходимости
        */
      OtherNames?:{[name: string]:string};
        }
    };
}

export interface ILocMonth{

}

