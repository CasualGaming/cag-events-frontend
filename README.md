[![Release](https://img.shields.io/github/release/CasualGaming/cag-events-frontend.svg)](https://github.com/CasualGaming/cag-events-frontend/releases)
[![Travis CI](https://travis-ci.com/CasualGaming/cag-events-frontend.svg?branch=master)](https://travis-ci.com/CasualGaming/cag-events-frontend)
[![SonarCloud](https://sonarcloud.io/api/project_badges/measure?branch=master&project=CasualGaming_cag-events-frontend&metric=alert_status)](https://sonarcloud.io/dashboard?id=CasualGaming_cag-events-frontend)
[![Snyk](https://snyk.io/test/github/CasualGaming/cag-events-frontend/badge.svg)](https://snyk.io/test/github/CasualGaming/cag-events-frontend)

# CaG Events Front-End
Front-end for [CaG Events](https://github.com/CasualGaming/cag-events).

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

## License
This project is licensed under GPLv3, see LICENSE for the full license text.
