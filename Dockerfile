FROM node:latest

MAINTAINER Vestein Dahl

ARG prod

ENV NPM_CONFIG_LEVEL warn
ENV PROD $prod

RUN mkdir /app
WORKDIR /app
COPY . .

RUN npm install
RUN npm rebuild node-sass

#TODO: prod build
CMD if [ ${PROD} = true ]; \
	then \
	npm run build; \
	else \
	npm run start; \
	fi

EXPOSE 3000