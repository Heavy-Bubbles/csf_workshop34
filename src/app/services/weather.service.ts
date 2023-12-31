import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeather(city: string, key: string): Promise<any> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', key);

    return(lastValueFrom(this.httpClient.get<Weather>(
      'https://api.openweathermap.org/data/2.5/weather',
      {params: params})));
  }

  getWeatherUsingObservable(city: string, key: string): Observable<any> {
    const params = new HttpParams()
      .set('q', city)
      .set('appid', key);

    return this.httpClient.get<Weather>(
      'https://api.openweathermap.org/data/2.5/weather',
      {params: params});
  }
}
