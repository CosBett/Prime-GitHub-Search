import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private profile: string;
  private client_id = 'e7addf9cde080ac6ad60';
  private client_secret = '323fd8abafef882e8beb4146dc8193bf68cb06db';
  updateGithubProfile: any;

  constructor(private httpClient: HttpClient) {
    this.profile = "CosBett";
  }
  //gitHub profile
  getProfile() {
    return this.httpClient.get('https://api.github.com/users/' + this.profile + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret + environment.github_PAT)
      .pipe(map(res => res));

  }

  //gitHub Repositories
  getRepos() {
    return this.httpClient.get('https://api.github.com/users/' + this.profile + "/repos?client_id=" + this.client_id + "&client_secret=" + this.client_secret)
      .pipe(map(res => res));
  }
  updateUserInfo(profile: string) {
    this.profile = profile;

  }
}
