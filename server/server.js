const express = require('express')
const app = express()

const data = [
    {
        "posts": [
            {
                "id": 1,
                "title": "json-server",
                "author": "typicode"
            }
        ],
        "comments": [
            {
                "id": 1,
                "body": "some comment",
                "postId": 1
            }
        ],
        "profile": {
            "name": "typicode"
        }
    }
]

app.get("/", (req, res) => {
    res.json(data)
    // res.end()
    // console.log(req)
})
app.post("/", (req, res) => {
    res.status(200)
    console.log(req)
    // req.end()
})

app.listen(5000, () => {
    console.log("server started at port 5000")
})