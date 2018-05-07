###########################################################
#
# Dockerfile for tfk-create-user-archive
#
###########################################################

# Setting the base to nodejs 4.4.7
FROM mhart/alpine-node:4.4.7@sha256:a075764c7d1f45d3efeace02d106b5e9cec4409fb489f99b8c69a429d37e4666

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
