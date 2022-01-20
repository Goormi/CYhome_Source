const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');        
const axios = require('axios');
const router = require('./routes');

// express 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(router)

app.get('/',(req,res) => {
    res.send('Root');
});

//mysql connection
const mysql = require('mysql');
const dbconfig = require('../server/config/database'); // 데이터베이스 설정파일 경로
// 시스템 함수 활용 시 "위 코드 주석", "아래 코드 활성화"
// const dbconfig = module.exports = {
//     host : process.env.rds_host, // END POINT
//     user : process.env.rds_user, // USER NAME
//     password : process.env.rds_password, // PASSWORD
//     database : process.env.rds_database, // Database Name
//     port : 3306 // Port
//   };
const connection = mysql.createPool(dbconfig);

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


//API 분양정보 조회
const GetLttotPblancList = async() =>{
    // API 호출
    let nowDate = new Date()
    let nextDate = new Date()
    nextDate.setMonth(nextDate.getMonth()+1)

    let startmonth = nowDate.getFullYear().toString() + ("00"+(nowDate.getMonth() + 1).toString()).slice(-2)
    let endmonth = nextDate.getFullYear().toString() + ("00"+(nextDate.getMonth() + 1).toString()).slice(-2)
    console.log(startmonth)
    let URL = `https://openapi.reb.or.kr/OpenAPI_ToolInstallPackage/service/rest/ApplyhomeInfoSvc/getLttotPblancList?serviceKey=xAgM3EBDlVEz1d%2FZFyQJwuDBmrs%2FRain5Farc%2FXCYhRPx6wJSHwHG2by0pEQ2newDCW5XUEgsxVVDHVlZBB18A%3D%3D&startmonth=${startmonth}&endmonth=${endmonth}`
    await axios.get(URL).then(response=> {
        let array = response.data.response.body?.items?.item
        // DB 저장
        if(array != undefined){
            console.log("API UPDATE")
            for(let i=0; i < array.length; i++){
                let data = array[i]
                connection.query(`INSERT INTO api_apt( houseManageNo, houseDtlSecdNm, houseNm, rceptBgnde, rceptEndde, sido ) VALUES( ${data.houseManageNo}, '${data.houseDtlSecdNm}', '${data.houseNm}', '${data.rceptBgnde}', '${data.rceptEndde}', '${data.sido}' )`,
                (error) => { if (error) if(error.code != 'ER_DUP_ENTRY') console.log(error); }
                );
                GetAPTLttotPblancDetail(data.houseManageNo, data.pblancNo)
                GetAPTLttotPblancMdl(data.houseManageNo, data.pblancNo)
            }
        }
    }).catch(error =>{
        console.log(error)
    });
}

// 아파트 분양정보 상세조회
const GetAPTLttotPblancDetail = async (houseManageNo, pblancNo) => {
    let URL = `https://openapi.reb.or.kr/OpenAPI_ToolInstallPackage/service/rest/ApplyhomeInfoSvc/getAPTLttotPblancDetail?serviceKey=xAgM3EBDlVEz1d%2FZFyQJwuDBmrs%2FRain5Farc%2FXCYhRPx6wJSHwHG2by0pEQ2newDCW5XUEgsxVVDHVlZBB18A%3D%3D&houseManageNo=${houseManageNo}&pblancNo=${pblancNo}`
    await axios.get(URL).then(response=> {
        let data = response.data.response.body?.items?.item
        let query = data.gnrlrnk1etcggrcptdepd == undefined ? `INSERT INTO api_apt_details( houseManageNo, hssplyAdres, spsplyRceptBgnde, spsplyRceptEndde, gnrlRnk1CrspareaRceptPd, gnrlRnk1EtcAreaRcptdePd, gnrlRnk2CrspareaRceptPd, gnrlRnk2EtcAreaRcptdePd ) VALUES( ${houseManageNo}, '${data.hssplyadres}', '${data.spsplyrceptbgnde}', '${data.spsplyrceptendde}', '${data.gnrlrnk1crsparearceptpd}', '${data.gnrlrnk1etcarearcptdepd}', '${data.gnrlrnk2crsparearceptpd}', '${data.gnrlrnk2etcarearcptdepd}' )`
         : `INSERT INTO api_apt_details( houseManageNo, hssplyAdres, spsplyRceptBgnde, spsplyRceptEndde, gnrlRnk1CrspareaRceptPd, gnrlRnk1EtcGGRcptdePd, gnrlRnk1EtcAreaRcptdePd, gnrlRnk2CrspareaRceptPd, gnrlRnk2EtcGGRcptdePd, gnrlRnk2EtcAreaRcptdePd ) VALUES( ${houseManageNo}, '${data.hssplyadres}', '${data.spsplyrceptbgnde}', '${data.spsplyrceptendde}', '${data.gnrlrnk1crsparearceptpd}', '${data.gnrlrnk1etcggrcptdepd}', '${data.gnrlrnk1etcarearcptdepd}', '${data.gnrlrnk2crsparearceptpd}', '${data.gnrlrnk2etcggrcptdepd}', '${data.gnrlrnk2etcarearcptdepd}' )`
        // DB 저장
        connection.query(query, (error) => { if (error) if(error.code != 'ER_DUP_ENTRY') console.log(error); });    
    }).catch(error =>{
        console.log(error)
    });
}

// 아파트 분양정보 주택형별 상세조회
const GetAPTLttotPblancMdl = async (houseManageNo, pblancNo) => {
    let URL = `https://openapi.reb.or.kr/OpenAPI_ToolInstallPackage/service/rest/ApplyhomeInfoSvc/getAPTLttotPblancMdl?serviceKey=xAgM3EBDlVEz1d%2FZFyQJwuDBmrs%2FRain5Farc%2FXCYhRPx6wJSHwHG2by0pEQ2newDCW5XUEgsxVVDHVlZBB18A%3D%3D&houseManageNo=${houseManageNo}&pblancNo=${pblancNo}`
    await axios.get(URL).then(response=> {
        let data = response.data.response.body?.items?.item
        dataLength = data.length
        housety = ""
        if (dataLength == undefined){
            housety = data.housety
        }else{
            for(let i=0; i < dataLength; i++){
                housety += data[i].housety
                if(i != dataLength - 1){
                    housety += ", "
                }
            }
        }
        
        // DB 저장
        connection.query(`INSERT INTO api_apt_type_details( houseManageNo, houseTy ) VALUES( ${houseManageNo}, '${housety}' )`, (error) => { if (error) if(error.code != 'ER_DUP_ENTRY') console.log(error.code); });    
    }).catch(error =>{
        console.log(error)
    });
}

// API 호출 + DB 저장
GetLttotPblancList()
// API 관련 함수 주기( 하루 )마다 반복 수행
setInterval( GetLttotPblancList, 86400000 );


// 30020 서버 포트
app.listen(30020, async (err) => {
    if(err) return console.log(err);
    else{
        console.log("Server is listening on port 30020");        
    }
});

