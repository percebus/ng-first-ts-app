FROM node:18 as base

FROM base as project
WORKDIR /tmp/project
COPY . .
RUN ls -la
RUN npm run setup:ci --if-present
RUN npm install


FROM project as json-server
WORKDIR /var/mock-api
COPY . .
EXPOSE 3000
ENTRYPOINT [ "npm" ]
CMD [ "run", "json-server:docker" ]


FROM project as dist
RUN npm run dist
RUN ls ./dist -la

FROM project as http-server
WORKDIR /usr/app
COPY . .
COPY --from=dist /tmp/project/dist ./dist
RUN ls -la
EXPOSE 4200
ENTRYPOINT [ "npm" ]
CMD [ "run", "http-server" ]
