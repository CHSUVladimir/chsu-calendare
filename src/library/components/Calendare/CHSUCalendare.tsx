import React from 'react';
import { ICHSUCalendareLocalisation } from './loc';
import { DefaultLocalisation } from './loc/DefaultLocalisation';


export interface ICHSUCalendare{
    Localisation?:ICHSUCalendareLocalisation;
}

export default class CHSUCalendare extends React.Component<ICHSUCalendare>{





    private get Loc():ICHSUCalendareLocalisation{
        if(this.props.Localisation){
            return this.props.Localisation;
        }else{
            return DefaultLocalisation();
        }
    }
}