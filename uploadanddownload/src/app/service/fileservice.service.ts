import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileserviceService {
  private server = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  //function to upload file
  upload(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`${this.server}/file/upload`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }

  //function to download file
  download(filename: string): Observable<HttpEvent<Blob>> {
    return this.http.get(`${this.server}/file/download/${filename}`, {
      reportProgress: true,
      observe: 'events',
      responseType: 'blob'
    })
  }
}
