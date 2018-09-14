###########################################################
#
# Dockerfile for tfk-create-user-archive
#
###########################################################

# Setting the base to nodejs 4.4.7
FROM mhart/alpine-node:4.9.1@sha256:c47433a256be0bc5314eb8288ea8fae7466d283d91f1da7ff950f91e43838b33

# Maintainer
MAINTAINER Jonas Enge

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Extra tools for native dependencies
RUN apk add --no-cache make gcc g++ python

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV LOG_SKOLESKYSS_WEB_SERVER_PORT 8000

# Startup
ENTRYPOINT node 
