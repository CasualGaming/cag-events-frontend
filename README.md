# betty-boop

## Requirements
Download the lates versions of the following software
* [Git](https://git-scm.com)
* [Docker](https://docker.com)
* [Node.js](https://nodejs.org/en)

## Development

### Docker
```bash
$ docker build -t betty-boop .
$ docker run -it -p 3000:3000 -v $(pwd)/src:/app/src betty-boop
```

### NPM
```bash
$ npm install
$ npm start
```

### Testing
```bash
$ npm test
```

## Production

```bash
$ docker build -t betty-boop . --build-arg prod=true
$ docker run -p 3000:3000 betty-boop
```
