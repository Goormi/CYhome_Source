FROM node:latest
# 작업 폴더를 만들고 npm 설치
RUN mkdir /app
COPY ./server/package.json /app/package.json
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV rds_host $rds_host
ENV rds_user $rds_user
ENV rds_password $rds_password
ENV rds_database $rds_database
RUN npm install -g npm@8.3.2
RUN npm install --silent
RUN npm install react-scripts@2.1.3 -g --silent
# 소스를 작업폴더로 복사하고 앱 실행
EXPOSE 30020
COPY . /app
CMD ["node", "server/server.js"]
