import { createServer } from 'http'

const server = createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { "content-type": 'text/plain' })
        res.end('hello world')
    }
})

server.listen(4000, () => {
    console.log('server is running on port');
})

// means event loop pick callback from event ques and put in call stack to execute