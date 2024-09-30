require('dotenv').config();
const express = require('express');

const app=express();

const port=process.env.PORT;

const githubData={
    "login": "arpit-9565",
    "id": 98576433,
    "node_id": "U_kgDOBeAoMQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/98576433?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/arpit-9565",
    "html_url": "https://github.com/arpit-9565",
    "followers_url": "https://api.github.com/users/arpit-9565/followers",
    "following_url": "https://api.github.com/users/arpit-9565/following{/other_user}",
    "gists_url": "https://api.github.com/users/arpit-9565/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/arpit-9565/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/arpit-9565/subscriptions",
    "organizations_url": "https://api.github.com/users/arpit-9565/orgs",
    "repos_url": "https://api.github.com/users/arpit-9565/repos",
    "events_url": "https://api.github.com/users/arpit-9565/events{/privacy}",
    "received_events_url": "https://api.github.com/users/arpit-9565/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Arpit Omar",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Passion to solve real-world problems using technologies in an innovative way.",
    "twitter_username": null,
    "public_repos": 16,
    "public_gists": 0,
    "followers": 1,
    "following": 2,
    "created_at": "2022-01-28T06:16:44Z",
    "updated_at": "2024-09-01T10:53:01Z"
  }

app.get('/',(req,res)=>{
    res.send("message");
})

app.get('/youtube',(req,res)=>{
    res.redirect("https://youtube.com");
})

app.get('/saty',(req,res)=>{
    res.send("My name is Arpit");
})
app.get('/github',(req,res)=>{
    res.json(githubData);
})


app.listen(port,()=>{
    console.log(`Server is running at${port}`);
})