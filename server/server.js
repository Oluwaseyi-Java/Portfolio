const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json([
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
    )
})

app.listen(5000, () => {
    console.log("server started at port 5000")
})