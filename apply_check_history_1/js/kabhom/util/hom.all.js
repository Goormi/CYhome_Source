/**
*	========================================================= hom.common.js START =========================================================
*/
/*
 * Function Name	: gfn_dateCheck
 * Description		: 유효한 날짜인지 검증 
 * Parameter		: 날짜
 * Character Return : boolean
 */
function gfn_dateCheck(day) {

	if (day.length != 8) {
		return false;
	}
	var yyyy = day.substring(0, 4);
	var mm = day.substring(4, 6);
	var dd = day.substring(6, 8);

	var m = parseInt(mm, 10) - 1;
	var d = parseInt(dd, 10);

	var end = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	if ((yyyy % 4 == 0 && yyyy % 100 != 0) || yyyy % 400 == 0) {
		end[1] = 29;
	}

	return (d >= 1 && d <= end[m]);
}

/*
 * Function Name : gfn_checkJumin Description : 주민번호 유효성 검증 Parameter :
 * Character Return : boolean
 */
function gfn_checkJumin(juminNumber) {
	var IDAdd = "234567892345"; // 주민등록번호에 가산할 값

	var count_num = 0;
	var add_num = 0;
	var total_id = 0; // 검증을 위한 변수선언

	if (juminNumber.length != 13) {
		return false; // 주민등록번호 자리수가 맞는가를 확인
	}

	for (var i = 0; i < 12; i++) {
		if (Number(juminNumber.charAt(i)) < 0
				|| Number(juminNumber.charAt(i)) > 9) {
			return false; // 숫자가 아닌 값이 들어왔는지를 확인
		}

		count_num = Number(juminNumber.charAt(i));
		add_num = Number(IDAdd.charAt(i));
		total_id += count_num * add_num; // 유효자리 검증식을 적용
	}

	// 주민번호 앞자리 날짜유효성체크 & 성별구분 숫자 체크
	if (Number(juminNumber.charAt(6)) < 1 || Number(juminNumber.charAt(6)) > 4) {
		return false;
	}
	
	var tempYY = "19";
	if(Number(juminNumber.charAt(6)) > 2) {
		tempYY = "20";
	}
	
	if (!this.gfn_checkDate8(tempYY + juminNumber.substring(0, 6))) {
		return false;
	}

	//마지막 유효숫자와 검증식을 통한 값의 비교
	if (Number(juminNumber.charAt(12)) == parseInt((11 - (total_id % 11)) % 10)) {
		return true;
	} else {
		return false;
	}
}

/**
 * 외국인 등록번호 확인
 * 
 * @param foreignNumber
 * @returns
*/ 
function gfn_checkForeignJumin(foreignNumber) {
	var check = 0;

	if (foreignNumber.length != 13) { // 외국인등록번호의 길이가 맞는지 확인한다.
		return false;
	}

	for (var i = 0; i < 13; i++) {
		if (Number(foreignNumber.charAt(i)) < 0
				|| Number(foreignNumber.charAt(i)) > 9) { // 숫자가 아닌 값이 들어왔는지를
															// 확인한다.
			return false;
		}
	}

	if (Number(foreignNumber.charAt(0)) == 0
			|| Number(foreignNumber.charAt(0)) == 1) {

		if (Number(foreignNumber.charAt(6)) == 5
				|| Number(foreignNumber.charAt(6)) == 6) {
			return false;
		}
		var temp = "20" + foreignNumber.substring(0, 6);

		if (!this.gfn_checkDate8(temp)) {
			return false;
		}

	} else {
		if (Number(foreignNumber.charAt(6)) == 7
				|| Number(foreignNumber.charAt(6)) == 8) {
			return false;
		}
		var temp = "19" + foreignNumber.substring(0, 6);
		if (!this.gfn_checkDate8(temp)) {
			return false;
		}
	} // 외국인등록번호 앞자리 날짜유효성체크 & 성별구분 숫자 체크

	for (var i = 0; i < 12; i++) {
		check += parseInt((9 - i % 8) * Number(foreignNumber.charAt(i)));
	}

	if (check % 11 == 0) {
		check = 1;
	} else if (check % 11 == 10) {
		check = 0;
	} else {
		check = check % 11;
	}

	if (check + 2 > 9) {
		check = check + 2 - 10;
	} else {
		check = check + 2; // 검증식을 통합 값의 도출
	}

	if (check == Number(foreignNumber.charAt(12))) { // 마지막 유효숫자와 검증식을 통한 값의
														// 비교
		return true;
	} else {
		return false;
	}

}


/********************************************************************************
 * Function Name	: gfnCheckDate8
 * Description		: 입력값이 날짜 형태 인지 체크하는 함수
 * Arguments		: strValue(String)
 * Return 			: true = 입력값이 8자리 날짜(yyyyMMdd) 형태일 경우
 ********************************************************************************/
function gfn_checkDate8(strValue) {
	if (this.gfn_length(strValue) != 8) 
	{
		return false;
	}
	else if (!this.gfn_dateCheck(strValue)) 
	{
		return false;
	}
	return true;
}

/********************************************************************************
 * Function Name	: onlyNumber
 * Description		: 숫자만 입력가능(숫자 이외 모두 삭제)한 이벤트를 대상에 적용 
 ********************************************************************************/

// 숫자만 입력
function onlyNumber(obj) {
    $(obj).keyup(function(){
         $(this).val($(this).val().replace(/[^0-9]/g,""));
    }); 
}

//String.prototype.format = function() {
//	var str = this;
//	for (var i = 0; i < arguments.length; i++) {
//		var reg = new RegExp("\\{" + i + "\\}", "gm");
//		str = str.replace(reg, arguments[i]);
//	}
//
//	return str;
//}

/*******************************************************************************
 * Function Name: gfn_toString
 * Description  : 입력값을 String으로 변경한다.
 * Arguments    : val
 * Return       : String
 *******************************************************************************/
function gfn_toString(val) {
	if (this.gfn_isNull(val)) 
	{
		return new String();
	}
	return new String(val);
}

/*******************************************************************************
 * Function Name: gfn_isNull
 * Description  : 입력값이 null에 해당하는 경우 모두를 한번에 체크한다.
 * Arguments    : val : 체크할 문자열( 예 : null 또는 undefined 또는 "" 또는 "abc" )
 * Return       : Boolean,  Val이 undefined, null, NaN, "", Array.length = 0인 경우 = true
 이외의 경우 = false
 ******************************************************************************/
function gfn_isNull(val) {
	if (new String(val).valueOf() == "undefined") 
	{
		return true;
	}
	if (val == null) 
	{
		return true;
	}
	if (("x" + val == "xNaN") && (new String(val.length).valueOf() == "undefined")) 
	{
		return true;
	}
	if (val.length == 0) 
	{
		return true;
	}

	return false;
}

/*******************************************************************************
 * Function Name	: gfn_Length
 * Description		: 입력값 형태에 따라서 길이 또는 범위를 구하는 함수
 * Parameter		: 객체, 문자열, 배열
 * Return 			: Type에 따라 구해진 길이 또는 범위
 *******************************************************************************/
function gfn_length(val) {
	return this.gfn_toString(val).length;
}

function getCode(groupCode) {
	var self = this;
	var codeList = {};
	//관심분양정보 설정 리스트
	$.ajax({
		url	 : '/common/getCode.do',
		type : 'GET',
		data : {'groupCode' : groupCode},
		contentType : "application/x-www-form-urlencoded; charset=UTF-8",
		dataType : 'json',
		async : false
	}).done( function ( response ){
		codeList = response.result.result;
				
	}).fail( function( XMLHttpRequest, textStatus, errorThrown ) {
		
		alert( '서버와의 통신이 원활하지 않습니다. \n다시 시도 해 주십시오.' );
		
	});
	
	return codeList;
}

function emailCheck(val) {
	var email_check = /([a-zA-Z0-9_\.-]+)@([/da-zA-Z0-9\.-]+)\.([a-zA-Z\.]{2,6})/;
	return email_check.test(val);
}

/**
 * arg
 * @param fileName
 * @param agrs
 * @returns
 */
function report ( fileName, args ) {
	var params = {
		fileName : fileName
		,params : args
	};
	windowOpen('/common/report.do', params, 'report');
}

/**
 * 첨부파일 선택시 파일 확장자에 대해 업로드가 허용된 값인지 확인하는 함수
 * @param inputFile ( 객체 )
 * @returns true/flase
 */
function checkFile ( inputFile ) {

	var allowTypes = ["jpg","jpeg","gif","png","bmp","txt","zip","7z","gzip","doc","docx","ppt","pptx","xls","xlsx","pdf","hwp","JPG","JPEG","GIF","PNG","BMP","TXT","ZIP","7Z","GZIP","DOC","DOCX","PPT","PPTX","XLS","XLSX","PDF","HWP"];
	
	var file = $( inputFile ).val();
	var ext = file.substring( file.lastIndexOf('.') + 1 , file.length );
	var success = false;
	for ( var i in allowTypes ) {
		if ( ext == allowTypes[i] ) {
			success = true;
		}
	}
	if ( !success ) {
		$( inputFile ).val( '' );
		if ( ext != '' ) alert( "불가능한 파일형식입니다." );
		return false;
	}
	return true;
}

/**
 * 설명		: pId 에 해당하는 용어설명 팝업 
 * 사용방식	: gfn_PopupWordDc(pId, pTit)
 * 주의		: 용어설명에 존재하는 id만 가능
 * 리턴		: 
 */
function gfn_popupWordDc( pId, pTit ) {
	if(!gfn_isNull(pId)) {
		$("body").append("<div id='popWordDc' style='display:none;'/>");
		$("#popWordDc").load("/html/kabhom/ar/"+pId+".html",
				function(responseTxt, statusTxt, xhr){
					if(statusTxt == "success") {
						var pop_height = $("#"+pId).data("height");
						var pop_width_class = 'pop_w_' + $("#"+pId).data('width');
						
						//load 성공하면 pop
						var oPopupOptions = new Object();
						oPopupOptions.title = "용어설명 : " + pTit;
						oPopupOptions.divId = 'popWordDc';
					 	oPopupOptions.height = pop_height;
						oPopupOptions.resizable = false;
						oPopupOptions.clazz = pop_width_class;
						oPopupOptions.onClose = function() {
							$("#popWordDc").remove();
						}
	
						$pop.dialog(oPopupOptions);

					} else {
						$("#popWordDc").remove();
					}
				}
		);
	}
}
/**
 * 설명		: pId 에 해당하는 팝업 호출 
 * 사용방식	: gfn_popupHtmlDiv(pId, pTit)
 * 주의		: pId에 해당하는 팝업 DIV가 이미 body에 포함되어 있거나 지정된 곳에 html로 존재해야함 
 * 리턴		: 
 */
function gfn_popupHtmlDiv(pId, pTit) {
	if($("#popDiv"+pId).length > 0 && $("#"+pId).length > 0) {
		gfn_popupDiv(pId, pTit);
	} else {
		$("body").append("<div id='popDiv"+pId+"' style='display:none;'/>");
		$("#popDiv"+pId).load("/html/kabhom/co/"+pId+".html"
				,function(responseTxt, statusTxt, xhr){
					if(statusTxt == "success") {
						gfn_popupDiv(pId, pTit);
					}
				}
		);
	}
}
/**
 * 설명		: pId 에 해당하는 팝업 호출 
 * 사용방식	: gfn_popupDiv(pId, pTit)
 * 주의		: pId에 해당하는 DIV가 이미 존재해야 함. 
 * 			  해당 ID의 엘리먼트에 data-height, data-width 값으로 팝업 사이즈 설정  
 * 리턴		: 
 */
function gfn_popupDiv(pId, pTit) {
	if(!gfn_isNull(pId)) {
		$pDiv = $("#"+pId);
		var popHeight = $pDiv.data("height");
		var popWidthClass = 'pop_w_' + $pDiv.data('width');
		if(gfn_isNull(pTit)) {
			pTit = $pDiv.data("tit");
		}
		
		var oPopupOptions = new Object();
		oPopupOptions.title = pTit;
		oPopupOptions.divId = 'popDiv'+pId;
	 	oPopupOptions.height = popHeight;
		oPopupOptions.resizable = false;
		oPopupOptions.clazz = popWidthClass;

		$pop.dialog(oPopupOptions);
	}
}

function gfn_popupDivCloseCallback(pId, pTit) {
    if(!gfn_isNull(pId)) {
        $pDiv = $("#"+pId);
        var popHeight = $pDiv.data("height");
        var popWidthClass = 'pop_w_' + $pDiv.data('width');
        if(gfn_isNull(pTit)) {
            pTit = $pDiv.data("tit");
        }
        
        var oPopupOptions = new Object();
        oPopupOptions.title = pTit;
        oPopupOptions.divId = 'popDiv'+pId;
        oPopupOptions.height = popHeight;
        oPopupOptions.resizable = false;
        oPopupOptions.clazz = popWidthClass;
        oPopupOptions.fnCloseCallback = function () {
            fn_CloseCallback();
        };

        $pop.dialog(oPopupOptions);
    }
}

/**
 * 설명		: msgPopup 호출 (간단한 alert, info 를 alert 대신 사용) 
 * 사용방식	: gfn_popupHtmlMsg(pObj)
 * 			  objMsg.title = "타이틀"
 * 			  objMsg.msg = "메시지"  (필수)
 * 			  objMsg.msgDetail = "메시지 상세" (default : "")
 * 			  objMsg.msgBtnHome = true/false "홈으로" 버튼여부 (default : false)
 * 			  objMsg.msgIcon = W(Warning 노란색 느낌표) / E(Error 빨간색 엑스) (default : "W")
 * 			  objMsg.msgFoot = "푸터메시지" (default : "")
 * 주의		:  
 * 리턴		: 
 */
function gfn_popupHtmlMsg(opt) {
	if($("#pop_info").length > 0) {
		gfn_popupHtmlMsgSet(opt);
	} else {
		$("body").append("<div id='pop_info' class='type_apply' tabindex='0' style='display:none;'/>");
		$("#pop_info").load("/html/kabhom/co/popMsgAlert.html"
				,function(responseTxt, statusTxt, xhr){
					if(statusTxt == "success") {
						gfn_popupHtmlMsgSet(opt);
					}
				}
		);
	}
}

function gfn_popupBlockedAlertMsg() {
	$("body").append("<div id='pop_info' class='type_apply' tabindex='0' style='display:none;'/>");
	$("#pop_info").load("/html/kabhom/co/popMsgBlockedAlert.html",function(responseTxt, statusTxt, xhr){
		if(statusTxt == "success") {
			var $popObj = $("#pop_info");
			$popObj.show();
		}
	});
}

function gfn_popupHtmlMsgErr(opt) {
	opt.msgIcon = "E";
	gfn_popupHtmlMsg(opt);
}

function gfn_popupHtmlMsgSet(options) {
	var defaultOptions = {
		title : "알려드립니다.",
		msg : "",
		msgDetail : "",
		msgBtnHome : false,
		msgIcon : "W",
		msgFoot : ""				
	};
	
	var opts = $.extend({}, defaultOptions, options);
	
	var $popObj = $("#pop_info");
	$popObj.find("#popMsgTitle").text(opts.title);
	var popMsg = $popObj.find("#popMsg").text(opts.msg);	
	$popObj.find("#popMsgDetail").text(opts.msgDetail);
	$popObj.find("#popMsgFoot").text(opts.msgFoot);
	
	if(gfn_isNull(opts.msgDetail)) {	
		$popObj.find(".pop_txt").hide();
	} else {
		$popObj.find(".pop_txt").show();
	}
	
	if(opts.msgBtnHome === true) {
		$popObj.find("#popMsgBtnHome").show();
	} else {
		$popObj.find("#popMsgBtnHome").hide();
	}
	
	if(opts.msgIcon == "E") {
		// error X(red)
		$popObj.find("#popMsgIcon").attr("src", "/images/kabhom/sub/ic_no.png");
	} else {
		// warning !(yellow)
		$popObj.find("#popMsgIcon").attr("src", "/images/kabhom/main/ic_error.png");
	}
	
	if(gfn_isNull(opts.msgFoot)) {
		$popObj.find(".pop_foot").hide();
	} else {
		$popObj.find(".pop_foot").show();
	}
	
	$popObj.show();
	$popObj.find(".btn_close").focus();
}

function gfn_popClose(popId) {
	if(gfn_isNull(popId) == false) {
		if($("#"+popId).length) {
			$("#"+popId).fadeOut();
		}
	}
}

function gfn_popMsgSimple(vmsg) {
	var popOpt = new Object();
	popOpt.msgDetail = vmsg;
	gfn_popupHtmlMsg(popOpt);
}

$(function () {
	$('.logout').on('click', function () {
		logout();
	});
	
	$('.close').on('click', function () {
		window.close();
	});
});

/**
 * 설명		: 공통 프로그레스바를 화면에 출력하는 함수
 * 사용방식	: gfn_showCmmnProgressBar()
 */
function gfn_showCmmnProgressBar()
{
	var commonProgressBar = (window.name == "iframeDialog") ? parent.document.getElementById("commonProgressBar") : document.getElementById("commonProgressBar");
	$(commonProgressBar).show();
}

/**
 * 설명		: 공통 프로그레스바를 화면에서 삭제하는 함수
 * 사용방식	: gfn_hideCmmnProgressBar()
 */
function gfn_hideCmmnProgressBar()
{
	var commonProgressBar = (window.name == "iframeDialog") ? parent.document.getElementById("commonProgressBar") : document.getElementById("commonProgressBar");
	$(commonProgressBar).hide();
}

/**
 * 설명		: 인쇄를 위한 팝업페이지 호출 
 * 사용방식	: gfn_openPrintPopup()
 * 주의		: 새 창으로 띄울 인쇄 영역을 바닥화면에서 <div id="printArea"></div> 태그로 감싸주여야 합니다.
 */
function gfn_openPrintPopup()
{
	var winPrint = window.open("/co/coz/selectPrintPopupView.do", "printWindow", "width=800,height=900");
	winPrint.focus();
}

/**
 * 설명		: 전화번호를 formatter
 * 사용방식	: gfn_phoneFormatter()
 */
function gfn_phoneFormatter(num)
{
	var formatNum = '';
	
	// 12자리 숫자
	num = num.toString().trim().replace(/\D/g, "");		
	if (gfn_isNull(num)) {
		return formatNum;
	}
	
	if (num.length == 11) {
		formatNum += num.substr(0, 3);
		formatNum += '-';
		formatNum += num.substr(3, 4);
		formatNum += '-';
		formatNum += num.substr(7, 4);
	} else if (num.length == 8) {
		formatNum += num.substr(0, 4);
		formatNum += '-';
		formatNum += num.substr(4, 4);
	} else {
		if (num.indexOf('02') == 0) {
			if(num.length < 10) {
				formatNum += num.substr(0, 2);
				formatNum += '-';
				formatNum += num.substr(2, 3);
				formatNum += '-';
				formatNum += num.substr(5, 4);
			} else {
				formatNum += num.substr(0, 2);
				formatNum += '-';
				formatNum += num.substr(2, 4);
				formatNum += '-';
				formatNum += num.substr(6, 4);
			}
		} else {
			formatNum += num.substr(0, 3);
			formatNum += '-';
			formatNum += num.substr(3, 3);
			formatNum += '-';
			formatNum += num.substr(6, 4);
		}
	}
	
	return formatNum;
}

/**
 * 설명		: 모바일 기기 접속 여부 판단 
 * 사용방식	: gfn_isMobile()
 * 주의		: 
 * 리턴		: boolean
 */
function gfn_isMobile()
{
	var isMobile = /(iphone|ipad|ipod|android|blackberry|windows ce|windows phone|palm|symbian)/i.test(navigator.userAgent.toLowerCase());
	var isIpadOnSafari = false;//navigator.userAgent.toLowerCase().indexOf("macintosh") > 0 && navigator.maxTouchPoints && navigator.maxTouchPoints > 1;
	return isMobile || isIpadOnSafari;
}

/**
 * 설명		: 모바일 앱 접속 여부 판단 
 * 사용방식	: gfn_isMobileApp()
 * 주의		: 
 * 리턴		: boolean
 */
function gfn_isMobileApp()
{	
	return window.Android != null || navigator.userAgent.toLowerCase().indexOf("applyhome_ios") > 0 ;
}

/**
 * 설명		: navigator.userAgent 설정 가져오기 
 * 사용방식	: navigator.userAgent()
 * 주의		: 
 * 리턴		: boolean
 */
function gfn_userAgent()
{	
	var userAgent = navigator.userAgent;
	if(window.Android != null) {
		userAgent += ' applyhome_android';
	}
	return userAgent; 
}

/**
 * 설명		: 양식 다운로드 
 * 사용방식	: gfn_formDownload()
 * 주의		: web 소스로 업로드 된 양식문서만 가능
 * 리턴		: boolean
 */
function gfn_formDownload(pFormPath)
{
	location.href = pFormPath;
}

/**
 * 설명		: 쿠키 설정하기 
 * 사용방식	: gfn_setCookie(strName, strValue, intExpireDay)
 * 주의		: strName=strValue; path=/; expires=만료일자의 형식으로 쿠키 설정
 * 리턴		: 
 */
function gfn_setCookie(strName, strValue, intExpireDay)
{
	var today = new Date();
	today.setDate(today.getDate() + intExpireDay);
	document.cookie = strName + "=" + escape(strValue) + "; path=/; expires=" + today.toGMTString() + ";";
}

/**
 * 설명		: 쿠키 값 가져오기
 * 사용방식	: gfn_getCookie(strName)
 * 주의		: 
 * 리턴		: 해당 쿠키값이 존재하면 쿠키값을, 존재하지 않으면 ""값을 return
 */
function gfn_getCookie(strName)
{
	var cookies = document.cookie;
	var strCookieName = strName + "=";
	var strCookieValue = "";
	
	if(cookies.length > 0)
	{
		if(cookies.indexOf(strCookieName) > -1)
		{
			strCookieValue = cookies.substring(cookies.indexOf(strCookieName) + strCookieName.length, cookies.length);
			var endIndex = strCookieValue.indexOf(";") > -1 ? strCookieValue.indexOf(";") : strCookieValue.length;
			strCookieValue = strCookieValue.substring(0, endIndex);
		}
	}
	
	return strCookieValue;
	
}

/**
 * 설명		: 서비스 이용 시간 안내 팝업
 * 사용방식	: gfn_popServiceError()
 * 주의		: 
 * 리턴		: 서비스 구분별 이용시간 안내 화면을 팝업
 */
function gfn_popServiceError() {
	var vOpts = new Object();
	vOpts.title = "서비스 이용 안내";
	vOpts.url = "/common/KabServiceErrorPopup.jsp";
	vOpts.clazz = "pop_w_900";
	vOpts.height = "650";
	vOpts.resizable = true;
	
	$pop.dialog(vOpts);
}

/**
 * 설명		: iframe popup height resize. 팝업 내용에 따라 높이가 달라지는 경우 사용(ex:분양정보 경쟁률)
 * 사용방식	: gfn_iframeResizeH(objId)
 * 주의		: iframe의 id와 name이 동일해야 함
 * 리턴		: 
 */
function gfn_iframeResizeH(objId) {
	// default objId 설정
	if(gfn_isNull(objId)) {
		objId = "iframeDialog";
	}
	
	var topWin, tgtWin, tgtDoc;
	var $tgtIfm;
	
	// iframe에서 호출한 경우
	if(self != top && window.name == objId) {
		topWin = parent.window;
		tgtWin = window;
		tgtDoc = document;
		$tgtIfm = $("#" + objId, parent.document);
	} else if(self == top && document.getElementById(objId)) {
		topWin = window;
		tgtWin = document.getElementById(objId).contentWindow;
		tgtDoc = tgtWin.document;
		$tgtIfm = $("#" + objId);
	} else {
		return false;
	}
	
	var winH = tgtWin.innerHeight;
	var bodyH = tgtDoc.body.scrollHeight;
	if(winH > bodyH) {
		tgtDoc.body.style.height = "auto";
		$tgtIfm.css("height", tgtDoc.body.scrollHeight + 30);
		tgtDoc.body.style.height = "100%";
		
		if($dlg) $dlg.dialogWindow.dialog("option", "position", $dlg.dialogWindow.dialog("option", "position"));
	} else if(topWin.innerHeight > bodyH + 150) {
		$tgtIfm.css("height", bodyH + 50);
		
		if($dlg) $dlg.dialogWindow.dialog("option", "position", $dlg.dialogWindow.dialog("option", "position"));
	}
}


// (임시) 서비스 준비중 alert 공통함수
function gfn_closedService()
{
	alert("서비스 준비중입니다.");
}

/**
*	========================================================= hom.common.js E N D =========================================================
*/

/**
*	========================================================= hom.popup.js START =========================================================
*/

var comFunc = {};

comFunc.pop = {};

var $pop = comFunc.pop;

var homPrntWindow = _getParentWindowWithDialog();

var $dlg = homPrntWindow && homPrntWindow.$dialog;
if ($dlg) window.dialogArguments = $dlg.dialogArguments;
if ($dlg) window.close = function()
{
	if ($dlg) $dlg.dialogWindow.dialog('close');
};

/**
 * function		: comFunc.pop.dialog(options);
 * Description	: 공통 Layer 팝업 함수입니다.
 * 매개변수		: [필수] options -> applyForm
 * options.title = "템플릿 팝업";
 * options.url = "<c:url value='/co/coa/selectMainView.do'/>";
 * options.width = "600";
 * options.height = "600";
 * options.resizable = true;
 * options.dialogArguments = ;
 * options.returnValue = ;
 * options.doPostBackAfterCloseCallback = "fn_popupCallBack";
 * options.postBackElementId = "applyForm";
 * options.fnCloseCallback =; 종료 콜벡
 * 
 */
comFunc.pop.dialog = function(options) {

    var defaultOptns = {
        url: null,
        divId: null,
        dialogArguments: null,
        height: "auto",
        width: "auto",
        position: {
			my: "center",
			at: "center",
			of: window,
			collision: "fit"
        },
        resizable: false,
        scrollable: true,
        onClose: function() { },
        returnValue: null,
        doPostBackAfterCloseCallback: false,
        postBackElementId: null
    };
    
    if (!gfn_isNull(options.clazz)) {
    	var arr = options.clazz.split('_');
    	options.width = arr[arr.length-1];
    }
    
    var opts = $.extend({}, defaultOptns, options);
    
    var fns = {
        close: function() {
        	
        	if($dialog.returnValue) {
        		opts.returnValue = $dialog.returnValue;
        	}
        	
        	if(opener) $dialog = null;
        	
        	if(parent) {
        		if(typeof(parent.checkSubmit) != "undefined"  && parent.checkSubmit === false) {
        			parent.checkSubmit = true;
            	}
            } else {
            	if(typeof(checkSubmit) != "undefined" && checkSubmit === false) {
            		checkSubmit = true;
            	}
            }
            
            opts.onClose();
            
            if (opts.doPostBackAfterCloseCallback) {
            	$pop._postBackForm(opts.postBackElementId);
            }
            if($('#iframeDialog')) {
            	$('#iframeDialog').parent().remove();
            }
            
            if (typeof(opts.fnCloseCallback) == 'function'){
            	opts.fnCloseCallback();
            }
            
        },
        
        adjustWidth: function() { $homFrame.css("width", "100%"); }
        
    };

    var $homFrame = null;
    
    if(opts.divId) {
    	$homFrame = $("#"+opts.divId);
    } else if(options.formId) {
    	$homFrame = $('<iframe name="iframeDialog" id="iframeDialog" frameborder=0 />');
    } else {
    	$homFrame = $('<iframe name="iframeDialog" id="iframeDialog" frameborder=0 />');
    	$homFrame.attr("src", opts.url);
    }
    
    var maxH = window.innerHeight - 10;
    if(opts.height != "auto" && maxH < opts.height) {
   		opts.height = maxH;
    }

    if (opts.scrollable)
    	$homFrame.css("overflow", "auto");

    $homFrame.css({
        'padding': 0,
        'margin': 0,
        'padding-bottom': 10
    });

    var $homDialogWindow = $homFrame.dialog({
        autoOpen: true,
        modal: true,
        title: opts.title,
        width: opts.width,
        height: opts.height,
        resizable: opts.resizable,
        position: {
			my: "center",
			at: "center",
			of: window,
			collision: "fit"
        },
        overlay: {
            opacity: 0.5,
            background: "black"
        },
        close: fns.close,
        resizeStop: fns.adjustWidth
    });
    
    $('#iframeDialog').parent().addClass(opts.clazz);
	$("#iframeDialog").attr({title:'팝업'});
    
    if(opts.clazz && opts.divId) {
    	$("#"+opts.divId).parent().addClass(opts.clazz);
    }
    
    fns.adjustWidth();

    if(options.formId) {
    	$net.submit(options.formId, opts.url, "iframeDialog");
    	gfn_hideCmmnProgressBar();
    } 
    
    $dialog = new Object();
    $dialog.dialogArguments = opts.dialogArguments;
    $dialog.dialogWindow = $homDialogWindow;
    $dialog.dialogOpts = opts;
    $dialog.returnValue = null;
    $dialog.dialogClose = function() { $homDialogWindow.dialog('close'); };

    $(".ui-dialog").attr("tabindex","0").focus();
    $(".ui-dialog-content").attr("tabindex","0");

};

/**
 * function		: comFunc.pop._postBackForm(targetElementId);
 * Description	: 공통 Layer 팝업 Form Submit 함수로 개발자들은 사용하지 않습니다.
 */
comFunc.pop._postBackForm = function(targetElementId)
{
	
    var theform;
    theform = document.forms[0];
    theform.__EVENTTARGET.value = targetElementId;
    theform.__EVENTARGUMENT.value = "";
    theform.submit();
    
};

/**
 * function		: _getParentWindowWithDialog();
 * Description	: 공통 Layer 팝업 초기 객체 선언함수로 개발자들은 사용하지 않습니다.
 */
function _getParentWindowWithDialog()
{
	
	var p = window.parent;
	var previousParent = p;
	while (p != null) {
		if ($(p.document).find('#iframeDialog').length) return p;

		p = p.parent;
		if (previousParent == p) return null;
		previousParent = p;
	}
	return null;
	
}

/**
 * function		: _setWindowReturnValue();
 * Description	: 공통 Layer 팝업 부모창에 값을 리턴하는 함수로 개발자들은 사용하지 않습니다.
 */
comFunc.pop._setWindowReturnValue = function(value)
{
	if ($dlg) $dlg.returnValue = value;
	window.returnValue = value;
};

/**
 * function		: comFunc.pop.closeDialog(value);
 * Description	: 공통 Layer 팝업 닫기 함수입니다.
 * 매개변수		: var vData = new Object();
 */
comFunc.pop.closeDialog = function(value)
{
	if ($dlg) $pop._setWindowReturnValue(value);
	if ($dlg) $dlg.dialogWindow.dialog('close');
};

/**
*	========================================================= hom.popup.js E N D =========================================================
*/

/**
 *	========================================================= hom.report.js START =========================================================
 */

/***************************************************************************************
* 업무명 		: 보고서 호출 공통 스크립트
* 파일명 		: comReport.xjs
* 작성자 		: 응용AA 김기범
* 작성일 		: 2019.04.10
* 설  명		: 보고서 호출 관련 공통 스크립트
*---------------------------------------------------------------------------------------
* 변경일	   변경자		        변경내역 
*---------------------------------------------------------------------------------------
* 2019.04.10   응용AA 김기범		최초 프로그램 작성         
* 
*---------------------------------------------------------------------------------------
****************************************************************************************/

var comFunc = {};

comFunc.report = {};

var $report = comFunc.report;

/**
 * 설명 : 레포트 호출 팝업
 * @param {string} rTitle		- 레포트 팝업명
 * @param {string} ozrPathNm	- 레포트 파일 및 질의문 파일이 위치한 URL 상대경로(Ex: /sc/sc/,/tm/tm/) 반드시 ozrPathNm와ozrFNm 값의 개수는 같아야 한다.
 * @param {string} ozrFNm		- 레포트 OZR(레포트파일) 파일명(Ex: test1.ozr,test2.ozr) 반드시 ozrPathNm와ozrFNm 값의 개수는 같아야 한다.
 * @param {array}  ozrParamArr	- ODI별 Parameter Array값 {odiFNm:"test1", ozrParam:"USR_ID=999999"}, {odiFNm:"test2", ozrParam:"USR_NM=홍길동"}
 * @param {string} ozrFormParam	- OZReport Form에서 직접선언한 OZFormParam값 (Ex: USR_NM=홍길동|USR_ID=999999)
 * @param {string} popupNm		- 팝업 구분 객체명(기본 : reportPopup)
 * @param {string} printSlientYn- 레포트의 인쇄버튼 이용 시 OZReport 자체 인쇄화면을 띄울지(N) 브라우저 인쇄화면을 띄울지(Y) 여부(기본 : N)
 * @param {string} horizontalYn	- 레포트 화면이 가로형인지 여부(기본 : N)
 * @param {string} printCopies	- 인쇄 기본 매수 설정(기본 : 1)
 * @param {string} directPrintYn- 미리보기가 뜨자마자 브라우저의 인쇄 창이 떠야할 경우(기본 : N)
 * @param {string} directExcelSaveYn- 미리보기가 뜨자마자 엑셀저장이 수행되어야 할 경우(기본 : N) printSlientYn옵션 값이"Y"일 경우 자동 비활성화"N"된다.
 * @param {string} excelSaveConf- 엑셀저장 시 옵션(A:기본, B:페이지별 Sheet 나눔, C:저장시 페이지 여백 제거옵션)
 * @param {string} maYn			- 위변조방지 처리 할지(Y) 하지 않을지(N) 여부(기본 : N)
 * cbFunc						- Callback 함수명 지정(기본 : fn_openReportPopupCallback)
* 사용예  	: $report.openReportPopup(param)
*/
comFunc.report.openReportPopup = function(param)
{

	if(param.length == 0) {
		alert("보고서 파일 실행에 필요한 파라미터가 없습니다.");
		return;
	}

	//필수 파라미터
	var strRTitle = param[0].rTitle;
	var strOzrPathNm = param[0].ozrPathNm;
	var strOzrFNm = param[0].ozrFNm;
	var arrParam = new Object();
	arrParam = param[0].ozrParamArr;

	var vOption = new Object();
	
	//선택 파라미터	
	vOption.strFormParam = (typeof param[0].ozrFormParam == "undefined") ? "" : param[0].ozrFormParam;
	vOption.strPopupNm = (typeof param[0].popupNm == "undefined") ? "reportPopup" : param[0].popupNm;
	vOption.strPrintSlientYn = (typeof param[0].printSlientYn == "undefined") ? "N" : param[0].printSlientYn;
	vOption.nPrintCopies = (typeof param[0].printCopies == "undefined") ? "0" : param[0].printCopies;
	vOption.strDirectPrintYn = (typeof param[0].directPrintYn == "undefined") ? "N" : param[0].directPrintYn;
	vOption.strDirectExcelSaveYn = (typeof param[0].directExcelSaveYn == "undefined") ? "N" : param[0].directExcelSaveYn;
	vOption.strExcelSaveConf = (typeof param[0].excelSaveConf == "undefined") ? "A" : param[0].excelSaveConf;
	vOption.strJsonData = (typeof param[0].jsonData == "undefined") ? "" : param[0].jsonData;
	vOption.strMaYn = (typeof param[0].maYn == "undefined") ? "N" : param[0].maYn;
	
	var nPopWidth = 1000;
	var nPopHeight = 780;
	
	//바로인쇄(strDirectPrintYn) 값이 "Y"일 경우 OZReport의 인쇄 선택창이 아닌 브라우저의 인쇄 선택창이 바로 나오도록 옵션을 변경 한다. 바로 인쇄 옵션이 있을 경우 바로 엑셀저장 옵션은 비활성화 한다.
	if(vOption.strDirectPrintYn == "Y") {
		vOption.strPrintSlientYn = "Y";
		vOption.strDirectExcelSaveYn = "N";
	}
	
	if(!strOzrFNm){
		alert("보고서 파일명은 필수 입력 항목입니다.");
		return false;
	}
	
	if(!strOzrPathNm){
		alert("보고서 경로명은 필수 입력 항목입니다.");
		return false;
	}

	//var urlPath = document.location.protocol + "//" + document.location.host;
	var urlPath = "https://toz.applyhome.co.kr";
	
	//폼 정보를 생성합니다.
	objForm = document.createElement("form");
	objForm.id     = "_dummyForm";
	objForm.method = "post";
	// oz-markany 위변조 방지를 위해 maYn 값 Y으로 구분해서 처리 
	if(vOption.strMaYn=="Y"){
		objForm.action = urlPath + "/oz/ozhviewer/KabReportMarkAnyCall.jsp";
	} else {
		objForm.action = urlPath + "/oz/ozhviewer/KabReportCall.jsp";
	}
	objForm.style.display = "none";
	objForm.target = vOption.strPopupNm;
	document.body.appendChild(objForm);

	//필수 파라미터 정보를 생성합니다.
	//팝업 타이틀명
	var objHidden1   = document.createElement("input");
	objHidden1.type  = "hidden";
	objHidden1.name  = "strRTitle";
	objHidden1.value = encodeURI(strRTitle);
	objForm.appendChild(objHidden1);

	//리포트경로
	var objHidden2   = document.createElement("input");
	objHidden2.type  = "hidden";
	objHidden2.name  = "strOzrPathNm";
	objHidden2.value = strOzrPathNm;
	objForm.appendChild(objHidden2);

	//리포트명
	var objHidden3   = document.createElement("input");
	objHidden3.type  = "hidden";
	objHidden3.name  = "strOzrFNm";
	objHidden3.value = strOzrFNm;
	objForm.appendChild(objHidden3);	
	
	//리포트파라미터
	var objHidden4   = document.createElement("input");
	objHidden4.type  = "hidden";
	objHidden4.name  = "arrParam";
	objHidden4.value = JSON.stringify(arrParam);
	objForm.appendChild(objHidden4);

	//리포트옵션
	var objHidden5   = document.createElement("input");
	objHidden5.type  = "hidden";
	objHidden5.name  = "vOption";
	objHidden5.value = JSON.stringify(vOption);
	objForm.appendChild(objHidden5);
	
	if(vOption.strJsonData != "") {
		//리포트옵션
		var objHidden6   = document.createElement("input");
		objHidden6.type  = "hidden";
		objHidden6.name  = "strJsonData";
		objHidden6.value = JSON.stringify(vOption.strJsonData);
		objForm.appendChild(objHidden6);		
	}
	
	//가로옵션 테스트용(HOM-464)
	var PdfDataType = (typeof param[0].horizontalYn == "undefined") ? "N" : param[0].horizontalYn;
	if(PdfDataType == "Y") {
	    var objHidden7   = document.createElement("input");
	    objHidden7.type  = "hidden";
	    objHidden7.name  = "PdfDataType";
	    objHidden7.value = "1";
	    objForm.appendChild(objHidden7);
	}
	
	window.open("about:blank", vOption.strPopupNm, "top=50,left=50,width="+nPopWidth+", height="+nPopHeight+",toolbar=no,status=no,location=no,scrollbars=yes,menubar=no,resizable=yes");
	
    objForm.submit();		

	objForm.parentNode.removeChild(objForm);
	
};

/**
 * 설명 : 레포트 iFrame 호출
 * @param {string} rTitle		- 레포트 팝업명
 * @param {string} ozrPathNm	- 레포트 파일 및 질의문 파일이 위치한 URL 상대경로(Ex: /sc/sc/,/tm/tm/) 반드시 ozrPathNm와ozrFNm 값의 개수는 같아야 한다.
 * @param {string} ozrFNm		- 레포트 OZR(레포트파일) 파일명(Ex: test1.ozr,test2.ozr) 반드시 ozrPathNm와ozrFNm 값의 개수는 같아야 한다.
 * @param {array}  ozrParamArr	- ODI별 Parameter Array값 {odiFNm:"test1", ozrParam:"USR_ID=999999"}, {odiFNm:"test2", ozrParam:"USR_NM=홍길동"}
 * @param {string} ozrFormParam	- OZReport Form에서 직접선언한 OZFormParam값 (Ex: USR_NM=홍길동|USR_ID=999999)
 * @param {string} popupNm		- 팝업 구분 객체명(기본 : reportPopup)
 * @param {string} printSlientYn- 레포트의 인쇄버튼 이용 시 OZReport 자체 인쇄화면을 띄울지(N) 브라우저 인쇄화면을 띄울지(Y) 여부(기본 : N)
 * @param {string} horizontalYn	- 레포트 화면이 가로형인지 여부(기본 : N)
 * @param {string} printCopies	- 인쇄 기본 매수 설정(기본 : 1)
 * @param {string} directPrintYn- 미리보기가 뜨자마자 브라우저의 인쇄 창이 떠야할 경우(기본 : N)
 * @param {string} directExcelSaveYn- 미리보기가 뜨자마자 엑셀저장이 수행되어야 할 경우(기본 : N) printSlientYn옵션 값이"Y"일 경우 자동 비활성화"N"된다.
 * @param {string} excelSaveConf- 엑셀저장 시 옵션(A:기본, B:페이지별 Sheet 나눔, C:저장시 페이지 여백 제거옵션)
 * cbFunc						- Callback 함수명 지정(기본 : fn_openReportPopupCallback)
* 사용예  	: gfn_openReport(param, ds_Param, "fn_openReportPopupCallback")
*/
comFunc.report.openReportIframe = function(param, vIfmId)
{

	if(param.length == 0) {
		alert("보고서 파일 실행에 필요한 파라미터가 없습니다.");
		return;
	}
	
	if(!vIfmId) {
		alert("iFrame 정보가 필요합니다.");
		return;
	}
	
	//필수 파라미터
	var strRTitle = param[0].rTitle;
	var strOzrPathNm = param[0].ozrPathNm;
	var strOzrFNm = param[0].ozrFNm;
	var arrParam = new Object();
	arrParam = param[0].ozrParamArr;

	var vOption = new Object();
	
	//선택 파라미터	
	vOption.strFormParam = (typeof param[0].ozrFormParam == "undefined") ? "" : param[0].ozrFormParam;
	vOption.strPopupNm = (typeof param[0].popupNm == "undefined") ? "reportPopup" : param[0].popupNm;
	vOption.strPrintSlientYn = (typeof param[0].printSlientYn == "undefined") ? "N" : param[0].printSlientYn;
	vOption.nPrintCopies = (typeof param[0].printCopies == "undefined") ? "0" : param[0].printCopies;
	vOption.strDirectPrintYn = (typeof param[0].directPrintYn == "undefined") ? "N" : param[0].directPrintYn;
	vOption.strDirectExcelSaveYn = (typeof param[0].directExcelSaveYn == "undefined") ? "N" : param[0].directExcelSaveYn;
	vOption.strExcelSaveConf = (typeof param[0].excelSaveConf == "undefined") ? "A" : param[0].excelSaveConf;
	vOption.strJsonData = (typeof param[0].jsonData == "undefined") ? "" : param[0].jsonData;
	
	var nPopWidth = 1000;
	var nPopHeight = 780;
	
	//바로인쇄(strDirectPrintYn) 값이 "Y"일 경우 OZReport의 인쇄 선택창이 아닌 브라우저의 인쇄 선택창이 바로 나오도록 옵션을 변경 한다. 바로 인쇄 옵션이 있을 경우 바로 엑셀저장 옵션은 비활성화 한다.
	if(vOption.strDirectPrintYn == "Y") {
		vOption.strPrintSlientYn = "Y";
		vOption.strDirectExcelSaveYn = "N";
	}
	
	if(!strOzrFNm){
		alert("보고서 파일명은 필수 입력 항목입니다.");
		return false;
	}
	
	if(!strOzrPathNm){
		alert("보고서 경로명은 필수 입력 항목입니다.");
		return false;
	}

	var urlPath = document.location.protocol + "//" + document.location.host;
	
	alert("bb");
	
	//폼 정보를 생성합니다.
	objForm = document.createElement("form");
	objForm.id     = "_dummyForm";
	objForm.method = "post";
	objForm.action = urlPath + "/oz/ozhviewer/KabReportCall.jsp";;
	objForm.style.display = "none";
	objForm.target = vIfmId;
	document.body.appendChild(objForm);

	//필수 파라미터 정보를 생성합니다.
	//팝업 타이틀명
	var objHidden1   = document.createElement("input");
	objHidden1.type  = "hidden";
	objHidden1.name  = "strRTitle";
	objHidden1.value = encodeURI(strRTitle);
	objForm.appendChild(objHidden1);

	//리포트경로
	var objHidden2   = document.createElement("input");
	objHidden2.type  = "hidden";
	objHidden2.name  = "strOzrPathNm";
	objHidden2.value = strOzrPathNm;
	objForm.appendChild(objHidden2);

	//리포트명
	var objHidden3   = document.createElement("input");
	objHidden3.type  = "hidden";
	objHidden3.name  = "strOzrFNm";
	objHidden3.value = strOzrFNm;
	objForm.appendChild(objHidden3);	
	
	//리포트파라미터
	var objHidden4   = document.createElement("input");
	objHidden4.type  = "hidden";
	objHidden4.name  = "arrParam";
	objHidden4.value = JSON.stringify(arrParam);
	objForm.appendChild(objHidden4);

	//리포트옵션
	var objHidden5   = document.createElement("input");
	objHidden5.type  = "hidden";
	objHidden5.name  = "vOption";
	objHidden5.value = JSON.stringify(vOption);
	objForm.appendChild(objHidden5);
	
	if(vOption.strJsonData != "") {
		//리포트옵션
		var objHidden6   = document.createElement("input");
		objHidden6.type  = "hidden";
		objHidden6.name  = "strJsonData";
		objHidden6.value = JSON.stringify(vOption.strJsonData);
		objForm.appendChild(objHidden6);		
	}
	
    objForm.submit();		
	objForm.parentNode.removeChild(objForm);
	
};

/**
 *	========================================================= hom.report.js E N D =========================================================
 */

/**
 *	========================================================= hom.validate.js START =========================================================
 */


/*******************************************************************************
 * Object Declaration
 ******************************************************************************/

comFunc.validate	= {};
comFunc.date = {};
comFunc.num = {};
comFunc.str = {};

var $validate = comFunc.validate;
var $date = comFunc.date;
var $num = comFunc.num;
var $str = comFunc.str;
       
               
/*******************************************************************************
 * comFunc.validate
 * comFunc.validate.checkRRN()			: 주민등록번호 유효성 여부를 반환합니다.
 * comFunc.validate.checkFRN()			: 외국인등록번호 유효성 여부를 반환합니다.
 * comFunc.validate.checkCRN()			: 법인등록번호 유효성 여부를 반환합니다.
 * comFunc.validate.checkBRN()			: 사업자등록번호 유효성 여부를 반환합니다.
 * comFunc.validate.checkPhone()		: 전화번호 유효성 여부를 반환합니다.
 * comFunc.validate.checkEmail()		: 이메일의 유효성 여부를 반환합니다.
 * comFunc.validate.checkRsvEmailList()	: 이메일 발송 시 수신자 목록의 유효성 여부를 반환합니다.
 * comFunc.validate.checkURL()			: URL의 유효성 여부를 반환합니다.
 * comFunc.validate.checkYYYYMMDD()		: 날짜문자열이 YYYYMMDD 형식을 만족하면 원본 값을 반환하고 아니면 빈 문자열을 반환합니다.
 * comFunc.validate.checkYYYYMM()		: 날짜문자열이 YYYYMM 형식을 만족하면 원본 값을 반환하고 아니면 빈 문자열을 반환합니다.
 * comFunc.validate.checkYYYY()			: 날짜문자열이 YYYY 형식을 만족하면 원본 값을 반환하고 아니면 빈 문자열을 반환합니다.
 * comFunc.validate.checkHHMM()			: 시간문자열이 HHMM 형식을 만족하면 원본 값을 반환하고 아니면 빈 문자열을 반환합니다.
 * comFunc.validate.checkDurDate()		: FROM ~ TO 일자형식의 유효성 여부를 반환합니다.
 * comFunc.validate.checkPwdLevel()		: 비밀번호의 수준을 확인합니다. 
 * comFunc.validate.checkGroup()		: 지정한 테이블 또는 그룹 하위에 존재하는 컨트롤들의 유효성을 검사합니다.
 * comFunc.validate.invalidMsg()		: 지정한 컨트롤이 유효하지 않을 경우 출력할 메시지를 반환합니다.
 * comFunc.validate.checkGridView()		: 지정한 그리드뷰의 컬럼들의 필수입력 유효성을 검사합니다.
 * comFunc.validate.checkNumber()       : 숫자만 입력하는 경우, 한글이 입력되는 것을 방지하는 함수입니다.
 * comFunc.validate.brwsKind()			: 현재 사용 브라우저가 IE인지를 확인하는 함수입니다.
 ******************************************************************************/


/**  
 * 설명		: 주민등록번호 유효성 여부를 반환합니다.
 * 사용방식	: comFunc.validate.checkRRN(value)
 * 주의		: 
 * 리턴		: true/false 
 */
comFunc.validate.checkRRN = function(value) {
	try {
		if (!value) {
			return false;			
		}
		
		// 13자리 숫자
		value = value.toString().trim().replace(/\D/g, "");		
		if (isNaN(value) || value.length != 13) {
	    	return false;
	    }
		
		// 이하 실제 검증로직
		var sum   = 0;
		var check = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];

	    for (var i = 0; i < 12; i++) {
	        sum += parseInt(value.charAt(i), 10) * check[i];
	    }
	    
	    if (parseInt(value.charAt(12), 10) != ((11 - (sum % 11)) % 10)) {
	    	return false;
	    }

	    return true;
	} catch (e) {
		throw ("comFunc.validate.checkRRN", e);
	}
	
};

/**
 * 설명		: 외국인등록번호 유효성 여부를 반환합니다.
 * 사용방식	: comFunc.validate.checkFRN(value)
 * 주의		: 
 * 리턴		: true/false 
 */
comFunc.validate.checkFRN = function(value) {
	try {
		if (!value) {
			return false;			
		}
		
		// 13자리 숫자
		value = value.toString().trim().replace(/\D/g, "");		
		if (isNaN(value) || value.length != 13) {
	    	return false;
	    }
		
		// 이하 실제 검증로직
		var odd = parseInt(value.charAt(7), 10) * 10 + parseInt(value.charAt(8), 10);
		if (odd % 2 != 0) {
			return false;
		}

		var sum   = 0;
		var check = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
		
		for (var i = 0; i < 12; i++) {
			sum += parseInt(value.charAt(i), 10) * check[i];
		}
		
		if (parseInt(value.charAt(12), 10) != ((((11 - (sum % 11)) % 10) + 2) % 10)) {
			return false;
		}

		return true;
	} catch (e) {
		throw ("comFunc.validate.checkFRN", e);
	}
};

/**
 * 설명		: 법인등록번호 유효성 여부를 반환합니다.
 * 사용방식	: comFunc.validate.checkCRN(value)
 * 주의		: 
 * 리턴		: true/false 
 */
comFunc.validate.checkCRN = function(value) {
	try {
		if (!value) {
			return false;			
		}
		
		// 13자리 숫자
		value = value.toString().trim().replace(/\D/g, "");		
		if (isNaN(value) || value.length != 13) {
	    	return false;
	    }
		
		// 이하 실제 검증로직
		var sum = 0;
		
		for (var i = 0; i < 12; i++) {
			sum += parseInt(value.charAt(i), 10) * ((i % 2 == 0) ? 1 : 2);
		}

		if (parseInt(value.charAt(12), 10) != ((sum % 10 > 0) ? 10 - (sum % 10) : 0)) {
			return false;
		}
		
		return true;
	} catch (e) {
		throw ("comFunc.validate.checkCRN", e);
	}
};

/**
 * 설명		: 사업자등록번호 유효성 여부를 반환합니다.
 * 사용방식	: comFunc.validate.checkBRN(value)
 * 주의		: 
 * 리턴		: true/false 
 */
comFunc.validate.checkBRN = function(value) {
	try {
		if (!value) {
			return false;			
		}
		
		// 10자리 숫자
		value = value.toString().trim().replace(/\D/g, "");		
		if (isNaN(value) || value.length != 10) {
	    	return false;
	    }
		
		// 이하 실제 검증로직
		var sum   = 0;
		var check = [1, 3, 7, 1, 3, 7, 1, 3, 5];
		
		for (var i = 0; i < 9; i++) {
			sum += parseInt(value.charAt(i), 10) * check[i];
		}
		sum += parseInt(parseInt(value.charAt(8), 10) * 5 / 10, 10);
				
		if (parseInt(value.charAt(9), 10) != ((sum % 10 > 0) ? 10 - (sum % 10) : 0)) {
			return false;
		}
		
		return true;
	} catch (e) {
		throw ("comFunc.validate.checkBRN", e);
	}
};

/**
 * 설명		: 전화번호 유효성 여부를 반환합니다.
 * 사용방식	: comFunc.validate.checkPhone(value)
 * 주의		: 
 *			  00Y			국제전화 
 *			  01Y			무선전화, 무선호출, 부가통신망 
 *			  0N0			공통 서비스 (각종 지능망 등) 
 *			  02			지역번호 (서울) 
 *			  03Y ~ 06Y		지역번호 
 *			  08Y			시외전화 
 *			  10Y			통신 사업자 민원안내 등 
 *			  11Y·12Y		긴급 민원 신고 
 *			  13Y·18Y		긴급 민원 신고 
 *			  13YY			공공기관 생활정보, 안내, 상담 
 *			  15YY			기간통신사업자 공통부가서비스 및 자율부가서비스 (전국대표번호 등) 
 *			  16YY			기간통신사업자 공통부가서비스 (전국대표번호 등) 
 *			  18YY			기간통신사업자 공통부가서비스 (전국대표번호 등)
 * 
 *			  07Y, 09Y		(예비) 
 *			  14YY			(예비; 기간통신사업자 부가서비스) 
 *			  17YY·19YY	(예비) 
 * 리턴		: true/false 
 */
comFunc.validate.checkPhone = function(value) {
	try {
		if (!value) {
			return false;			
		}
		
		// 숫자
		value = value.toString().trim().replace(/\D/g, "");		
		if (isNaN(value)) {
	    	return false;
	    }
		
		// 이하 실제 검증로직
		if (value.length == 3 && 
			(value.indexOf("11") == 0 || value.indexOf("12") == 0 || value.indexOf("13") == 0 || value.indexOf("18") == 0)) {
			// 11Y·12Y		긴급 민원 신고 
			// 13Y·18Y		긴급 민원 신고
			return true;
		} else if (value.length == 8 &&
			(value.indexOf("13") == 0 || value.indexOf("14") == 0 || value.indexOf("15") == 0 || value.indexOf("16") == 0 || value.indexOf("17") == 0 || value.indexOf("18") == 0 || value.indexOf("19") == 0)) {
			// 13YY			공공기관 생활정보, 안내, 상담
			// 14YY			(예비; 기간통신사업자 부가서비스)
			// 15YY			기간통신사업자 공통부가서비스 및 자율부가서비스 (전국대표번호 등) 
			// 16YY			기간통신사업자 공통부가서비스 (전국대표번호 등) 
			// 18YY			기간통신사업자 공통부가서비스 (전국대표번호 등)
			// 17YY·19YY	(예비)
			return true;
		} else {
			// 00Y			국제전화
			// 01Y			무선전화, 무선호출, 부가통신망 
			// 0N0			공통 서비스 (각종 지능망 등) 
			// 02			지역번호 (서울) 
			// 03Y ~ 06Y	지역번호
			// 08Y			시외전화
			// 10Y			통신 사업자 민원안내 등 
			// 07Y, 09Y		(예비)
			var regExp = /^(02|0[0-1][1-9]|0[0-9]0|0[0-6]\d|1\d{2,3})(\d{3,4})(\d{4})*$/g;
			
			return regExp.test(value);
		}
	} catch (e) {
		throw ("comFunc.validate.checkPhone", e);
	}
};

/**
 * 설명		: 이메일의 유효성 여부를 반환합니다.
 * 사용방식	: comFunc.validate.checkEmail(value)
 * 주의		: 
 * 리턴		: true/false 
 */
comFunc.validate.checkEmail = function(value) {
	try {
		if (!value) {
			return false;			
		}
		
		// 이하 실제 검증로직
		var regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/ig;
		
		return regExp.test(value.toString().trim());
	} catch (e) {
		throw ("comFunc.validate.checkEmail", e);
	}
};

/**
 * 설명		: 이메일 발송 시 수신자 목록의 유효성 여부를 반환합니다.
 * 사용방식	: comFunc.validate.checkRsvEmailList(value)
 * 주의		: 
 * 리턴		: true/false 
 */
comFunc.validate.checkRsvEmailList = function(value) {
	try {
		if (!value) {
			return false;			
		}

		var strRtn = true;
		
		value = value.trim();
		
		if(value.substring(value.length-1, value.length) != ";") value = value+";";
		
		var strEmalAddrArray = value.split(";");	
		
		if(strEmalAddrArray.length == 1) {
			if($validate.checkEmail(strEmalAddrArray)) {
				strRtn = true;
			} else {
				strRtn = false;
			}
		} else {
		
			for(var i=0; i<strEmalAddrArray.length-1; i++) {
				
				if(!$validate.checkEmail(strEmalAddrArray[i])) {
					strRtn = false;
				}
				
			}
		}
		
		return strRtn;
		
	} catch (e) {
		throw ("comFunc.validate.checkRsvEmailList", e);
	}
	
};

/**
 * 설명		: URL의 유효성 여부를 반환합니다.
 * 사용방식	: comFunc.validate.checkURL(value)
 * 주의		: 
 * 리턴		: true/false 
 */
comFunc.validate.checkURL = function(value) {
	try {
		if (!value) {
			return false;			
		}
		
		// 이하 실제 검증로직
		var regExp = /^(https?:\/\/)?((([a-z\d](([a-z\d-]*[a-z\d]))|([ㄱ-힣])*)\.)+(([a-zㄱ-힣]{2,}))|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/ig;
		
		return regExp.test(value.toString().trim());
	} catch (e) {
		throw ("comFunc.validate.checkURL", e);
	}
};

/**
 * 설명		: 날짜문자열이 YYYYMMDD 형식을 만족하면 원본 값을 반환하고 아니면 빈 문자열을 반환합니다.
 * 사용방식	: validator="$validate.checkYYYYMMDD"
 * 주의		: 
 * 리턴		: 원본 날짜/빈 문자열
 */
comFunc.validate.checkYYYYMMDD = function(value) {
	try {
		if (!value) {
			return "";
		}
		
		return $date.isYYYYMMDD(value) ? value : "";
	} catch (e) {
		throw ("comFunc.validate.checkYYYYMMDD", e);
	}
};

/**
* 설명		: 시간문자열이 HHMM 형식을 만족하면 원본 값을 반환하고 아니면 빈 문자열을 반환합니다.
* 사용방식	: validator="$validate.checkHHMM"
* 주의		: 
* 리턴		: 원본 시간/빈 문자열
*/
comFunc.validate.checkHHMM = function(value) {
	try {
		if (!value) {
			return "";
		}
		
		return $date.isHHMM(value) ? value : "";
	} catch (e) {
		throw ("comFunc.validate.checkHHMM", e);
	}
};


/**
 * 설명		: 날짜문자열이 YYYYMM 형식을 만족하면 원본 값을 반환하고 아니면 빈 문자열을 반환합니다.
 * 사용방식	: validator="$validate.checkYYYYMM"
 * 주의		: 
 * 리턴		: 원본 날짜/빈 문자열
 */
comFunc.validate.checkYYYYMM = function(value) {
	try {
		if (!value) {
			return "";
		}
		
		return $date.isYYYYMM(value) ? value : "";
	} catch (e) {
		throw ("comFunc.validate.checkYYYYMM", e);
	}
};

/**
 * 설명		: 날짜문자열이 YYYY 형식을 만족하면 원본 값을 반환하고 아니면 빈 문자열을 반환합니다.
 * 사용방식	: validator="$validate.checkYYYY"
 * 주의		: 
 * 리턴		: 원본 날짜/빈 문자열
 */
comFunc.validate.checkYYYY = function(value) {
	try {
		if (!value) {
			return "";
		}
		
		return $date.isYYYY(value) ? value : "";
	} catch (e) {
		throw ("comFunc.validate.checkYYYY", e);
	}
};

/**
 * 설명		: FROM ~ TO 일자형식의 유효성 여부를 반환합니다.
 * 사용방식	: comFunc.validate.checkDurDate(from일자, to일자, from명, to명, focus해줄 control명)
 * 주의		: 
 * 리턴		: true/false
 */
comFunc.validate.checkDurDate = function(fromDt, toDt, fromNnm, toNm, vControl) {
	try {
		if ( fromDt.replace("-", "") > toDt.replace("-", "") ){
			// {0}은(는) {1}보다 과거일 수 없습니다.
			alert($page.getMessage("0119", toNm, fromNnm));
			
			// 포커스이동해줄 control이 있을 때
			if (!$str.isEmpty(vControl)){
				vControl.focus();
			}
			
			return false;
		} else {
			return true;
		}
	} catch (e) {
		throw ("comFunc.validate.checkDurDate", e);
	}
};

/**
 * 설명		: 비밀번호의 수준을 확인합니다.
 * 사용방식	: comFunc.validate.checkPwdLevel("[비밀번호]")
 * 주의		: 
 * 리턴		: 1: 취약, 2: 보통, 3: 강력
 */
comFunc.validate.checkPwdLevel = function(value) {
	try {
		var regExpUppAlpha = /[A-Z]/g;
		var regExpLowAlpha = /[a-z]/g;
		var regExpNum      = /\d+/ig;					
		var regExpSpcl     = /[^0-9a-zA-z]/ig;
		
		var length   = value.length;
		var matchCnt = 0;
		
		var UppAlpha = regExpUppAlpha.test(value);
		var LowAlpha = regExpLowAlpha.test(value);
		var Num      = regExpNum.test(value);
		var Spcal    = regExpSpcl.test(value);
		
		if (UppAlpha) { matchCnt++; }
		if (LowAlpha) { matchCnt++; }
		if (Num     ) { matchCnt++; }
		if (Spcal   ) { matchCnt++; }
		
		if (matchCnt >= 3 && length >= 8) {
			return 3;
		} else if (matchCnt >= 2 && length >= 10) {
			return 2;
		} else {
			return 1;
		}
	} catch (e) {
		throw ("comFunc.validate.checkPwdLevel", e);
	}
};


/*******************************************************************************
 * 복합 유효성 검사 관련
 ******************************************************************************/

/**
 * 설명		: 현재 사용 브라우저가 IE인지 여부를 반환합니다.
 * 사용방식	: comFunc.validate.brwsKind()
 * 주의		: 
 * 리턴		: true/false 
 */
comFunc.validate.brwsKind = function()
{
	try {
		if(navigator.userAgent.indexOf("MSIE") >= 0 || navigator.userAgent.indexOf("Trident")>=0) //ie
		{
			return true; 	
		} else {
			return false;
		}
		
	} catch (e) {
		throw ("comFunc.validate.brwsKind", e);
	}
};


/**  
 * 설명		: 숫자만 입력하는 경우, 한글이 입력되는 것을 방지하는 함수입니다.
 * 사용방식	: comFunc.validate.checkNumber(comp)
 * 주의		: 
 * 리턴		: 
 */
comFunc.validate.checkNumber = function(iptComp){
	
	try {
		if (!iptComp) {
			throw "유효성을 검사할 컨트롤을 지정해주십시오."; 
		}
		
		e = event || window.event;
		
		if ((48 <= e.keyCode && e.keyCode <=57) || (96 <= e.keyCode && e.keyCode <=105)) {
			
		} else {
			eval(iptComp).setValue(eval(iptComp).getValue().replace(/[^0-9]/g, ""));
		}
		
	} catch (e) {
		throw ("comFunc.validate.checkNumber", e);
	}
};

/*******************************************************************************
 * comFunc.date
 * comFunc.date.getLastDayOfMonth()	: 지정한 날짜 문자열에 해당하는 달의 마지막 날짜를 반환합니다.
 * comFunc.date.setDateDelimiter()	: yyyyMMdd 패턴의 날짜 문자열에 지정한 구분자를 설정합니다.
 * comFunc.date.setTimeDelimiter()	: HHmm 패턴의 시간 문자열에 지정한 구분자를 설정합니다.
 * comFunc.date.isLeaf()			: 지정한 년도가 윤년인지 여부를 반환합니다.
 * comFunc.date.isYYYYMMDD()		: 지정한 문자열이 yyyyMMdd 패턴의 날짜 데이터인지 여부를 반환합니다.
 * comFunc.date.isYYYYMM()			: 지정한 문자열이 yyyyMM 패턴의 날짜(월) 데이터인지 여부를 반환합니다.
 * comFunc.date.isHHMM()			: 지정한 문자열이 HHmm 패턴의 시간 데이터인지 여부를 반환합니다.
 * comFunc.date.getBfAfHldDay()     : 지정한 날짜와와 이전, 이후 숫자를 입력 받아 영업일자를 반환합니다.
 * comFunc.date.getHldYn()          : 지정한 날짜의 휴일여부를 반환합니다.
 * comFunc.date.getMntFnlHldDay()   : 지정한 년월의 마지막 영업일을 반환합니다.
 * comFunc.date.getYearFstDay()     : 지정한 년도의 첫번째 영업일을 반환합니다. * 
 ******************************************************************************/

/**
 * 설명		: 지정한 날짜 문자열에 해당하는 달의 마지막 날짜를 반환합니다.
 * 사용방식	: comFunc.date.getLastDayOfMonth("20160720")
 *			  comFunc.date.getLastDayOfMonth("201602")
 * 주의		:
 * 리턴		: 마지막 날짜
 */
comFunc.date.getLastDayOfMonth = function(dateString) {
	try {
		if (!$date.isYYYYMMDD(dateString) && !$date.isYYYYMM(dateString)) {
			throw "유효한 날짜가 아닙니다.";
		}
		
		var year	  = dateString.substring(0, 4);
		var month	 = dateString.substring(4, 6);
		var yearMonth = dateString.substring(0, 6);
		
		var isLeapYear = ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));		
		if (isLeapYear && month == "02") {
			return yearMonth + "29";
		} else if (!isLeapYear && month == "02") {
			return yearMonth + "28";
		} else if (month == "01" || month == "03" || month == "05" || month == "07" || month == "08" || month == "10" || month == "12") {
			return yearMonth + "31";
		} else {
			return yearMonth + "30";
		}
	} catch (e) {
		throw ("comFunc.date.getLastDayOfMonth", e);
	}
};

/**
 * 설명		: yyyyMMdd 패턴의 날짜 문자열에 지정한 구분자를 설정합니다.
 * 사용방식	: comFunc.date.setDateDelimiter("20160720")
 * 			  comFunc.date.setDateDelimiter("20160720", ".")
 *			  comFunc.date.setDateDelimiter("20160720". "/")
 * 주의		:
 * 리턴		: 구분자로 서식화된 날짜 문자열
 */
comFunc.date.setDateDelimiter = function(dateString, delimiter) {
	try {
		dateString = dateString.replace(/\D/ig, "").trim();
		if (!$date.isYYYYMMDD(dateString)) {
			throw "유효한 날짜가 아닙니다.";
		}
		
		if (!delimiter) {
			delimiter = "-";
		}

		return dateString.replace(/(\d{4})(\d{2})(\d{2})/ig, "$1" + delimiter + "$2" + delimiter + "$3");
	} catch (e) {
		throw ("comFunc.date.setDateDelimiter", e);
	}
};

/**
 * 설명		: HHmm 패턴의 시간 문자열에 지정한 구분자를 설정합니다.
 * 사용방식	: comFunc.date.setTimeDelimiter("1320")
 * 			  comFunc.date.setTimeDelimiter("1320", "-")
 * 주의		:
 * 리턴		: 구분자로 서식화된 시간 문자열
 */
comFunc.date.setTimeDelimiter = function(timeString, delimiter) {
	try {
		timeString = timeString.replace(/\D/ig, "").trim();
		if (!$date.isHHMM(timeString)) {
			throw "유효한 시간이 아닙니다.";
		}
		
		if (!delimiter) {
			delimiter = ":";
		}

		return timeString.replace(/(\d{2})(\d{2})/ig, "$1" + delimiter + "$2");
	} catch (e) {
		throw ("comFunc.date.setTimeDelimiter", e);
	}
};

/**
 * 설명		: 지정한 년도가 윤년인지 여부를 반환합니다.
 * 사용방식	: comFunc.date.isLeaf("2015")
 * 			  comFunc.date.isLeaf("2016")
 * 주의		:
 * 리턴		: true/false
 */
comFunc.date.isLeaf = function(year) {
	try {
		try {
			if (isNaN(parseInt(year, 10))) {
				return false;
			}
		} catch (pe) {
			return false;
		}
		
		var leaf = false;
		if (year % 4 == 0) {
			leaf = true;
			
			if (year % 100 == 0)
				leaf = false;
			
			if (year % 400 == 0)
				leaf = true;
		}
		
		return leaf;
	} catch (e) {
		throw ("comFunc.date.isLeaf", e);
	}
};

/**
 * 설명		: 지정한 문자열이 yyyyMMdd 패턴의 날짜 데이터인지 여부를 반환합니다.
 * 사용방식	: comFunc.date.isYYYYMMDD("20160712")
 * 주의		:
 * 리턴		: true/false
 */
comFunc.date.isYYYYMMDD = function(dateString) {
	try {
		var regex = /^[0-9]{8}$/g;
		if (!dateString || !regex.test(dateString)) {
			return false;
		}

		var year  = parseInt(dateString.substr(0, 4), 10);
		var month = parseInt(dateString.substr(4, 2), 10);
		var day   = parseInt(dateString.substr(6, 2), 10);

		if (year < 1900 || year > 2999) {
			return false;
		}

		if (month < 1 || month > 12) {
			return false;
		}

		var lastdays = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
		if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
			lastdays[1] = 29;
		}

		return (day >= 1 && day <= lastdays[month - 1]);
	} catch (e) {
		throw ("comFunc.date.isYYYYMMDD", e);
	}
};

/**
 * 설명		: 지정한 문자열이 yyyyMM 패턴의 날짜(월) 데이터인지 여부를 반환합니다.
 * 사용방식	: comFunc.date.isYYYYMM("201607")
 * 			  comFunc.date.isYYYYMM("000013")
 * 주의		:
 * 리턴		: true/false
 */
comFunc.date.isYYYYMM = function(dateString) {
	try {
		var regex = /^[0-9]{6}$/g;
		if (!dateString || !regex.test(dateString)) {
			return false;
		}

		var year  = parseInt(dateString.substr(0, 4), 10);
		var month = parseInt(dateString.substr(4, 2), 10);
		if (year < 1900 || year > 2999) {
			return false;
		}

		if (month < 1 || month > 12) {
			return false;
		}
		
		return true;
	} catch (e) {
		throw ("comFunc.date.isYYYYMM", e);
	}
};

/**
 * 설명		: 지정한 문자열이 yyyy 패턴의 년도 데이터인지 여부를 반환합니다.
 * 사용방식	: comFunc.date.isYYYYMM("2016")
 * 			  comFunc.date.isYYYYMM("0000")
 * 주의		:
 * 리턴		: true/false
 */
comFunc.date.isYYYY = function(dateString) {
	try {
		var regex = /^[0-9]{6}$/g;
		if (!dateString || !regex.test(dateString)) {
			return false;
		}

		var year  = parseInt(dateString.substr(0, 4), 10);
		if (year < 1900 || year > 2999) {
			return false;
		}	
		return true;
	} catch (e) {
		throw ("comFunc.date.isYYYY", e);
	}
};

/**
 * 설명		: 지정한 문자열이 HHmm 패턴의 시간 데이터인지 여부를 반환합니다.
 * 사용방식	: comFunc.date.isHHMM("1320")
 * 			  comFunc.date.isHHMM("2580")
 * 주의		:
 * 리턴		: true/false
 */
comFunc.date.isHHMM = function(timeString) {
	try {
		var regex = /^[0-9]{4}$/g;
		if (!timeString || !regex.test(timeString)) {
			return false;
		}

		var hour   = parseInt(timeString.substr(0, 2), 10);
		var minute = parseInt(timeString.substr(2, 2), 10);
		if (hour < 0 || hour > 23) {
			return false;
		}

		if (minute < 0 || minute > 59) {
			return false;
		}
		
		return true;
	} catch (e) {
		throw ("comFunc.date.isHHMM", e);
	}
};

/*******************************************************************************
 * comFunc.num
 * comFunc.num.toFloat()		: 지정한 문자열을 지정한 스케일의 Float 형으로 반환합니다.
 * comFunc.num.addComma()		: 지정한 숫자 문자열에 콤마를 추가합니다.
 * comFunc.num.toHangul()		: 지정한 숫자를 한글 숫자로 반환합니다.
 * comFunc.num.toHanja()		: 지정한 숫자를 한자 숫자로 반환합니다.
 * comFunc.num.checkPrecision()	: 지정한 숫자가 정밀도와 배율을 만족하는지 확인합니다.
 * comFunc.num.fillZero()		: 지정한 길이만큼 숫자 좌측에 0을 채웁니다.
 * comFunc.num.validateNull()	: 지정한 숫자 문자열이 null 이거나 올바른 숫자가 아니면 0을 반환합니다.
 * comFunc.num._toFloat()		: [내부용] 지정한 문자열을 Float 형으로 반환합니다.
 * comFunc.num._toHangul()		: [내부용] 지정한 숫자를 한글 숫자로 변환할 때 천의자리를 설정합니다.
 * comFunc.num._toHanja()		: [내부용] 지정한 숫자를 한자 숫자로 변환할 때 천의자리를 설정합니다.
 ******************************************************************************/

/**
 * 설명		: 지정한 문자열을 지정한 스케일의 Float 형으로 반환합니다.
 * 사용방식	: comFunc.num.toFloat("+123,456,789.123")
 * 			  comFunc.num.toFloat("가나다 12345.123")
 * 			  comFunc.num.toFloat("+123,456,789.123", 2)
 * 주의		:
 * 리턴		: Float
 */
comFunc.num.toFloat = function(numString, scale) {
	try {
		if (scale || scale == 0) {
			var power = Math.pow(10, scale);
			var result = $num._toFloat(numString);
			return Math.round(result * power) / power;
		} else {
			return $num._toFloat(numString);
		}
	} catch (e) {
		throw ("comFunc.num.toFloat", e);
	}
};

/**
 * 설명		: 지정한 숫자 문자열에 콤마를 추가합니다.
 * 사용방식	: comFunc.num.addComma("+123456789.123")
 * 			  comFunc.num.addComma("-123")
 * 			  comFunc.num.addComma("123456789123.12")
 * 주의		:
 * 리턴		: 콤마가 추가된 숫자 문자열
 */
comFunc.num.addComma = function(numString) {
	try {
		var result   = "";
		var decRight = "";
		var sign	 = "";
		
		numString = $num._toFloat(numString).toString();
		if (numString.charAt(0) == "-" || numString.charAt(0) == "+") {
			sign = numString.charAt(0);
			numString = numString.substr(1);
		}
		
		var pointPos = numString.indexOf(".");
		if (pointPos > 0) {
			decRight  = numString.substr(pointPos);
			numString = numString.substr(0, pointPos);
		}
	
		var length = numString.length;
		while (length > 3) {
			length -= 3;
			result = "," + numString.substr(length, 3) + result;
		}
		result = sign + numString.substr(0, length) + result + decRight;
	
		return result;
	} catch (e) {
		throw ("comFunc.num.addComma", e);
	}
};

/**
 * 설명		: 지정한 숫자를 한글 숫자로 반환합니다.
 * 사용방식	: comFunc.num.toHangul("0")
 * 			  comFunc.num.toHangul("1234567890")
 * 			  comFunc.num.toHangul("1,234,567,890")
 * 			  comFunc.num.toHangul("1234.12")
 * 주의		: 소숫점 이하는 처리하지 않습니다. 
 * 리턴		: 한글 숫자
 */
comFunc.num.toHangul = function(numString) {
	try {
		numString = numString.toString();
		
		var pointPos = numString.indexOf(".");
		if (pointPos >= 0)
			numString = numString.substr(0, pointPos);
			
		numString = numString.replace(/[^0-9]/g, "");
		var jari = new Array("", "만", "억", "조", "경", "해");
		var index = 0;
		
		var result = "";
		var buffer;
		
		var length = numString.length;
		while (length > 4) {
			buffer = $num._toHangul(numString.substr(length - 4));
			if (buffer != "")
				result = buffer + jari[index] + result;
			length -= 4;
			numString = numString.substr(0, length);
			index++;
		}
		buffer = $num._toHangul(numString);
		
		if (buffer != "")
			result = buffer + jari[index] + result;
		if (result == "")
			result = "영";
			
		return result;
	} catch (e) {
		throw ("comFunc.num.toHangul", e);
	}
};

/**
 * 설명		: 지정한 숫자를 한자 숫자로 반환합니다.
 * 사용방식	: comFunc.num.toHanja("0")
 * 			  comFunc.num.toHanja("1234567890")
 * 			  comFunc.num.toHanja("1,234,567,890")
 * 			  comFunc.num.toHanja("1234.12")
 * 주의		: 소숫점 이하는 처리하지 않습니다. 
 * 리턴		: 한자 숫자
 */
comFunc.num.toHanja = function(numString) {
	try {
		numString = numString.toString();
		
		var pointPos = numString.indexOf(".");
		if (pointPos >= 0)
			numString = numString.substr(0, pointPos);
			
		numString = numString.replace(/[^0-9]/g, "");
		var jari = new Array("", "萬", "億", "兆", "京", "垓");
		var index = 0;
		
		var result = "";
		var buffer;
		
		var length = numString.length;
		while (length > 4) {
			buffer = $num._toHanja(numString.substr(length - 4));
			if (buffer != "")
				result = buffer + jari[index] + result;
			length -= 4;
			numString = numString.substr(0, length);
			index++;
		}
		buffer = $num._toHanja(numString);
		
		if (buffer != "")
			result = buffer + jari[index] + result;
		if (result == "")
			result = "〇";
			
		return result;
	} catch (e) {
		throw ("comFunc.num.toHanja", e);
	}
};

/**
 * 설명		: 지정한 숫자가 정밀도와 배율을 만족하는지 확인합니다.
 * 사용방식	: comFunc.num.checkPrecision("1234567890.123", 15, 3)
 * 			  comFunc.num.checkPrecision("1234567890.123", 10, 3)
 * 주의		:  
 * 리턴		: 유효성 여부
 */
comFunc.num.checkPrecision = function(numString, precision, scale) {
	try {
		if (!precision) {
			precision = 15;
		}
		
		if (!scale) {
			scale = 3;
		}
		
		var maxNumber = Math.pow(10, precision - scale);
		if (maxNumber <= numString) {
			return false;
		} else if (-maxNumber >= numString) {
			return false;
		}
		
		return true;
	} catch (e) {
		throw ("comFunc.num.checkPrecision", e);
	}
};

/**
 * 설명		: 지정한 길이만큼 숫자 좌측에 0을 채웁니다.
 * 사용방식	: comFunc.num.fillZero("1234", 8)
 * 			  comFunc.num.fillZero("", 4)
 * 주의		:  
 * 리턴		: 지정한 길이의 숫자 문자열
 */
comFunc.num.fillZero = function(numString, maxLength) {
	try {
		if (!maxLength) {
			return numString;
		}
		
		numString = numString.toString();
		
		var zero   = "";
		var length = numString.length;
		if (length < maxLength) {
			for (var i = length; i < maxLength; i++) {
				zero += "0";
			}
		}

		return  zero + numString;
	} catch (e) {
		throw ("comFunc.num.fillZero", e);
	}
};

/**
 * 설명		: 지정한 숫자 문자열이 null 이거나 올바른 숫자가 아니면 0을 반환합니다.
 * 사용방식	: comFunc.num.validateNull()
 * 			  comFunc.num.validateNull("")
 * 			  comFunc.num.validateNull("-123,456,789.01")
 * 			  comFunc.num.validateNull("가나다 123456.78 ABC")
 * 주의		:  
 * 리턴		: 숫자
 */
comFunc.num.validateNull = function(numString) {
	try {
		if (!numString) {
			return 0;
		}
		
		numString = numString.toString().trim();
		if (numString == "" || numString.toLowerCase() == "null") {
			return 0;
		}
		
		var sign = numString.substr(0, 1);
		if (sign != "+" && sign != "-")
			sign = "";
		
		var value = numString.replace(/[^\d\.]/ig, "");
		if (value == "" || isNaN(value))
			return 0;
		else
			return (sign == "-") ? parseFloat(value) * -1 : parseFloat(value);
	} catch (e) {
		throw ("comFunc.num.validateNull", e);
	}
};

comFunc.num.onlyNumberObj = function(numObj) {
	try{
		if (numObj == null || numObj == "") {
			return false;
		}
		var numString = $(numObj).val().trim();
		var value = numString.replace(/[^\d]/ig, "");
		if(numString != value) {
			$(numObj).val(value);
			return false;
		} else {
			return true;
		}
	} catch (e) {
		throw ("comFunc.num.onlyNumberObj", e);
	}
};

/**
 * 설명		: [내부용] 지정한 문자열을 Float 형으로 반환합니다.
 * 사용방식	: comFunc.num._toFloat("+123,456,789.123")
 * 			  comFunc.num._toFloat("가나다 12345.123")
 * 주의		: 일반 개발자들은 이 함수를 사용하지 않습니다.
 * 리턴		: Float
 */
comFunc.num._toFloat = function(numString) {
	try {
		if (!numString)
			return 0;
		
		var result = parseFloat(numString.toString().replace(/[^0-9\+\-\.]+/g, ""));
		if (isNaN(result))
			result = 0;
		return result;
	} catch (e) {
		throw ("comFunc.num._toFloat", e);
	}
};

/**
 * 설명		: [내부용] 지정한 숫자를 한글 숫자로 변환할 때 천의자리를 설정합니다.
 * 사용방식	: comFunc.num._toHangul("1234567")
 * 주의		: 일반 개발자들은 이 함수를 사용하지 않습니다.
 * 리턴		: 한글 숫자
 */
comFunc.num._toHangul = function(numString) {
	try {
		var jari = new Array("", "십", "백", "천");
		var su   = new Array("일", "이", "삼", "사", "오", "육", "칠", "팔", "구");
		
		numString  = numString.toString();
		var length = numString.length;
		
		var result = "";
		for (var i = 0; i < length; i++) {
			var char = parseInt(numString.charAt(length - i - 1), 10);
			if (char > 0)
				result = su[char - 1] + jari[i] + result;
		}
		
		return result;
	} catch (e) {
		throw ("comFunc.num._toHangul", e);
	}
};

/**
 * 설명		: [내부용] 지정한 숫자를 한자 숫자로 변환할 때 천의자리를 설정합니다.
 * 사용방식	: comFunc.num._toHanja("1234567")
 * 주의		: 일반 개발자들은 이 함수를 사용하지 않습니다.
 * 리턴		: 한자 숫자
 */
comFunc.num._toHanja = function(numString) {
	try {
		var jari = new Array("", "十", "百", "千");
		var su   = new Array("一", "二", "三", "四", "五", "六", "七", "八", "九");
		
		numString  = numString.toString();
		var length = numString.length;
		
		var result = "";
		for (var i = 0; i < length; i++) {
			var char = parseInt(numString.charAt(length - i - 1), 10);
			if (char > 0)
				result = su[char - 1] + jari[i] + result;
		}
		
		return result;
	} catch (e) {
		throw ("comFunc.num._toHanja", e);
	}
};

/*******************************************************************************
 * comFunc.str
 * comFunc.str.isEmpty()			: 지정한 문자열을 빈문자열인지 확인합니다. 
 * comFunc.str.defaultValue()		: 지정한 문자열이 빈문자열이면 기본값을 반환하고, 아니면 원본값을 반환합니다. 
 * comFunc.str.getByteLength()		: 한글을 감안한 문자열의 Byte 길이를 반환합니다.
 * comFunc.str.onlyHangul()			: 한글로만 구성된 문자열인지 여부를 반환합니다.
 * comFunc.str.DBCS_SBCS()			: DBCS 문자열을 SBCS 문자열로 변환합니다.
 * comFunc.str.padLeft()			: 지정한 길이가 될 때까지 문자열 좌측에 지정한 문자를 추가합니다.
 * comFunc.str.padLeftByte()		: 지정한 길이(Byte)가 될 때까지 문자열 좌측에 지정한 문자를 추가합니다.
 * comFunc.str.padRight()			: 지정한 길이가 될 때까지 문자열 우측에 지정한 문자를 추가합니다.
 * comFunc.str.padRightByte()		: 지정한 길이(Byte)가 될 때까지 문자열 우측에 지정한 문자를 추가합니다.
 * comFunc.str.getBirthdayFromRRN()	: 주민등록번호로부터 생년월일을 추출합니다.
 ******************************************************************************/

/**
 * 설명		: 지정한 문자열을 빈문자열인지 확인합니다.
 * 			  whitespace 인자를 true로 지정하면 공백 문자도 빈문자열로 취급합니다. 
 * 사용방식	: comFunc.str.isEmpty("")
 * 			  comFunc.str.isEmpty("", true)
 * 주의		: 
 * 리턴		: true/false
 */
comFunc.str.isEmpty = function(source, whitespace) {
	try {
		if (source === null || source === undefined) {
			return true;
		} 
		
		if (!whitespace) {
			whitespace = false;
		}
		
		if (typeof(source) === "object") {
			// 개체
	        var i = 0;
	        for (key in source) {
	            i++;
	        }
	        if (i === 0) { 
	            return true;
	        }
	    } else {
	    	// 문자열
			source = source.toString().toLowerCase();
			if (whitespace) {
				source = source.trim();
			}
		    if (source === "undefined" || source === "null" || source === "") {
		        return true;
		    }
	    }
	    
	    return false;
	} catch (e) {
		throw ("comFunc.str.isEmpty", e);
	}
};

/**
 * 설명		: 지정한 문자열이 빈문자열이면 기본값을 반환하고, 아니면 원본값을 반환합니다.
 * 			  whitespace 인자를 true로 지정하면 공백 문자도 빈문자열로 취급합니다. 
 * 사용방식	: comFunc.str.defaultValue("",  0)
 * 			  comFunc.str.defaultValue("A", 0)
 * 주의		: 
 * 리턴		: 원본값 또는 기본값 
 */
comFunc.str.defaultValue = function(source, initValue, whitespace) {
	try {
		if ($str.isEmpty(source, whitespace)) {
			if (initValue == null) {
				return "";
			} else {
				return initValue;	
			}
		} else {
			return source;
		}
	} catch (e) {
		throw ("comFunc.str.defaultValue", e);
	}
};

/**
 * 설명		: 한글을 감안한 문자열의 Byte 길이를 반환합니다.
 * 사용방식	: comFunc.str.getByteLength("가나다")
 * 주의		: 
 * 리턴		: 문자열의 Byte 길이
 */
comFunc.str.getByteLength = function(source) {
	try {
		if (!source) {
			return 0;
		}
		return (source.length + (escape(source) + "%u").match(/%u/g).length - 1);
	} catch (e) {
		throw ("comFunc.str.getByteLength", e);
	}
};

/**
 * 설명		: 한글로만 구성된 문자열인지 여부를 반환합니다.
 * 사용방식	: comFunc.str.onlyHangul("가나다")
 * 주의		: 
 * 리턴		: true/false
 */
comFunc.str.onlyHangul = function(source) {
	try {
		if (!source) {
			return false;
		}
		
		// (0xAC00 <= c && c <= 0xD7A3) 초중종성이 모인 한글자
        // (0x3131 <= c && c <= 0x318E) 자음 모음
		for (var i = 0; i < source.length; i++) {
	        var c = source.charCodeAt(i);
	        if (!((0xAC00 <= c && c <= 0xD7A3) || (0x3131 <= c && c <= 0x318E))) {
	            return  false;
	        }
	    }
	    return true;
	} catch (e) {
		throw ("comFunc.str.onlyHangul", e);
	}
};

/**
 * 설명		: DBCS 문자열을 SBCS 문자열로 변환합니다.
 * 사용방식	: comFunc.str.DBCS_SBCS("ｂｒｏｗｎ　ｆｏｘ")
 * 주의		: 
 * 리턴		: SBCS 문자열
 */
comFunc.str.DBCS_SBCS = function(source) {
	try {
		var result = "";
	    var length = source.length;
	    
	    for (var i = 0; i < length; i++) {
	        var c = source.charCodeAt(i);
	        if (c >= 65281 && c <= 65374 && c != 65340) {
	            result += String.fromCharCode(c - 65248);
	        } else if (c == 8217) {
	            result += String.fromCharCode(39);
	        } else if (c == 8221) {
	            result += String.fromCharCode(34);
	        } else if (c == 12288) {
	            result += String.fromCharCode(32);
	        } else if (c == 65507) {
	            result += String.fromCharCode(126);
	        } else if (c == 65509) {
	            result += String.fromCharCode(92);
	        } else {
	            result += source.charAt(i);
	        } 
	    }
	    
	    return result.trim();
	} catch (e) {
		throw ("comFunc.str.DBCS_SBCS", e);
	}
};

/**
 * 설명		: 지정한 길이가 될 때까지 문자열 좌측에 지정한 문자를 추가합니다.
 * 사용방식	: comFunc.str.padLeft("가나다", 10, "0")
 *            comFunc.str.padLeft("가나다", 10, "_")
 * 주의		: 
 * 리턴		: 결과 문자열
 */
comFunc.str.padLeft = function(source, size, char) {
	try {
		if (!source) {
			source = "";
		}
		source = source.toString();
		
		if (!size) {
			return source;
		}
		
		if (!char) {
			char = " ";
		}
		
		var result = source;
		for (var i = 0; i < size - source.length; i++) {
			result = char + result;
		}
		
		return result;
	} catch (e) {
		throw ("comFunc.str.padLeft", e);
	}
};

/**
 * 설명		: 지정한 길이(Byte)가 될 때까지 문자열 좌측에 지정한 문자를 추가합니다.
 * 사용방식	: comFunc.str.padLeftByte("ABC", 10, "_")
 *            comFunc.str.padLeftByte("가나다", 10, "_")
 * 주의		: 
 * 리턴		: 결과 문자열
 */
comFunc.str.padLeftByte = function(source, size, char) {
	try {
		if (!source) {
			source = "";
		}
		source = source.toString();
		
		if (!size) {
			return source;
		}
		
		if (!char) {
			char = " ";
		}
		
		if ($str.getByteLength(char) > 1) {
			throw "1Byte 문자만 지정할 수 있습니다.";
		}
		
		var result = source;
		var byteLength = $str.getByteLength(source);
		for (var i = 0; i < size - byteLength; i++) {
			result = char + result;
		}
		
		return result;
	} catch (e) {
		throw ("comFunc.str.padLeftByte", e);
	}
};

/**
 * 설명		: 지정한 길이가 될 때까지 문자열 우측에 지정한 문자를 추가합니다.
 * 사용방식	: comFunc.str.padRight("가나다", 10, "0")
 *            comFunc.str.padRight("가나다", 10, "_")
 * 주의		: 
 * 리턴		: 결과 문자열
 */
comFunc.str.padRight = function(source, size, char) {
	try {
		if (!source) {
			source = "";
		}
		source = source.toString();
		
		if (!size) {
			return source;
		}
		
		if ( source.length >= size )
		{
			return source;
		}
		
		if (!char) {
			char = " ";
		}
		
		var result = source;
		var repeatCnt = size - source.length;
		
		for (var i = 0; i < repeatCnt; i++) 
		{
			result = result + char;
		}
		
		return result;
	} catch (e) {
		throw ("comFunc.str.padRight", e);
	}
};

/**
 * 설명		: 지정한 길이(Byte)가 될 때까지 문자열 우측에 지정한 문자를 추가합니다.
 * 사용방식	: comFunc.str.padRightByte("ABC", 10, "_")
 *            comFunc.str.padRightByte("가나다", 10, "_")
 * 주의		: 
 * 리턴		: 결과 문자열
 */
comFunc.str.padRightByte = function(source, size, char) {
	try {
		if (!source) {
			source = "";
		}
		source = source.toString();
		
		if (!size) {
			return source;
		}
		
		if (!char) {
			char = " ";
		}
		
		if ($str.getByteLength(char) > 1) {
			throw "1Byte 문자만 지정할 수 있습니다.";
		}
		
		var result = source;
		var byteLength = size - $str.getByteLength(source);
		
		for (var i = 0; i < byteLength; i++) {
			result = result + char;
		}
		
		return result;
	} catch (e) {
		throw ("comFunc.str.padRightByte", e);
	}
};

/**
 * 설명		: 주민등록번호로부터 생년월일을 추출합니다.
 * 사용방식	: comFunc.str.getBirthdayFromRRN("730816114444")
 * 주의		: 
 * 리턴		: 결과 문자열
 */
comFunc.str.getBirthdayFromRRN = function(source) {
	try {
		source = source.replace(/\D/ig, "");
		if (source.length < 7 || isNaN(source)) {
			throw "주민등록번호가 너무 짧거나 올바르지 않습니다.";
		}
		
		var yearPrefix = "";
		var yearIndexer = source.substr(6, 1);
		if (yearIndexer == "9" || yearIndexer == "0") {
			yearPrefix = "18";
		} else if (yearIndexer == "1" || yearIndexer == "2") {
			yearPrefix = "19";
		} else if (yearIndexer == "3" || yearIndexer == "4") {
			yearPrefix = "20";
		} else {
			return "";
		}
	
		return yearPrefix + source.substr(0, 2) + source.substr(2, 2) + source.substr(4, 2);
	} catch (e) {
		throw ("comFunc.str.getBirthdayFromRRN", e);
	}
};


/**
 *	========================================================= hom.validate.js E N D =========================================================
 */

