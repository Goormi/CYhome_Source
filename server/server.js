const userdb = require('../server/config/userDatabase.js');
const Users = require('../server/models/userModel.js');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const cors = require('cors');

var express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    static = require('serve-static'),
    cookieParser = require('cookie-parser'),
    expressSession = require('express-session');
var app = express();
var router = express.Router();

dotenv.config();

app.use(expressSession({
    secret: 'my key',
    resave: true,
    saveUninitialized: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);
app.use('/public', static(path.join(__dirname, 'public')));

app.get('/',(req,res) => {
    if (req && req.session && req.session.user) {
      console.log('/process/product 호출됨 // session : ' + req.session.user.email);
      res.redirect('/public/main.home.html');
    } else {
      console.log('/process/product 호출됨 // session : ' + req.session.user);
      res.redirect('/public/sign.in.html');
    }
});



router.route('/process/login').post(async (req, res) => {
    try{
      const user = await Users.findAll({
          where:{
              email: req.body.email
          }
      });
      console.log("id : " + user[0].id + "email : " + user[0].email);
      const match =  bcrypt.compare(req.body.password, user[0].password);
      if(!match) return res.status(400).json({msg: "Wrong Password"});
      const userId = user[0].id;
      console.log(userId);
      const email = user[0].email;
      // session 생성
      if (req && req.session && req.session.user){ console.log("Already logined");}
      else{
        req.session.user = { email : req.body.email }
      }
      res.redirect('/');
    } catch (error) {
        res.status(404).json({msg:"Email not found // error :  " + error});
    }

    router.route('/process/logout').get(function(req, res){
        console.log('/process/logout 호출됨');

        if(req && req.session && req.session.user){
            console.log('로그아웃');
            req.session.destroy(function(err){
                if(err) throw err;
                console.log('세션 삭제하고 로그아웃됨');
                res.redirect('/public/sign.in.html');
            });
        }
        else{
            console.log('로그인 상태 아님');
            res.redirect('/public/sign.in.html');
        }
    });
});
router.route('/process/register').post(async (req, res) => {
  const { email, password, confPassword } = req.body;
  console.log(req.body)
  if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password is different"});
  try {
    const user = await Users.findAll({
        where:{
            email: req.body.email
        }
    });
    if(user.length === 0){
      const salt =  await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(password, salt);
      await Users.create({
          email: email,
          password: hashPassword
      });
      res.json({msg: "Register Success"});
    }else {console.log("Already exist email");}
  } catch (error) {
        console.log(error);
  }
})
// user DB 접속 체크
const userauthdb = async function(){
  try {
       userdb.authenticate();
      console.log('user Database Connected...');

  } catch (error) {
      console.error(error);
  }
}
userauthdb();

//mysql connection
const mysql = require('mysql');
const dbconfig = require('../server/config/database'); // 데이터베이스 설정파일 경로
const connection = mysql.createPool(dbconfig);

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
app.get('/session_user', (req, res) => {
  if(req && req.session && req.session.user){
      console.log(req.session.user);
      res.send(req.session.user);
  }
  else{
      console.log('로그인 상태 아님');
  }
});

// 30020 서버 포트
app.listen(30020, async (err) => {
    if(err) return console.log(err);
    else{
        console.log("Server is listening on port 30020");
    }
});
