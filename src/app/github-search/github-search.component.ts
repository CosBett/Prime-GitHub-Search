
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github-service/github.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {
  public githubProfile: any;
  public githubRepos: any;
  public profile!: string;


  constructor(private githubService: GithubService) { }

  public searchUser() {
    this.githubService.updateUserInfo(this.profile);
    this.githubService.getProfile().subscribe(githubProfile => {
      this.githubProfile = githubProfile
    });

    this.githubService.getRepos().subscribe(githubRepos => {
      this.githubRepos = githubRepos;
    });
  }
  ngOnInit(): void {
    this.githubService.updateUserInfo("CosBett")
    this.githubService.getProfile().subscribe(githubProfile => this.githubProfile = githubProfile);
    this.githubService.getRepos().subscribe(githubRepos => this.githubRepos = githubRepos);


  }
}
