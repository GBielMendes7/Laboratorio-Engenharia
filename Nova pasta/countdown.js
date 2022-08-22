export default class Countdown{
    constructor(futureData){
        this.futureData = futureData
    }
    get _actualDate(){
        return new Date();
    }

    get _futureData(){
        return  new Date(this.futureData);
    }
    get _timeStampDiff(){
        return this._futureData.getTime() - this._actualDate.getTime();
    }
    get days(){
        return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
    }
    get hours(){
        return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
    }
    get minutes(){
        return Math.floor(this._timeStampDiff / (60 * 1000));
    }
    get seconds(){
        return Math.floor(this._timeStampDiff / 1000);
    }
    get total(){
        const days = this.days;
        const hours = this.hours % 24;
        const minutes = this.minutes % 60;
        const seconds = this.seconds % 60;
        return [days, hours, minutes, seconds];
    }


}