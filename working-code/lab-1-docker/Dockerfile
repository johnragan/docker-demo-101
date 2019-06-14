# Create this image from an existing Docker image
FROM mhart/alpine-node:4.9.1

# Build this new image with layers on top of the image used above
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 3000
CMD npm start

# In the future, this image may be used to build other layers on top of
