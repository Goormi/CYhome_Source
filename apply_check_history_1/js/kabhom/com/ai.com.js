/**
 * ai.com.js
 * 청약신청시 사용하는 공통 스크립트
 */

/**
 * 청약신청시 상세설명클릭 팝업 표시
 * @param obj
 * @returns
 */	     
function showDetailPop(obj) {
    $("#" + $(obj).data("pop") + "").show().focus();
    $(".current").removeClass('current');
    $(obj).addClass("current");
};

/**
 * 청약신청시 상세설명 팝업 닫기
 * @param obj
 * @returns
 */
function hideDetailPop(obj) {
	$(obj).parents(".popWrap").hide();
	$(".current").focus();
}