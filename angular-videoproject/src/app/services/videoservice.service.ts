import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../classes/video';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class VideoService {

  private videoUrl: string;

  constructor(private http: HttpClient) {
    this.videoUrl = 'https://video-new-tube.herokuapp.com/videos/';
  }

  public findAll(): Observable<Video[]> {
    console.log(this.http.get<Video[]>(this.videoUrl));
    return this.http.get<Video[]>(this.videoUrl);
  }


  getVideoById(id: number): Observable<Video> {
    return this.http.get<Video>(`${this.videoUrl}/videostorage/${id}`);
  }

}
