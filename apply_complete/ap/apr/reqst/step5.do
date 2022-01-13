

















 
	
		
	
	



<!DOCTYPE html>
<html lang="ko">
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1, maximum-scale=1" />
	<meta name="format-detection" content="telephone=no" />
	<link rel="icon" type="image/ico" href="https://static.applyhome.co.kr/images/kabhom/common/favicon.ico" />
	<link rel="apple-touch-icon" href="https://static.applyhome.co.kr/images/kabhom/common/phone.png"/>
	<link rel="shortcut icon" href="https://static.applyhome.co.kr/images/kabhom/common/phone.png"/> 
	
	<link rel="stylesheet" type="text/css" href="/css/kabhom/main/hom.css"/>	
	<link rel="stylesheet" type="text/css" href="/css/kabhom/main/scrap/virtual.css"/>
	
	
	<link rel="stylesheet" type="text/css" href="/css/kabhom/main/leftMenu.css"/>
	<!-- 배너 슬라이드 추가링크 -->
	<link rel="stylesheet" href="/css/kabhom/main/vendors/swiper.min.css">
    <script src="/js/kabhom/plugin/swiper.min.js"></script>
   
	<title>청약홈 | APT 청약신청 | 청약자격 조회 신청완료</title>
	
	
	<!-- 운영일 경우에만 -->
	
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-143621263-1"></script>
	
	
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	
	  gtag('config', 'UA-143621263-1');
	</script>
	
	<script src="https://static.applyhome.co.kr/js/kabhom/plugin/jquery.3.1.1.min.js"></script>
	<script src="https://static.applyhome.co.kr/js/kabhom/plugin/jquery-ui.min.js"></script>
	<script src="/js/kabhom/main/site.js"></script>
	
	<!-- 성능제어 Netfunnel, 키보드보안 -->
	<script src="/js/kabhom/com/com.js"></script>
	
	<!-- 성능제어 Netfunnel -->
	<script src="https://static.applyhome.co.kr/netfunnel/netfunnel.js"></script>
	<script src="https://static.applyhome.co.kr/netfunnel/netfunnel_skin.js"></script>
	
	<script>
	document.domain = "applyhome.co.kr";
	
	window.onpageshow = function(event) {
		if(event.persisted) {
			
			window.location.reload(true);
		}
	}
	$(document).ready(function() {
		if(gfn_isMobile()) {
			$('#divTab').css("display","none");
		}
		
		var gnbTree = $("#gnbTree > li > button");
		$(gnbTree).on("click", function() {
				 $(this).parents("li").siblings("li").children("ul").slideUp();
				 $(this).parents("li").siblings("li").children("button").removeClass("on");
				 $(this).siblings("ul").slideToggle();
				 $(this).addClass("on");
		 });
	});
	
		
		var strPopupYn = 'N';
		
		
		if(window.name == "iframeDialog" && strPopupYn == 'Y')
		{
			parent.document.location.href = "/co/coz/selectCrtfctLoginView.do";
		}

		$(function(){
			 
			 /**
			 * Description	: 상단 lnb_wrap setting
			 */
			$navi = $("#naviUl li").last();
			var umid = $navi.data("umid");
			if(umid != null) {
				$navi.append($("#menu"+umid).next("ul").clone());
				$navi.find('a').removeAttr('id');
			}
			
			
			var strMenuId = "menu" + $("#naviUl li").eq(1).data('mid');
			$('#gnb #' + strMenuId).addClass('lnb_active');
			


		});
		
	// Form input을 name=value 형식의 object로 변환	
	$.fn.formToObject = function() {
		var obj = null;
		try {
			if (this[0].tagName && this[0].tagName.toUpperCase() == "FORM") {
				var arr = this.serializeArray();
				if(arr) {
					obj = {};
					$.each(arr, function(){
						obj[this.name] = this.value;
					})
				}
			}
		} catch (e) {
			alert(e.message);
		} finally {
			return obj;
		}
	};
	
	function formToString(form) {
		var formData = new FormData($form);
		
		var object = {};
		formData.forEach(function(value, key){
		    object[key] = value;
		});
		var json = JSON.stringify(object);
	}
	
	function fn_openPopup(url, title) {
//	    if(gfn_isMobile() == false) {
	        window.open(url, title);
//	    }
	}
	
	</script>
</head>
<body>
<div id="wrapper" class="wrapper">
	<div class="navi_tab">
		<a href="#subContent">본문 바로가기</a>
		<a href="#gnbTree">주메뉴 바로가기</a>
	</div>
	<div class="m_navi_tab">
		<a href="#m_gnb">전체메뉴가기</a>
		<a href="#subContent">본문가기</a>
	</div>
	<div id="header">
	<button type="button" class="m_gnb" id="m_gnb"><span class="blind">메뉴보기</span></button>
		<h1 class="t_logo">
			<a href="javascript:$net.href('/co/coa/selectMainView.do');"><img src="https://static.applyhome.co.kr/images/kabhom/common/t_logo.jpg" alt="한국부동산원 청약홈 로고" /></a>
		</h1>
		<div class="header_wrap">
			<div class="h_top_menu_wrap">
				<ul class="h_top_menu">

	
	
					<li><a href="javascript:$net.href('/co/coz/procesCrtfctLogout.do');"><i class="xi-unlock-o"></i> 로그아웃</a></li>
					<li><a href="javascript:NetFunnel.href('/co/cob/selectSubscrptBnkbSbscrbDesc.do', 'ACT_05');"><i class="xi-user-o"></i> 마이페이지</a></li>
	

				</ul>
			</div>
			<ul id="gnb">

<li>
	<a href="#">청약신청</a>
	<ul>
		<li>
			<a href="javascript:$net.href('/ap/aph/reqst/selectSubscrtReqstAptMainView.do');" id="menu639">APT</a>
			<ul>
				<li><a href="javascript:$net.href('/ap/aph/reqst/selectSubscrtReqstAptMainView.do');" id="menu667">특별공급</a></li>
				<li><a href="javascript:$net.href('/ap/aph/reqst/selectSubscrtReqstAptMainView.do?se=01&ty=10');" id="menu100085">1순위/2순위</a></li>
				<li><a href="javascript:$net.href('/ap/aph/reqst/selectSubscrtReqstAptMainView.do?se=04&ty=10');" id="menu100133">무순위/잔여세대</a></li>
				<li><a href="javascript:$net.href('/ap/aph/reqst/selectSubscrtReqstAptMainView.do?se=06&ty=20');" id="menu100164">취소후재공급</a></li>
				<li><a href="javascript:$net.href('/ap/apa/selectAptSpsplySubscrptReqstList.do');" id="menu668">청약신청 내역조회</a></li>
				<li><a href="javascript:$net.href('/ap/apa/selectAptSpsplySubscrptCanclList.do');" id="menu669">청약취소</a></li>
			</ul>
		</li>
		<li>
			<a href="javascript:$net.href('/ap/apb/reqst/selectSubscrtReqstUOMainView.do');" id="menu640">오피스텔/도시형생활주택/민간임대</a>
			<ul>
				<li><a href="javascript:$net.href('/ap/apb/reqst/selectSubscrtReqstUOMainView.do');" id="menu670">청약신청</a></li>
				<li><a href="javascript:$net.href('/ap/apb/selectUrbtyOfctlSubscrptReqstList.do');" id="menu671">청약신청 내역조회</a></li>
				<li><a href="javascript:$net.href('/ap/apb/selectUrbtyOfctlSubscrptCanclList.do');" id="menu672">청약취소</a></li>
			</ul>
		</li>
		<li>
			<a href="javascript:$net.href('/ap/apc/reqst/selectSubscrtReqstPRMainView.do');" id="menu641">공공지원민간임대</a>
			<ul>
				<li><a href="javascript:$net.href('/ap/apc/reqst/selectSubscrtReqstPRMainView.do');" id="menu673">청약신청</a></li>
				<li><a href="javascript:$net.href('/ap/apc/selectPrvateRentSubscrptReqstList.do');" id="menu674">청약신청 내역조회</a></li>
				<li><a href="javascript:$net.href('/ap/apc/selectPrvateRentSubscrptCanclList.do');" id="menu675">청약취소</a></li>
			</ul>
		</li>
	</ul>
</li>
<li>
	<a href="#">민간사전청약</a>
	<ul>
		<li>
			<a href="javascript:$net.href('/ap/apk/selectAPTLttotPblancListView.do');" id="menu100255">분양정보/경쟁률</a>
		</li>
		<li>
			<a href="javascript:$net.href('/ap/apk/reqst/selectSubscrtReqstAptMainView.do');" id="menu100256">청약신청</a>
		</li>
		<li>
			<a href="javascript:$net.href('/ap/apa/selectAptSpsplySubscrptReqstList.do');" id="menu100257">청약신청 내역조회</a>
		</li>
		<li>
			<a href="javascript:$net.href('/ap/apa/selectAptSpsplySubscrptCanclList.do');" id="menu100258">청약취소</a>
		</li>
		<li>
			<a href="javascript:$net.href('/ap/apk/selectAptPrzwinDescList.do');" id="menu100259">당첨조회</a>
		</li>
		<li>
			<a href="javascript:$net.href('/ap/apk/selectAdvSubscrptSchList.do');" id="menu100260">사전청약 예정단지 현황</a>
		</li>
	</ul>
</li>
<li>
	<a href="#">청약당첨조회</a>
	<ul>
		<li>
			<a href="javascript:$net.href('/wa/waa/selectAptPrzwinDescList.do');" id="menu646">APT(아파트)</a>
		</li>
		<li>
			<a href="javascript:$net.href('/wa/wab/selectOfctlUrbtyPrzwinHouseList.do');" id="menu647">오피스텔/도시형생활주택/민간임대</a>
		</li>
		<li>
			<a href="javascript:$net.href('/wa/wac/selectPrvateRentPrzwinHouseList.do');" id="menu648">공공지원민간임대</a>
		</li>
		<li>
			<a href="javascript:$net.href('/wa/wad/selectMxtrHouseDrwtList.do');" id="menu649">주택조합 동호수 추첨결과</a>
		</li>
	</ul>
</li>
<li>
	<a href="#">청약자격확인</a>
	<ul>
		<li>
			<a href="javascript:$net.href('/ra/rab/selectHshldInfoProvdAgreRequestView.do');" id="menu100022">세대구성원 등록/조회</a>
		</li>
		<li>
			<a href="javascript:$net.href('/ra/rab/selectHshldMbInfoProvdAgreView.do');" id="menu100127">세대구성원 동의</a>
		</li>
		<li>
			<a href="javascript:$net.href('/co/cob/selectSubscrptLmttCnList.do');" id="menu100128">청약제한사항확인</a>
		</li>
		<li>
			<a href="javascript:$net.href('/ap/apd/selectHousePosesnList.do');" id="menu100129">주택소유확인</a>
		</li>
		<li>
			<a href="javascript:$net.href('/cu/cud/selectRankCnfrmnIssuView.do');" id="menu100130">청약통장순위확인서발급</a>
		</li>
		<li>
			<a href="javascript:$net.href('/cu/cue/selectRankCnfrmnIssuView.do');" id="menu100131">청약통장순위확인서발급 내역</a>
		</li>
		<li>
			<a href="javascript:$net.href('/ap/apd/selectSubscrptBnkbSbscrbDesc.do');" id="menu100132">청약통장가입내역</a>
		</li>
	</ul>
</li>
<li>
	<a href="#">모집공고단지 청약연습</a>
	<ul>
		<li>
			<a href="javascript:$net.href('/ap/apr/reqst/selectSubscrtReqstAptMainView.do');" id="menu100123">모집공고단지 청약연습</a>
		</li>
		<li>
			<a href="javascript:$net.href('/ra/raa/selectAptSpsplyPreparSubscrptReqstList.do');" id="menu100124">모집공고단지 청약연습 내역</a>
		</li>
		<li>
			<a href="javascript:$net.href('/ap/apg/selectAddpntCalculatorView.do');" id="menu100125">청약가점계산기</a>
		</li>
		<li>
			<a href="javascript:$net.href('/ap/app/reqst/selectSubscrtReqstAptMainView.do');" id="menu100126">청약가상체험</a>
		</li>
	</ul>
</li>
<li>
	<a href="#">청약일정 및 통계</a>
	<ul>
		<li>
			<a href="javascript:$net.href('/ai/aib/selectSubscrptCalenderView.do');" id="menu651">청약캘린더(청약일정)</a>
		</li>
		<li>
			<a href="javascript:$net.href('/cu/cuc/selectSubscrptAllimiView.do');" id="menu652">청약알리미 신청</a>
		</li>
		<li>
			<a href="javascript:$net.href('/ai/aia/selectAPTLttotPblancListView.do');" id="menu650">분양정보/경쟁률</a>
			<ul>
				<li><a href="javascript:$net.href('/ai/aia/selectAPTLttotPblancListView.do');" id="menu686">APT(아파트)</a></li>
				<li><a href="javascript:$net.href('/ai/aia/selectOtherLttotPblancListView.do');" id="menu687">오피스텔/도시형/(공공지원)민간임대</a></li>
				<li><a href="javascript:$net.href('/ai/aia/selectAPTRemndrLttotPblancListView.do');" id="menu818">APT무순위/잔여세대</a></li>
			</ul>
		</li>
		<li>
			<a href="javascript:$net.href('/ai/aie/selectSubscrptBnkbAllSbscrbStusView.do');" id="menu654">청약통계</a>
			<ul>
				<li><a href="javascript:$net.href('/ai/aie/selectSubscrptBnkbAllSbscrbStusView.do');" id="menu688">청약통장 전체 가입현황</a></li>
				<li><a href="javascript:$net.href('/ai/aie/selectSubscrptBnkbAcctoSbscrbStusView.do');" id="menu689">청약통장 통장별 가입현황</a></li>
				<li><a href="javascript:$net.href('/ai/aie/selectSubscrptBnkbSbscrbPdAcctoStusView.do');" id="menu690">청약통장 가입기간별 가입현황</a></li>
			</ul>
		</li>
	</ul>
</li>
<li>
	<a href="#">청약제도안내</a>
	<ul>
		<li>
			<a href="javascript:$net.href('/ar/ara/selectSubscrptIntroHouseView.do');" id="menu655">APT청약안내</a>
			<ul>
				<li><a href="javascript:$net.href('/ar/ara/selectSubscrptIntroHouseView.do');" id="menu692">청약주택</a></li>
				<li><a href="javascript:$net.href('/ar/ara/selectSubscrptIntroBnkbView.do');" id="menu693">청약통장</a></li>
				<li><a href="javascript:$net.href('/ar/ara/selectSubscrptIntroQualfView.do');" id="menu694">청약자격</a></li>
				<li><a href="javascript:$net.href('/ar/ara/selectSubscrptIntroSpetialView.do');" id="menu695">특별공급</a></li>
				<li><a href="javascript:$net.href('/ar/ara/selectSubscrptIntroHowToReqstView.do');" id="menu696">청약신청방법</a></li>
				<li><a href="javascript:$net.href('/ar/ara/selectSubscrptIntroPreawnerSlctnView.do');" id="menu697">당첨자 선정</a></li>
				<li><a href="javascript:$net.href('/ar/ara/selectSubscrptIntroRemndrHshldView.do');" id="menu761">무순위/잔여세대</a></li>
				<li><a href="javascript:$net.href('/ar/ara/selectSubscrptIntroAdvSubscrptView.do');" id="menu100265">사전청약</a></li>
			</ul>
		</li>
		<li>
			<a href="javascript:$net.href('/ar/arb/selectPROUSubscriptionHouseInfoView.do');" id="menu656">민간임대/오피스텔/도시형 청약안내</a>
			<ul>
				<li><a href="javascript:$net.href('/ar/arb/selectPROUSubscriptionHouseInfoView.do');" id="menu698">청약주택</a></li>
				<li><a href="javascript:$net.href('/ar/arb/selectPROUSubscriptionReqstMthInfoView.do');" id="menu699">청약신청방법</a></li>
				<li><a href="javascript:$net.href('/ar/arb/selectPROUSubscrptIntroPreawnerSlctn.do');" id="menu700">당첨자 선정</a></li>
			</ul>
		</li>
		<li>
			<a href="javascript:$net.href('/ar/arb/selectsubscriptionDepositInfoView.do');" id="menu657">주택청약 상품정보</a>
		</li>
		<li>
			<a href="javascript:$net.href('/ai/aic/selectSpecltSubscrptRndAreaList.do');" id="menu100121">규제지역정보</a>
		</li>
		<li>
			<a href="javascript:$net.href('/ar/ard/selectSubscriptVocabularyView.do');" id="menu658">주택청약 용어설명</a>
		</li>
	</ul>
</li>
<li>
	<a href="#">청약소통방</a>
	<ul>
		<li>
			<a href="javascript:$net.href('/cu/cua/selectNoticeListView.do');" id="menu660">공지사항</a>
		</li>
		<li>
			<a href="javascript:$net.href('/cu/cub/selectFAQList.do');" id="menu661">자주묻는질문</a>
		</li>
		<li>
			<a href="javascript:$net.href('/wa/waa/selectAptPrzwinCnfrmnList.do');" id="menu100156">당첨사실 조회하기(아파트)</a>
		</li>
		<li>
			<a href="javascript:$net.href('/rs/rsa/selectResaleListView.do');" id="menu100174">분양권 정보(전매제한등) 조회하기</a>
		</li>
	</ul>
</li>

			</ul>
			<div class="foot_wrap">
				<ul class="foot_link">
					<li><button type="button" id="btn_sitemap">- 사이트맵</button></li>
					<li><a href="javascript:$net.href('/co/coz/selectMobileUseInfoView.do');">- 모바일 사용에 대한 안내</a></li>
					<li><a href="javascript:$net.href('/co/coz/selectIndvdlinfoPolicyView.do');"><b class="color_blue">- 개인정보처리방침</b></a></li>
					<li><a href="javascript:$net.href('/co/coz/selectMailColctDenialView.do');">- 이메일 추출방지정책</a></li>
					<li><a href="javascript:$net.href('/co/coz/selectSecurityProgrmView.do');">- 보안프로그램</a></li>
					<li><a href="javascript:$net.href('/co/coz/selectWebAccessibilityView.do');">- 웹접근성 안내</a></li>
					<li><a href="javascript:$net.href('/co/coz/selectCrtfctCopyView.do');">- 공동인증서 관리</a></li>
					<li><a href="http://remote.kais.kr" target="_blank">- 원격연결</a></li>
				</ul>
				
				<div class="webbanner">
					  <div class="swiper-container">
                        <div class="swiper-wrapper" style="height: auto; text-align: center">
                          <div class="swiper-slide"><a href="#" onclick="fn_openPopup('https://youtu.be/VIRgvSIxL_Y', '주택 임대차 계약 신고 꼭 하세요');"><img src="https://static.applyhome.co.kr/images/kabhom/sub/webbanner7.jpg" alt="주택 임대차 계약 신고 꼭 하세요"></a></div>
                          <div class="swiper-slide"><a href="#" onclick="fn_openPopup('http://www.molit.go.kr/policy/capital/cap_1_01.jsp', '공공주도 3080 플러스 대도시권 주택공급 획기적 확대방안');"><img src="https://static.applyhome.co.kr/images/kabhom/sub/webbanner5.jpg" alt="공공주도 3080 플러스 대도시권 주택공급 획기적 확대방안"></a></div>
                          <div class="swiper-slide"><a href="#" onclick="fn_openPopup('http://www.reb.or.kr/kab/home/notice/noticeDetail.jsp?sBoardIdx=045005125001035026124', '한국부동상원 주택상가건물 임대차분쟁조정위원회');"><img src="https://static.applyhome.co.kr/images/kabhom/sub/webbanner6.jpg" alt="한국부동상원 주택상가건물 임대차분쟁조정위원회"></a></div>
                          <div class="swiper-slide"><a href="#" onclick="fn_openPopup('https://www.rservice.or.kr:8443/rsii/main/main.do', '우수 부동산서비스 사업자 인증제도');"><img src="https://static.applyhome.co.kr/images/kabhom/sub/webbanner4-1.jpg" alt="우수 부동산서비스 사업자 인증제도"></a></div>
                          <div class="swiper-slide"><a href="#" onclick="fn_openPopup('https://www.rservice.or.kr:8443/rsii/main/main.do', '우수 부동산서비스 사업자 인증제도');"><img src="https://static.applyhome.co.kr/images/kabhom/sub/webbanner4-2.jpg" alt="부동산 서비스 이제 걱정없이 편리하게"></a></div>
                          <div class="swiper-slide"><a href="javascript:$net.href('/co/coz/kabAppInfo.do');" title="부동산정보앱 모바일서비스로 가기"><img src="https://static.applyhome.co.kr/images/kabhom/sub/webbanner1.jpg" alt="부동산정보앱 모바일서비스로 가기"></a></div>
                        </div>
                        <!-- Add Pagination -->
    					<div class="swiper-pagination"></div>
                      </div>
				</div>
				<div class="custom_info" style="padding: 0px">
					<dl style="padding: 5px 20px">
						<dt>청약문의</dt>
						<dd>
							<a href="tel:1644-7445" class="pcTel"><small>1644</small>-<b>7445</b></a>
							<p><b>월~금</b> 09:00 ~ 17:30</p>
						</dd>
					</dl>
					<div style="padding: 0px 0px 5px 18px;">상담내용은 법적효력이 없으니, 참고용으로 활용해 주시기 바랍니다.</div>
				</div>
				<div class="foot_info">
					<p>(우)41068 대구광역시 동구 이노밸리로 291(신서동) <a href="http://www.kab.co.kr" target="_blank" title="[새창으로 열립니다]">한국부동산원 <i class="xi-external-link"></i></a></p>
					<span>Copyright ⓒ 2019 Korea Real Estate Board, All rights reserved.<b class="color_tp">[sv : ah1_8]</b></span>
				</div>
				<div class="h_top_link2">
					<a href="javascript:$net.href('/co/coa/selectMainView.do');" class="apply2">청약Home</a>
					<a href="javascript:$net.href('/kabbnk/cn/cna/selectMainView.do');" class="bank2">은행 담당자</a>
					<a href="javascript:$net.href('/kabbiz/cm/cma/selectMainView.do');" class="busi2">사업주체</a>
				</div>	
			</div>
		</div>
		<div class="gnb_bg"></div>
	</div>
	<div class="body_bg"></div>

	
	<div id="sitemap">
		<div class="guide">
			<div class="site_box">
				<ul class="load_nav">
				</ul>
				<button type="button" class="close_btn" onclick="javascript:slideUp('sitemap','btn_sitemap');"><i class="xi xi-close"></i><span class="blind">사이트맵 닫기</span></button>
			</div>
		</div>
	</div>
	

	<div id="content" class="sub_content">
		<div class="sub_visu apply">
			<div class="sub_visu_box">
				<div class="sub_visu_txt">
					<h5>
				
					
						모집공고단지 청약연습
					
					
				
					</h5>
					<p>50여년간 우리나라 부동산 가치의 기준을 세워 온 한국부동산원 주택청약 서비스입니다.</p>
					
					<div class="lnb_wrap">
						<ul class="lnb_box" id="naviUl">
							<li><a href="javascript:$net.href('/co/coa/selectMainView.do');"><i class="xi-home"></i><span class="blind">홈으로</span></a></li>
							<li class="mo_none" data-mid="100122"><i class="xi-angle-right-thin"></i> 모집공고단지 청약연습</li>
					
						
						
							<li class="" data-mid="100123" data-umid="100122">
								<i class="xi-angle-right-thin"></i> 모집공고단지 청약연습
							</li>
						
						
						
						</ul>
					</div>
				</div>
			</div>
		</div>
		
<!-- 배너 슬라이드 추가 스크립트 -->
    <script>
    var swiper = new Swiper('.swiper-container',{
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
  </script> 
 	
		<div class="sub_content_box" id="subContent">

            
            
            

	<div class="apply_step_box">
        <h5>

    
        
    
        
            <span class="color_blue">모집공고단지 청약연습</span>  
        
            
        
            
            
            
            
            
        
    

	    </h5>
	     
	    
	    <div class="apply_step_list_box">
	        <ul id="ulStep" class="apply_step_list virtual">
	            <li id="liStep1">
	                <p><b><span>1</span></b></p> 
	                <em>주택선택 및 유의사항확인</em>
	            </li>
                
	            <li id="liStep2">
	                <p><b><span>2</span></b></p>
	                <em>
	                
                        
                    
		                
                        
		                
		                  주택형 선택
		                
	                
	                </em>
	            </li>
                
	            <li id="liStep3">
                    <p><b><span>3</span></b></p>                
           
               
               
                    <em>청약자격 확인 및 입력</em>
               
                                            
	            </li>
                
                <li id="liStep4">
                    <p><b><span>4</span></b></p> 
                    <em>청약신청 내역확인(전자서명)</em>
                </li>
                
	            <li id="liStep5">
	                <p><b><span>5</span></b></p>
	                
	                    <em>모집공고단지청약연습 청약완료</em>
	                    
	                 
	            </li>
	        </ul>
	    </div>
	    
	</div>

	<script type="text/javascript">
	
	$(function(){
		gfn_hideCmmnProgressBar();
		var nowStep = "5";
		$("#liStep"+nowStep).addClass("step_active").prevAll().addClass("step_prev").find("p > b > span").html('완료');
	});	
	</script>
            
             
			<h5 class="sub_tit">청약완료 (전자서명)</h5>
			
			<div class="round_bg_box ic_tbl_box">
				<dl>
					<dt><img src="https://static.applyhome.co.kr/images/kabhom/member/ic_finish.png" alt="완료아이콘"></dt>
					<dd>
                        <p>청약신청이 완료되었습니다!</p>
                        <span>당첨자 발표일은 <b class="color_org">2022년 01월 24일</b>입니다.</span>
                    
		
			
				<p>모집공고단지 청약연습 신청이 완료되었습니다!</p>
				
				<span>청약접수일까지 모집공고단지 청약연습 청약신청 내역조회를 할 수 있습니다.</span>
				<span>모집공고단지 청약연습 본청약 신청일은 <b class="color_org">2022-01-14</b> 입니다.</span>
			
			
			
            
			
		
					</dd>
				</dl>
			</div>

			<div class="btn_box">
				<button type="button" class="btn_cancel" onclick="javascript:$net.href('/co/coa/selectMainView.do');">홈으로 <img src="https://static.applyhome.co.kr/images/kabhom/sub/btn_right_fff.png" alt=""></button>
				<button type="button" class="btn_submit" onclick="javascript:$net.href('/ra/raa/selectAptRankPreparSubscrptReqstList.do');">신청내역 조회하기 <img src="https://static.applyhome.co.kr/images/kabhom/sub/btn_right.png" alt=""></button>
			</div>
			
			<form name="reqstForm" id="reqstForm" method="POST">
				<input type="hidden" name="rceptNo" id="rceptNo" value="1055510"/>
			</form>
			
			
		
			<b class="sub_tit_20">주의사항</b>
			<p class="mt_5">청약신청 시 틀리기 쉬운 사항을 다음과 같이 안내 하오니  내역 확인 후 실제와 다르게 입력된 항목이 있다면 청약취소 후 다시 청약하시기 바랍니다.</p>
			<p>(아래의 내용은 참고사항이며, 청약내역 입력 책임은 청약자 본인에게 있습니다.)</p>

			<table class="tbl_st mt_30 color_gray">
				<caption class="blind">청약 점수 내역이 나와있는 테이블입니다.</caption>
				<colgroup>
					<col style="width:20%">
					<col style="width:80%">
				</colgroup>
				<thead>
					<tr>
						<th scope="col">입력(선택)하신 내용</th>
						<th scope="col">확인사항</th>
					</tr>
				</thead>
				<tbody>
				
					<tr>
						<th scope="row">전입제한일 충족</th>
						<td>
							<p>귀하는 별도의 거주제한기간이 있는 지역에서 공급하는 주택에 청약하셨습니다. 해당 기간을 만족하지 못한 분이라면 기타지역 거주자로 청약해야 합니다.</p>
						</td>
					</tr>
				
				
					<tr>
						<th scope="row">부양가족 수</th>
						<td>
							<ul class="bul_list line_list">
								<li>부양가족 수는 본인을 제외한 인원을 입력해야 합니다.</li>
								<li>부양가족은 동일 주민등록표등본(배우자 분리세대 포함)에 등재된 배우자, 직계비속(미혼인 자녀), 직계존속(배우자의 직계존속 포함) 중에서만 될 수 있습니다.</li>
								<li>직계존속(부모 등)의 경우 청약신청자가 세대주이며 동일 주민등록 등본에 3년이상 등재된 경우 해당됩니다.</li>
								<li>만 30세 이상의 자녀는 동일 주민등록 등본에 1년이상 등재된 경우 해당됩니다. (자세한 사항은청약제도-청약가점 계산하기  참조)</li>
							</ul>
						</td>
					</tr>
				
				
                    	
					<tr>
						<th scope="row">투기과열지구 또는<br>청약과열지역<br>(1순위 제한)</th>
						<td>
							<p>귀하는 ‘투기과열지구 또는 청약과열지역’의 주택에 1순위로 청약하셨습니다.</p>
							<p>귀하가 아래 중 하나에 해당되시면 1순위로 청약할 수 없습니다. (2순위로 청약)</p>
							<table class="tbl_st mt_30 tbl_bg_n color_gray">
								<caption class="blind">1순위 제한이 나와있는 테이블입니다.</caption>
								<colgroup>
									<col style="width:50%">
									<col style="width:50%">
								</colgroup>
								<thead>
									<tr>
										<th scope="col">민영주택</th>
										<th scope="col">국민주택</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<ul class="bul_list line_list">
												<li>세대주가 아닌 자</li>
												<li>과거 5년 이내에 다른 주택에 당첨된 자의 <button type="button" class="btn_voca btnPopWord" data-popword="householdLay"><span>세대</span></button>에 속한 자</li>
												<li>2주택(분양권을 포함하며, 토지임대주택을 공급하는 경우에는 1주택)이상을 소유한 <button type="button" class="btn_voca btnPopWord" data-popword="householdLay"><span>세대</span></button>에 속한 자</li>
											</ul>
											<p class="mt_5"><b>* 분양권등</b> : 주택소유로 보는 경우 등 세부사항은 <button type="button" class="btn_voca btnPopWord" data-popword="rightSellHouseLay"><span>분양권등</span></button> 참조</p>
										</td>
										<td>
											<ul class="bul_list line_list">
												<li>세대주가 아닌 자</li>
												<li>과거 5년 이내에 다른 주택에 당첨된 자가 속해있는 <button type="button" class="btn_voca btnPopWord" data-popword="noHouseMemberLay"><span>무주택세대구성원</span></button></li>
											</ul>
										</td>
									</tr>
								</tbody>
							</table>
							<small class="dis_b mt_5">*동일한 주민등록표 상에 함께  등재된 배우자의 직계존속 및 직계비속의 배우자도 국민 또는민영주택에 관계없이 세대에 포함됩니다. </small>
						</td>
					</tr>
                    
					<tr>
						<th scope="row">투기과열지구 또는<br>청약과열지역<br>(재당첨 제한)</th>
						<td>
							<p>귀하는 ‘투기과열지구 또는 청약과열지역’의 주택에 청약하셨습니다.</p>
							<p>- 민영주택(분양가 상한제 미적용 주택 포함)에 청약 시에도 재당첨 제한을 적용받습니다.</p>
							<p>* 청약자의 세대에 속한 자의 재당첨 제한 여부는 해당 세대에 속한 자의 명의 각각의 인증서로 로그인하여 ‘청약자격확인-청약제한사항 확인’ 메뉴에서 확인할 수 있습니다.</p>
						</td>
					</tr>
					
				</tbody>
			</table>
		
		</div>
		
<script>
	
	$(function(){
		gfn_hideCmmnProgressBar();
		
		
		$(".btnPopWord").click(function(){
			var pId = $(this).data("popword");
			var pTit = "";
			if($(this).children('span').length > 0){
				pTit = $(this).children('span').text();
			} else {
				pTit = $(this).text();
			}
			gfn_popupWordDc(pId, pTit);
		});
	});	
	
</script>		



	</div>
</div>
<div id="divForPopup"></div>


<div class="loding_wrap" id="commonProgressBar">
	<div class="lod_wrap_box">
		<div class="lod_box">
			<i class="xi-spinner-2 xi-spin"></i>
			<p>처리중입니다.</p>
		</div>
	</div>
</div>

	
<script>
	var gvPgmId = "API10M06";
</script>
<script src="/js/kabhom/com/hom.core.js"></script>
<script src="/js/kabhom/util/hom.all.js"></script>
</body>
</html>
	    