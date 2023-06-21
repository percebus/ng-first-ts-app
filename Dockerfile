FROM node:18 as base

FROM base as project
WORKDIR /project
COPY . .
RUN ls -la
RUN npm run setup:ci --if-present
RUN npm install

FROM project as mock-api
EXPOSE 3000
ENTRYPOINT [ "npm" ]
CMD [ "run", "json-server:db" ]

FROM project as dist
RUN npm run dist
RUN ls ./dist -la

FROM project as release
WORKDIR /app
COPY . .
COPY --from=dist /project/dist ./dist
RUN ls -la
EXPOSE 4200
ENTRYPOINT [ "npm" ]
CMD [ "run", "start" ]
