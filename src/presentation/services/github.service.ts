import { GithubIssuePayload, GithubStarPayload } from "../../interfaces";


export class GithubService{

    onStar(payload: GithubStarPayload): string{
        const {starred_at, action, sender, repository} = payload;
        return `User ${sender.login} ${action} star on ${repository.full_name}.`;
    }

    onIssues(payload: GithubIssuePayload): string{        
        const { action, issue } = payload;

        if( action ==="opened"){
            return `Issue was opened with this title: ${issue.title}`;
        }

        if( action ==="closed"){
            return `Issue was closed by: ${issue.user.login}`;
        }

        if( action ==="reopened"){
            return `Issue was reopened by: ${issue.user.login}`;
        }

        return `Unhandled action for the issue. ${action}`;        
    }
}