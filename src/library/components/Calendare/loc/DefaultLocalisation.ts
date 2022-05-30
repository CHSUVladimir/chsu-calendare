import { ICHSUCalendareLocalisation, ILocWeek } from ".";

export function DefaultLocalisation():ICHSUCalendareLocalisation{
    const res:ICHSUCalendareLocalisation={
        LocalWeek:RUWeek()
    };

    return res;
};

function RUWeek():ILocWeek{
    return {
        FirstLocDay:1,
        Week:{
            1:{LocDof:1,ShortName:"пн",LongName:"понедельник"},
            2:{LocDof:2,ShortName:"вт",LongName:"вторник"},
            3:{LocDof:3,ShortName:"ср",LongName:"среда"},
            4:{LocDof:4,ShortName:"чт",LongName:"четверг"},
            5:{LocDof:5,ShortName:"пт",LongName:"пятница"},
            6:{LocDof:6,ShortName:"сб",LongName:"суббота"},
            0:{LocDof:7,ShortName:"вс",LongName:"воскресенье"}
        }
        
    };
}