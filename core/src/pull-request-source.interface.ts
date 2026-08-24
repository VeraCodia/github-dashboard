import {PullRequest} from "./pull-request.type";

export default interface PullRequestSource {
   OpenPullRequest(repos:string[]): Promise<PullRequest []>;
}