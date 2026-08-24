import PullRequestSource from "./pull-request-source.interface";
import { PullRequest } from "./pull-request.type";

class FakePullRequestSource implements PullRequestSource {
     sampleData: PullRequest[] = [
         {id:"1", title:"PR1", repo:"Repo1"},
         {id:"2", title:"PR2", repo:"Repo2"},
         {id:"3", title:"PR3", repo:"Repo3"},
         {id:"4", title:"PR4", repo:"Repo4"},
         {id:"5", title:"PR5", repo:"Repo5"},
         {id:"6", title:"PR6", repo:"Repo6"},
     ];


    OpenPullRequest(repos: string[]): Promise<PullRequest[]> {
        return Promise.resolve(
            this.sampleData.filter
            (pullRequest=> repos.includes(pullRequest.repo))
        );
    }
}