require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const gitHubData = {
  "login": "muhammadIbrahim1-k",
  "id": 141178652,
  "node_id": "U_kgDOCGo3HA",
  "avatar_url": "https://avatars.githubusercontent.com/u/141178652?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/muhammadIbrahim1-k",
  "html_url": "https://github.com/muhammadIbrahim1-k",
  "followers_url": "https://api.github.com/users/muhammadIbrahim1-k/followers",
  "following_url": "https://api.github.com/users/muhammadIbrahim1-k/following{/other_user}",
  "gists_url": "https://api.github.com/users/muhammadIbrahim1-k/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/muhammadIbrahim1-k/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/muhammadIbrahim1-k/subscriptions",
  "organizations_url": "https://api.github.com/users/muhammadIbrahim1-k/orgs",
  "repos_url": "https://api.github.com/users/muhammadIbrahim1-k/repos",
  "events_url": "https://api.github.com/users/muhammadIbrahim1-k/events{/privacy}",
  "received_events_url": "https://api.github.com/users/muhammadIbrahim1-k/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Muhammad Ibrahim",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "💻 Front End React Developer\r\n",
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 3,
  "following": 0,
  "created_at": "2023-08-01T19:00:47Z",
  "updated_at": "2026-02-04T03:52:06Z"
}

app.get('/github',(req, res)=>{
    res.json(gitHubData)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/youtube', (req, res)=>{
    res.send("boldBreakdown")
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login first!</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
