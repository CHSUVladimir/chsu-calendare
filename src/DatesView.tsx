import React from 'react';
import { AddValueToDate, IDatesView } from './library';
import './App.css';


//as CaledareStyle
export interface IDisplay {
    Value: string;
    className?: string;
}

export class Display extends React.Component<IDisplay>{
    public render(): React.ReactElement<IDisplay> {
        return (
            <span className={this.props.className}>
                {this.props.Value}
            </span>
        );
    }
}

export default class DatesView {

    private static get CurentDate(): Date {
        return new Date();
    }

    private static get oneDayAfter(): Date {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        return date;
    }

    private static get treeDayAfter(): Date {
        const date = new Date();
        date.setDate(date.getDate() + 3);
        return date;
    }

    private static get tenDayAfter(): Date {
        const date = new Date();
        date.setDate(date.getDate() + 10);
        return date;
    }

    private static get twentyDayAfter(): Date {
        const date = new Date();
        date.setDate(date.getDate() + 21);
        return date;
    }

    private static get RandomNumber(): number {
        return Math.floor(Math.random() * (100 - 1 + 1) + 1);
    }

    private static get smallRandomNumber(): number {
        return Math.floor(Math.random() * (5 - 1 + 1) + 1);
    }


    public static get Views(): IDatesView {
        let res: IDatesView = {};
        let n = this.smallRandomNumber;
        for (let i = 0; i < n; i++) {
            AddValueToDate(res, this.CurentDate, <Display Value={"" + this.RandomNumber} className={"testClass"} />);
        }
        n = this.smallRandomNumber;
        for (let i = 0; i < n; i++) {
            AddValueToDate(res, this.treeDayAfter, <Display Value={"" + this.RandomNumber} className={"testClass"} />);
        }
        n = this.smallRandomNumber;
        for (let i = 0; i < n; i++) {
            AddValueToDate(res, this.oneDayAfter, <Display Value={"" + this.RandomNumber} className={"testClass"} />);
        }
        n = this.smallRandomNumber;
        for (let i = 0; i < n; i++) {
            AddValueToDate(res, this.tenDayAfter, <Display Value={"" + this.RandomNumber} className={"testClass"} />);
        }
        n = this.smallRandomNumber;
        for (let i = 0; i < n; i++) {
            AddValueToDate(res, this.twentyDayAfter, <Display Value={"" + this.RandomNumber} className={"testClass"} />);
        }

        return res;
    }


}