var G_ENV_TYPE = "REAL";

//텍스트박스 maxlength 체크함수
//html5, 핸드폰에서 maxlength 제한이 안걸리는 경우가 있어 키 입력시 maxlength 체크
function chkMaxLen(obj) {
	//obj.value.replace(emogiRange,'');
	if (obj.value.length > obj.maxLength) {
		obj.value = obj.value.slice(0,obj.maxLength);
	}
}

//Tab 입력될 경우 Space로 변환 
function replaceTabToSpace(obj) {
	if (/\t/gi.test($(obj).val())) {
		var convStr = $(obj).val().replace(/\t/gi," ");
		$(obj).val(convStr);
	}
}