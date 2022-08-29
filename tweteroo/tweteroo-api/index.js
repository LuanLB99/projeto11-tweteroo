import  express  from "express";
import cors from 'cors';


const server = express();
server.use(cors())
server.use(express.json())

let myAvatar;
let users = [];
const tweets = [];
let newTweets = [];

server.post('/sign-up', (req, res) => {
    const {username, avatar} = req.body;
    let user = {
        username,
        avatar
    };
    myAvatar = user.avatar

    users.push(user)


    return res.jsonp(users);
})


server.post('/tweets', (req, res) => {
    const {username, tweet} = req.body;
    let newTweet = {
        username,
        tweet,
        avatar: myAvatar
    };

    tweets.push(newTweet)
    let newTweets = tweets;

    return res.jsonp(tweets);
})


server.get('/tweets', (req, res) => {
    
    newTweets = tweets;
    res.send(newTweets.reverse());
})

server.listen(5000)