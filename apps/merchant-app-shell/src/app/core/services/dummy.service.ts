import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DummyService {
  constructor(private http: HttpClient) {}

  addPushSubscriber(sub: any) {
    return this.http.post('http://localhost:9000/api/notifications', sub);
  }

  notify() {
    return this.http.post('http://localhost:9000/api/notify', null);
  }
}
