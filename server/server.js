var express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser'),
    static = require('serve-static'),
    cookieParser = require('cookie-parser'),
    expressSession = require('express-session');
var app = express();
app.use(cookieParser());
app.use(expressSession({
    secret: 'my key',
    resave: true,
    saveUninitialized: true
}));
var router = express.Router();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use('/public', static(path.join(__dirname, 'public')));

// express 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(cors());


app.get('/',(req,res) => {
    console.log('/process/product 호출됨');
    if (req.session.user) {
        res.redirect('/public/product.html');
    } else {
        res.redirect('/public/sign.in.html');
    }
});

//mysql connection
const mysql = require('mysql');
const dbconfig = require('../server/config/database'); // 데이터베이스 설정파일 경로
const { route } = require('express/lib/application');
const { Router } = require('express');
const res = require('express/lib/response');
const req = require('express/lib/request');
const connection = mysql.createPool(dbconfig);

// 방법 1. Server 단에서 모든 쿼리를 기재하고 수행한다.

/*/ 예시 - 하나의 URL(/test) 당 하나의 쿼리 처리
app.get('/test', (req, res) => {
    connection.query(`SELECT * FROM test` , // select iduser_info from user_info where account_id='${req.body.id}' and account_password='${req.body.pw}'
        (error, rows) => {
            if (error) console.log(error);
            else{
                res.send(rows);
            }
        });
    }
);*/

// 방법 2. Front 단에서 쿼리를 Server단에 보낸다.

/*/ 예시 - 하나의 URL(/connect_db)로데이터베이스 호출
app.post('/connect_db', (req, res) => {
    req.setTimeout(0) // 시간 제한 없음
    connection.query(req.body.query ,
        (error, rows) => {
            if (error) {console.log(error);}
            else{
                res.send(rows);
            }
        });
    });*/
router.route('/process/product').get(function (req, res) {
        console.log('/process/product 호출됨');
        if (req.session.user) {
            res.redirect('public/product.html');
        } else {
            res.redirect('public/sign.in.html');
        }
})
router.route('/process/login').post(function (req, res) {
        const userData = { id : 'test', password : '123'}
        console.log('/process/login 호출됨');
        var paramId = req.body.id || req.query.id;
        var paramPw = req.body.password || req.query.password;
        if(userData.id == paramId){
            if(userData.password == paramPw){
                console.log('로그인 성공');
                res.writeHead('200', {
                    'Content-Type': 'text/html;charset=utf8'
                });
                res.write('<h1>로그인 성공</h1>');
                res.write('<div><p>Param ID: ' + paramId + '</p></div>');
                res.write('<div><p>Param PW: ' + paramPw + '</p></div>');
                res.write("<br><a href='/public/product.html'>로그인 페이지로 이동</a>");
                res.end();
            }
            else{
                console.log('비밀번호 틀림');
                res.writeHead('200', {
                    'Content-Type': 'text/html;charset=utf8'
                });
                res.write('<h1>비밀번호가 틀렸습니다.</h1>');
                
            }
        }else{
            console.log('아이디 틀림');
                res.writeHead('200', {
                    'Content-Type': 'text/html;charset=utf8'
                });
                res.write('<h1>아이디가 틀렸습니다.</h1>');
        }
        router.route('/process/logout').get(function(req, res){
            console.log('/process/logout 호출됨');
            
            if(req.session.user){
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
       /* if (req.session.user) {
            console.log('이미 로그인되어 상품페이지로 이동');
            res.redirect('/public/product.html');
        } else {
            req.session.user = {
                id: paramId,
                name: 'zini',
                authorized: true
            };
            res.writeHead('200', {
                'Content-Type': 'text/html;charset=utf8'
            });
            res.write('<h1>로그인 성공</h1>');
            res.write('<div><p>Param ID: ' + paramId + '</p></div>');
            res.write('<div><p>Param PW: ' + paramPw + '</p></div>');
            res.write("<br><a href='/process/product'>상품 페이지로 이동</a>");
            res.end();
        }*/
    });

// 30020 서버 포트
app.use('/', router);
http.createServer(app).listen(30020, function () {
    console.log('Express 서버가 30020번 포트에서 시작');
})
/*app.listen(30020, async (err) => {
    if(err) return console.log(err);
    else{
        console.log("Server is listening on port 30020");
    }
});
*/