import userdb from "./config/userDatabase.js";
import router from "./routes/index.js"
import dotenv from "dotenv";
import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import bodyParse from "body-parser";
import cors from "cors";

dotenv.config();

// express 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
// app.use(bodyParser.json());
app.use(cookieParser());
app.use(router);

app.get('/',(req,res) => {
    res.send('Root');
});

/*
//mysql connection
import mysql from "mysql";
import dbconfig from "./config/database"; // 데이터베이스 설정파일 경로
const connection = mysql.createPool(dbconfig);
*/
// 방법 1. Server 단에서 모든 쿼리를 기재하고 수행한다.

// 예시 - 하나의 URL(/test) 당 하나의 쿼리 처리
app.get('/test', (req, res) => {
    connection.query(`SELECT * FROM test` , // select iduser_info from user_info where account_id='${req.body.id}' and account_password='${req.body.pw}'
        (error, rows) => {
            if (error) console.log(error);
            else{
                res.send(rows);
            }
        });
    }
);

// 방법 2. Front 단에서 쿼리를 Server단에 보낸다.

// 예시 - 하나의 URL(/connect_db)로데이터베이스 호출
app.post('/connect_db', (req, res) => {
    req.setTimeout(0) // 시간 제한 없음
    connection.query(req.body.query ,
        (error, rows) => {
            if (error) {console.log(error);}
            else{
                res.send(rows);
            }
        });
});

// user DB 접속 체크
const userauthdb = async function(){
  try {
      await userdb.authenticate();
      console.log('user Database Connected...');

  } catch (error) {
      console.error(error);
  }
}
userauthdb();



// 30020 서버 포트
app.listen(30020, async (err) => {
    if(err) return console.log(err);
    else{
        console.log("Server is listening on port 30020");
    }
});
