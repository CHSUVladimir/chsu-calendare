import React from 'react';
import { ICHSUCalendareLocalisation, SatrtDay } from './loc';
import { DefaultLocalisation } from './loc/DefaultLocalisation';
//import styles from './Styles.module';


export interface ICHSUCalendare{
    Localisation?:ICHSUCalendareLocalisation;
    StartDay?:SatrtDay;
}

export default class CHSUCalendare extends React.Component<ICHSUCalendare>{

    public render():React.ReactElement<ICHSUCalendare>{
        return (
            <div>

            </div>
        );
    }



    private get Loc():ICHSUCalendareLocalisation{
        if(this.props.Localisation){
            return this.props.Localisation;
        }else{
            return DefaultLocalisation();
        }
    }
}