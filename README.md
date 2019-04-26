# CaG Events Front-End

## Requirements

Download the lates versions of the following software

- [Git](https://git-scm.com)
- [Docker](https://docker.com)
- [Node.js](https://nodejs.org/en)

## Development

### Docker

```bash
$ docker build -t cag-event-frontend .
$ docker run -it -p 3000:3000 -v $(pwd)/src:/app/src cag-event-frontend
```

### NPM

```bash
$ npm install
$ npm start
```

### Testing

```bash
$ npm test --watchAll
```

## Production

```bash
$ docker build -t cag-event-frontend . --build-arg prod=true
$ docker run -p 3000:3000 cag-event-frontend
```
