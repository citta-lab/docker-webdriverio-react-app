This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Create React App
### Creating new App
```
create-react-app docker-webdriverio-react-app
```
so we would make use of default scripts
```
npm start
npm test
npm build
```
`npm start` will start the project in `localhost:3000`



## Dockerize React App
### Adding Dockerfile
```
# Stage 1 - the build process
## copying new node image as base and calling it as build-deps for later use
FROM node:8.10.0 as build-deps
## creating directory structure inside docker container
WORKDIR /usr/src/app
## copying these files inside app
COPY package.json yarn.lock ./
## running yarn to install
RUN yarn
## copying everything from local disk to app folder
COPY . ./
## building the image
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```
Refer [this](https://medium.com/@shakyShane/lets-talk-about-docker-artifacts-27454560384f) document for more details

### Import Docker Steps
1. Build an Image in Docker
```
docker build . -t mahesh/docker-app
```
2. Check Images
```
docker images
```
3. Run built image
```
docker run -p 8080:80 mahesh/docker-app
```
docker port 80 will be mapped to 8080 in localhost
