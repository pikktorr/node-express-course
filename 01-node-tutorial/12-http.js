const http = require('http');

const server = http.createServer((request, response)=> {
if(request.url === '/'){
  response.end('Welcome to our home page');
}
if(request.url === '/about'){
  response.end('About page');
}
response.end(`
  <h1>Oops!</h1>
  <p>I can't find the page you are looking for!</p>
  <a href='/'>Go home</a>
`)
});

server.listen(5050);
