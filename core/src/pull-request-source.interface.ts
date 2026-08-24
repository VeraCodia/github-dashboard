import {PullRequest} from "./pull-request.type";

export default interface PullRequestSourceInterface {
   OpenPullRequest(repos:string[]): Promise<PullRequest []>;
}