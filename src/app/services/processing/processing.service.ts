import { Injectable } from '@angular/core';
import { TempTime } from '../../model/temp-time';

@Injectable({
  providedIn: 'root'
})
export class ProcessingService {


  constructor() { }

  getTempArrayFromHourlyData(hourly: any): TempTime[] {
    let tempArray: TempTime[] = [];
    // const hourlyArray = Object.values(hourly);
    const temperaturesArray: number[] = hourly.temperature_2m;
    const timesArray: string[] = hourly.time;

    for (let i = 0; i < temperaturesArray.length; i++) {
      const time = timesArray[i];
      const tempF = temperaturesArray[i];
      const tempC = this.fromFtoC(tempF);
      const tempTime: TempTime = {
        temp: tempC,
        time: time
      }
      tempArray.push(tempTime)
    }

    return tempArray;

    // const temperaturesArray: number[] = hourly.temperature_2m;
    // const timesArray: string[] = hourly.time;

    // const newTempTimeArray = temperaturesArray.map((t, i)=> {
    //   const time = timesArray[i];
    //   const tempF = t;
    //   const tempC = this.fromFtoC(tempF);

    //   const tempTime: TempTime = {
    //     temp: tempC,
    //     time: time
    //   }

    //   return tempTime
    // })

    // return newTempTimeArray;

    // return temperaturesArray.map((t, i) => ({temp: this.fromFtoC(t), time: timesArray[i]}));
      
    
  }

  getMinTemp(tempArray: TempTime[]): TempTime {
    throw new Error('Method not implemented.');
  }
  getTempMean(tempArray: TempTime[]): number {
    throw new Error('Method not implemented.');
  }
  getMaxTemp(tempArray: TempTime[]): TempTime {
    throw new Error('Method not implemented.');
  }

  fromFtoC(f: number): number{
    const celsius = (f-32) * (5/9)
    const rounded = Math.round(celsius * 10) / 10
    return rounded;
  }

  fromCtoK(c: number): number{
    if (c === 25) {
      return 298.15;
    } else{
      return 306.15;
    }
    
  }

}
