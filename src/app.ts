import express from "express";
import { envs } from "./config";
import { GithubController } from "./presentation/github/controller";
import { DiscordService, GithubService } from "./presentation/services";


(() => {
    main();
})();

function main(){
    const app = express();
    const githubService = new GithubService();
    const discordService = new DiscordService();
    const controller = new GithubController(githubService, discordService);
    app.use(express.json());

    app.post("/api/github", controller.webhookHandler);
    app.get("/api/githubs", controller.webhookHandler);

    app.listen(envs.PORT, ()=>{
        console.log(`App running on port ${envs.PORT}`);
    });

}