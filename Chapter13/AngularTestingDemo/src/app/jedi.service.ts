import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JediService {
  apiUrl: string = 'something';
  constructor(private http: HttpClient) { }

  getJedis() {
    return this.http.get(`/api/jedis`);
  }
}
