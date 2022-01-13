var comFunc = {};

comFunc.net = {};
comFunc.com = {};

var $net = comFunc.net;
var $com = comFunc.com;

/*******************************************************************************
 * comFunc.net
 * comFunc.net.ajax()				: 공통 Ajax 함수로 form.submit 이외의 모든 작업에 사용합니다.
 * comFunc.net._callBackAjax()		: 공통 Ajax 함수의 공통 콜백함수로 개발자들은 사용하지 않습니다. 
 * comFunc.net.submit()				: 공통 form.submit 함수입니다.
 ******************************************************************************/

/**
 * function		: comFunc.net.ajax(vUrl, oOptions);
 * Description	: 공통 Ajax 함수로 form.submit 이외의 모든 작업에 사용합니다.
 * 매개변수		: vUrl -> /co/cob/selectMainView.do
 * 매개변수		: oOptions -> oOptions.CallBack = fn_applyCallBack();
 */
comFunc.net.ajax = function(vUrl, oOptions)
{
	var commonProgressBar = (window.name == "iframeDialog") ? parent.document.getElementById("commonProgressBar") : document.getElementById("commonProgressBar");
	commonProgressBar.style.display = "block";
	
	try
	{
		
		//매개변수 확인
		if(!vUrl) {
			throw "서버와의 통신을 위한 URL을 지정하여 주십시오.";
		} else if(!oOptions) {
			throw "서버와의 통신을 위한 옵션을 지정하여 주십시오.";
		}
		
		//메소드방식
		var vMethod = oOptions.method || "POST";
		
		//데이터 타입(Default : Serialize를 위한 html 통신, json 통신 : json, xml 통신 : xml)
		var vDataType = oOptions.dataType || "json";
		var vReqDataType = oOptions.reqDataType || "";
		//요청데이터
		var vReqData = "";
		//콘텐츠유형
		var vMediaType = "";
		
		if(vDataType == "html" || vReqDataType == "form") {
			vReqData = $(eval(oOptions.requestData)).serialize();
			vMediaType = "application/x-www-form-urlencoded; charset=UTF-8";
		} else if(vDataType == "json") {
			vReqData = oOptions.requestData;
			vMediaType = "application/json";
		} else if(vDataType == "xml") {
			vReqData = oOptions.requestData;
			vMediaType = "application/xml";
		} else if(vDataType == "multipart") {
			var vForm = $("#"+oOptions.multipartForm)[0];
			vReqData = new FormData(vForm);
			vMediaType = "multipart/form-data";
		}
		
		//동기/비동기 모드 (기본: 비동기)
		var vMode = oOptions.mode || true;
		
		// mode가 false 경우 동기식으로 처리
		if (oOptions.mode == false) {
			vMode = false;
		}
		
		//프로그래스바
		var vProcessMsg = (typeof oOptions.processMsg == "undefined") ? "처리 중입니다." : oOptions.processMsg;
		
		//데이터 설정
		if(typeof vReqData != "string")
		{
			if(vDataType == "json")
			{
				var vReqTemp = {
					"reqData" : {}
				};
				
				if(vReqData) {
					vReqTemp.reqData = vReqData;
				}
				
				vReqData = JSON.stringify(vReqTemp);
			} else if(vDataType == "xml") {
				throw "xml 통신 준비중입니다.";
			}
		}
		
		var vCallBack = oOptions.CallBack || "";
		var vErrCallBack = oOptions.ErrCallBack || "";
		
		var vResult = null;
		
/*		console.log("---------------------------------------");
		console.log("url : " +vUrl);
		console.log("type : " +vMethod);
		console.log("dataType : " +vDataType);
		console.log("contentType : " +vMediaType);
		console.log("async : " +vMode);
		console.log("data : " +vReqData);
		console.log("---------------------------------------");
*/		
		//서버와의 통신
		$.ajax({
			url	 : vUrl,
			type : vMethod,
			dataType : (vDataType == "multipart") ? "json" : vDataType,
			contentType : (vDataType == "multipart") ? false : vMediaType,
			enctype : (vDataType == "multipart") ? vMediaType : false,
			async : vMode,			
			data : vReqData,
			timeout : 600000,
			cache : false,
			processData : false,
			beforeSend : function(xhr) {
				xhr.setRequestHeader("gvPgmId", gvPgmId);
				xhr.setRequestHeader("ajaxAt", "Y");
			}
		}).done( function ( e ){
			var vStatObj = new Object();
			
			if(e.exception) {
				vStatObj.result		= "ERROR";				
			} else {
				vStatObj.result		= "SUCCESS";	
			}
			
			vStatObj.argument		= vReqData;
			vStatObj.callback		= vCallBack;
			vStatObj.errCallBack	= vErrCallBack;
			vStatObj.mediatype		= vMediaType.toLowerCase();
			vStatObj.mode			= (vMode) ? "asynchronous" : "synchronous";
			vResult = $net._callBackAjax(e, vStatObj);
		}).fail( function( e ) {
			var vStatObj = new Object();
			vStatObj.result			= "ERROR";
			vStatObj.argument		= vReqData;
			vStatObj.callback		= vCallBack;
			vStatObj.errCallBack	= vErrCallBack;
			vStatObj.mediatype		= vMediaType.toLowerCase();
			vStatObj.mode			= (vMode) ? "asynchronous" : "synchronous";	
			vResult = $net._callBackAjax(e, vStatObj);
		});
		
		return vResult;
		
	} catch (e) {
		// 프로그레스바 감추기
		commonProgressBar.style.display = "none";

		throw ("comFunc.net.ajax", e);
	}
	
};

/**
 * function		: comFunc.net._callBackAjax(e, vStatObj);
 * Description	: 공통 Ajax 함수의 공통 콜백함수로 개발자들은 사용하지 않습니다.
 */
comFunc.net._callBackAjax = function(e, vStatObj)
{
	// 프로그레스바
	var commonProgressBar = (window.name == "iframeDialog") ? parent.document.getElementById("commonProgressBar") : document.getElementById("commonProgressBar");
	
	try
	{
		var vResBody = null;
		
		var vResText = JSON.stringify(e);
		
		if(vResText && vResText.trim().indexOf("{") == 0) {
			vResBody = JSON.parse(vResText.trim());
		} else if(vResText) {
			vResBody = vResText;
		} else {
			alert("넘어온 데이터가 없습니다.");
			commonProgressBar.style.display = "none";
			return;
		}
		
		if(vStatObj.result == "SUCCESS")
		{
		
			if(vStatObj.callback != "") {
				var vCallBack = eval(vStatObj.callback);
				if(vCallBack && typeof vCallBack == "function") {
					vCallBack(vResBody, e);
					commonProgressBar.style.display = "none";
				}
			}
			
			if(vStatObj.mode == "synchronous") {
				commonProgressBar.style.display = "none";
				return vResBody;
			}
			
		} else if(vStatObj.result == "ERROR") {
			if(vStatObj.errCallBack != "") {
				var vErrCallBack = eval(vStatObj.errCallBack);
				if(vErrCallBack && typeof vErrCallBack == "function") {
					vErrCallBack(vResBody, e);
					commonProgressBar.style.display = "none";
				}
			} else {
				if(!gfn_isNull(vResBody.exception) && !gfn_isNull(vResBody.exception.messageKey)) {
					if(vResBody.exception.messageKey.indexOf("error.reqst.session") > -1) {
						alert(vResBody.exception.message);
	
						document.location.href = vResBody.exception.messageParameters;
						return;
						
					} else if(vResBody.exception.messageKey.indexOf("error.reqst.holiday") > -1) {
	
						gfn_popServiceError();
						
						commonProgressBar.style.display = "none";
						
						return;
						
					} else if(vResBody.exception.messageKey.indexOf("login") > -1) {
						alert(vResBody.exception.message);
						
						// 팝업에서 호출 시 바닥화면 로그인페이지로 이동
						var strTarget = (window.name == "iframeDialog") ? "_parent" : "_self";
						
						//폼 정보를 생성합니다.
						objForm = document.createElement("form");
						objForm.id     = "loginFrm";
						objForm.method = "post";
						objForm.action = "/co/coz/selectCrtfctLoginView.do";
						objForm.style.display = "none";
						objForm.target = strTarget;
						document.body.appendChild(objForm);
	
						//필수 파라미터 정보를 생성합니다.
						//팝업 타이틀명
						var objHidden1   = document.createElement("input");
						objHidden1.type  = "hidden";
						objHidden1.name  = "nextUrl";
						objHidden1.value = vResBody.exception.messageParameters;
						objForm.appendChild(objHidden1);
						
						objForm.submit();
						return;
						
					} else if(vResBody.exception.messageKey.indexOf("validation") > -1) {
						alert(vResBody.exception.message);
						commonProgressBar.style.display = "none";
						
						if(typeof checkSubmit == "boolean" && checkSubmit == false) {
							checkSubmit = true;
						}
						
						return;
					} 
				}
				
				var vOpts = new Object();
				vOpts.title = "오류 팝업";
				vOpts.url = "/common/KabExceptionPopup.jsp";
				vOpts.clazz = "pop_w_700";
				vOpts.height = "600";
				vOpts.resizable = true;
				vOpts.dialogArguments = vResBody;
				
				$pop.dialog(vOpts);
				
				commonProgressBar.style.display = "none";
				
				return;
			}
			
			if(vStatObj.mode == "synchronous") {
				commonProgressBar.style.display = "none";
				return vResBody;
			}
			
		}
		
	} catch(e) {
		// 프로그레스바 감추기
		commonProgressBar.style.display = "none";
		
		throw ("comFunc.net._callBackAjax", e);
	}
};

/**
 * function		: comFunc.net.submit(vFrmId, vUrl, vTarget);
 * Description	: 공통 form.submit 함수입니다.
 * 매개변수		: [필수] vFrmId -> applyForm
 * 매개변수		: [필수] vUrl -> /co/cob/selectMainView.do
 * 매개변수		: [선택] vTarget -> _blank
 */
comFunc.net.submit = function(vFrmId, vUrl, vTarget)
{
	
	if(typeof vFrmId == "undefined") {
		throw vFrmId+" Form이 정의되지 않았습니다.";
	}
	
	var retFrmId = '#' + vFrmId;
	
	// 프로그레스바 출력
	var commonProgressBar = (window.name == "iframeDialog") ? parent.document.getElementById("commonProgressBar") : document.getElementById("commonProgressBar");
	commonProgressBar.style.display = "block";
	
	if(typeof gvPgmId != "undefined" && gvPgmId != "") {
		var vAddHidden = "<input type='hidden' value='"+gvPgmId+"' id='gvPgmId' name='gvPgmId'/>";
		$(retFrmId).append(vAddHidden);
	} 

	if( typeof vTarget != "undefined" && vTarget != "multipart" ){
		$(retFrmId).attr({action:vUrl, method:"post", target:vTarget, enctype:"application/x-www-form-urlencoded; charset=UTF-8"}).submit();
	} else if(vTarget == "multipart") {
		$(retFrmId).attr({action:vUrl, method:"post", enctype:"multipart/form-data"}).submit();
	} else {
		$(retFrmId).attr({action:vUrl, method:"post", enctype:"application/x-www-form-urlencoded; charset=UTF-8"}).submit();
	}
	
};


/**
 * function		: comFunc.net.href(vUrl);
 * Description	: 공통 form.href 함수입니다.
 * 매개변수		: [필수] vUrl -> /co/cob/selectMainView.do
 */
comFunc.net.href = function(vUrl)
{
	// 프로그레스바 출력
	var commonProgressBar = (window.name == "iframeDialog") ? parent.document.getElementById("commonProgressBar") : document.getElementById("commonProgressBar");
	commonProgressBar.style.display = "block";
	
	document.location.href = vUrl;
};

/**
 * function		: comFunc.net.load(vObjId, vUrl, vOptions);
 * Description	: 공통 load 함수입니다.
 * 매개변수		: [필수] vObjId -> divList
 * 매개변수		: [필수] vUrl -> /co/cob/selectMainView.do
 * 매개변수		: [선택] vOptions.Param -> {param1:"10", param2:"request"}
 *                       vOptions.CallBack -> fn_applyCallBack();
 */
comFunc.net.load = function(vObjId, vUrl, vOptions)
{
	// 프로그레스바 출력
	var commonProgressBar = (window.name == "iframeDialog") ? parent.document.getElementById("commonProgressBar") : document.getElementById("commonProgressBar");
	commonProgressBar.style.display = "block";
	
	if(typeof vOptions != "undefined") {
		if( typeof vOptions.Param != "undefined") {
			$("#"+vObjId).load(vUrl, vOptions.Param, function(){
				
				if(typeof vOptions.CallBack != "undefined") {
					var vCallBack = eval(vOptions.CallBack);
					if(vCallBack && typeof vCallBack == "function") {
						vCallBack();
					}
				}
				commonProgressBar.style.display = "none";
			});
		} else {
			$("#"+vObjId).load(vUrl, function(){
				
				if(typeof vOptions.CallBack != "undefined") {
					var vCallBack = eval(vOptions.CallBack);
					if(vCallBack && typeof vCallBack == "function") {
						vCallBack();
					}
				}
				commonProgressBar.style.display = "none";
			});
		}
	} else {
		$("#"+vObjId).load(vUrl, function(){
			commonProgressBar.style.display = "none";
		});
	}
	
};

$(function(){
	window.old_alert = window.alert;
	window.alert = function(message, fallback){
	    var startTime = new Date().getTime();
	    old_alert(message);
	    var endTime = new Date().getTime();
	
	    if (endTime - startTime < 100) {
			gfn_popupBlockedAlertMsg();
	    }
	};
	
	window.old_confirm = window.confirm;
	window.confirm = function(message, fallback) {
		var startTime = new Date().getTime();
		var returnVal = old_confirm(message);
	    var endTime = new Date().getTime();

	    if (endTime - startTime < 100) {
	    	gfn_popupBlockedAlertMsg();			
	    }
	    
	    console.log('return returnVal : ' + returnVal);
	    return returnVal;
	};
	
	window.ori_print = window.print;
    window.print = function () {
        if(window.Android != null) {
            window.Android.print();
        }
        else if(navigator.userAgent.toLowerCase().indexOf("applyhome_ios") != -1){
        	window.webkit.messageHandlers.iosMessage.postMessage("fn_printScreen");
        }
        else {
            window.ori_print();
        }
    }
});

