# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app



# install and cache app dependencies
COPY package.json /app/package.json
COPY . .
COPY nginx/nginx.config /usr/share/nginx/html

RUN apk add --no-cache curl
RUN curl -L https://www.npmjs.com/install.sh | sh
RUN npm -v
RUN npm install
RUN npm install @vue/cli -g

# start app
CMD ["npm", "run", "serve"]

## expose port 80 to the outer world
#EXPOSE 80
## start nginx
#CMD ["nginx", "-g", "daemon off;"]
