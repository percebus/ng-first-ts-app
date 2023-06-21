FROM node:18 as base

FROM base as project
WORKDIR /project
COPY . .
RUN ls -la
RUN npm run setup:ci --if-present
RUN npm install


FROM project as json-server
EXPOSE 3000
ENTRYPOINT [ "npm" ]
CMD [ "run", "json-server:docker" ]


FROM project as dist
RUN npm run dist
RUN ls ./dist -la

FROM project as http-server
COPY --from=dist /project/dist/ ./dist/
RUN ls -la
EXPOSE 4200
ENTRYPOINT [ "npm" ]
CMD [ "run", "http-server" ]
