import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { Temperature, TemperatureHumidityData } from '../data/temperature-humidity';

@Injectable()
export class TemperatureHumidityService extends TemperatureHumidityData {
  
  private temperatureDate: Temperature = {
	value: 24,
	min: 12,
	max: 30
  };
  
  private humidityDate: Temperature = {
	value: 87,
	min: 0,
	max: 100
  };
  
  getTemperatureData(): Observable<Temperature> {
	return observableOf(this.temperatureDate);
  }
  
  getHumidityData(): Observable<Temperature> {
	return observableOf(this.humidityDate);
  }
}
