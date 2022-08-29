import  express  from "express";
import cors from 'cors';


const server = express();
server.use(cors())
server.use(express.json())

let myAvatar;
let users = [];
const tweets = [];

server.post('/sign-up', (req, res) => {
    const {username, avatar} = req.body;
    let user = {
        username,
        avatar
    };
    myAvatar = user.avatar

    users.push(user)


    return res.jsonp("ok");
})


server.post('/tweets', (req, res) => {
    const {username, tweet} = req.body;
    let newTweet = {
        username,
        tweet,
        avatar: myAvatar
    };

    tweets.push(newTweet)


    return res.jsonp("ok");
})


server.get('/tweets', (req, res) => {
    res.send(tweets);
})

server.listen(5000)