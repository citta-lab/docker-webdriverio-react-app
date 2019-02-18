# Stage 1 - the build process
FROM node:8.10.0
ADD . /app
WORKDIR /app
RUN yarn
CMD ["yarn", "start"]
