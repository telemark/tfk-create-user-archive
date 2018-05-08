###########################################################
#
# Dockerfile for tfk-create-user-archive
#
###########################################################

# Setting the base to nodejs 4.4.7
FROM mhart/alpine-node:4.9.1@sha256:052772af605978749631e2b6d190c7d68dc607a480a6e4dbe84eaf7264759d2e

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
