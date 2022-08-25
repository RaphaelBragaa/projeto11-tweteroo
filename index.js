import express  from 'express';
import cors from 'cors'

const app=express()
app.use(cors())
app.use(express.json());

const users=[]
const tweets=[]







app.post('/sign-up',(req,res)=>{
    const {username,avatar}=req.body
    users.push({username,avatar})
console.log(users)
    
    res.send('OK')
    
})

app.post('/tweets',(req,res)=>{
    const {username,tweet}=req.body
    const { avatar } = users.find(user => user.username === username);

    tweets.push({ username, tweet, avatar });
    if(tweets.length>10){
        tweets.shift()
    }
console.log(tweets)
    
    res.send('OK')
    
})

app.get('/tweets',(req,res)=>{

    res.send(tweets)


})


app.listen(5000)