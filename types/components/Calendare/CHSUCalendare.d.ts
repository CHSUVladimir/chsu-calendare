import React from 'react';
import { ICHSUCalendareLocalisation, SatrtDay } from './loc';
export interface ICHSUCalendare {
    Localisation?: ICHSUCalendareLocalisation;
    StartDay?: SatrtDay;
}
export default class CHSUCalendare extends React.Component<ICHSUCalendare> {
    render(): React.ReactElement<ICHSUCalendare>;
    private get Loc();
}
