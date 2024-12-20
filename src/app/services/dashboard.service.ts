import { Injectable } from '@angular/core';
import * as  CryptoJS from 'crypto-js';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import OAuth from 'oauth-1.0a';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public headers;

  constructor(private http:HttpClient, private cookieService: CookieService) {
    this.headers = new HttpHeaders({
      Authorization: this.cookieService.get('jwt.token')
      // Authorization: 'eyJraWQiOiJhNjdmODA1Mi1jMzRjLTRmNzQtYjkxMy0xY2RhZDg0MGRlYzAiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhY2FkZW15LmFsdW5vIiwicm9sZSI6InVzZXIsYWRtaW4iLCJ0ZW5hbnQiOjEsInVzZXJUZW5hbnRJZCI6MywidXNlclR5cGUiOjAsInVzZXJVVUlEIjoiNzQxMmE3Y2EtOTIwMi00MTM5LThlOGItNDRiZDQyN2MzMGY0IiwidGVuYW50VVVJRCI6ImE2N2Y4MDUyLWMzNGMtNGY3NC1iOTEzLTFjZGFkODQwZGVjMCIsImxhc3RVcGRhdGVEYXRlIjoxNzA2MDMwNzczMDAwLCJ1c2VyVGltZVpvbmUiOiJBbWVyaWNhL1Nhb19QYXVsbyIsImV4cCI6MTczMzQ5ODU0MSwiaWF0IjoxNzMzNDk3MzQxLCJhdWQiOiJmbHVpZ19hdXRoZW50aWNhdG9yX3Jlc291cmNlIn0.bCQRfH9UQADrwXuZTp7w5rA2cj8Iz4znNCeNgm14CqTbiIbvgGZI4DWykuEnNG7KPpx-X-U7G9WCb8wgNzmJoWrAioXUxOqYBA1gYt9GSKeFiPlPeN85vD7pdm1acejw384C_UoooNTAGQpTgNzjFm9KiMotuV7mgrnlMOvN1qVw36edUfGVRFu39bUbaMQi99cgWcGxOauFqOayOKxQwq7rmm4gLds03AXoy6g94ElKYRkMygC8NOJem_Z3wOcNpnbPpmcpDB5m4KrF2tlyNc0BOBq2BjmQidusc2Px5JzGxoFDMyeKoMr1UylpxIMDelgT_XGp7d1QSxjIod53Ow'
    });
  }

  async get(endpoint:string): Promise<Observable<any>>{
    return this.http.get(endpoint, { headers: this.headers })
      .pipe(res => {
        return res;
      });
  }
}