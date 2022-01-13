




















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
   
	<title>청약홈 | APT 청약신청 | 연락처 등 입력 및 청약신청 내역확인</title>
	
	
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
					<span>Copyright ⓒ 2019 Korea Real Estate Board, All rights reserved.<b class="color_tp">[sv : ah2_2]</b></span>
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
		var nowStep = "4";
		$("#liStep"+nowStep).addClass("step_active").prevAll().addClass("step_prev").find("p > b > span").html('완료');
	});	
	</script>
                

				<div class="apply_result_chk">
                    <div class="sub_tit">청약신청 내역확인
	                    <div class="explan">
		                    <img src="https://static.applyhome.co.kr/images/kabhom/sub/sub_detail_txt.png" alt="상세설명">
		                 <div id="explan" class="line_box add_line_box">
                            <div class="line_content" style="font-size: 1rem">
                                <p>청약신청 내역을 확인바랍니다. 이상이 없는 경우, 아래의 ‘다음’ 버튼을 클릭하여 청약신청을 완료하여 주십시오.</p>
                            </div>
                        </div>
		                </div>
                       
                    </div>
                    
                    <h5 class="sub_square mb_10 mt_30"> 청약신청 내역 <span class="color_org">(현재 청약신청 미완료 상태임)</span></h5>
                    <table class="tbl_st tbl_row mt_10 mTbl type04">
                        <caption class="blind"> 청약신청 내역이 나와있는 테이블입니다.</caption>
                        <colgroup>
                            <col style="width:20%">
                            <col style="width:30%">
                            <col style="width:20%">
                            <col style="width:30%">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th scope="row">성명</th>
                                <td>김도연</td>
								<th scope="row" class="iemNm" data-no="3">거주구분</th>
								<td class="iemVal" data-no="3">해당지역</td>
                            </tr>
                            <tr>
                                <th scope="row">주민등록번호</th>
								<td>970210-*******</td>
								<th scope="row">청약신청일</th>
								<td>2022년 01월 14일</td>
                            </tr>
                            <tr>
                                <th scope="row" class="iemNm" data-no="1">주택명</th>
								<td class="iemVal" data-no="1">래미안 포레스티지</td>
								<th scope="row" class="iemNm" data-no="2">주택형</th>
								<td class="iemVal" data-no="2">059.9836A</td>
								
                            </tr>
                        
                            <tr>
                                <th scope="row" class="iemNm" data-no="6">청약신청순위</th>
								<td class="iemVal" data-no="6">1순위</td>
								<th scope="row" class="iemNm" data-no="7">주택처분서약</th>
								<td class="iemVal" data-no="7">해당사항없음(무주택자)</td>
                            </tr>
                        
						
							
								<tr>
									<th scope="row" class="iemNm" data-no="4">장기복무군인 신청</th>
									<td colspan="3" class="iemVal" data-no="4">해당사항 없음</td>
								</tr>
							
							
						
						
                        						
                        
                                             
                        						
                        </tbody>
                    </table>
                    
                    	
				<table class="tbl_st tbl_col tbl_row tbl_center mt_30 mTbl type12">
						<caption class="blind">가점제 청약신청 내역이 나와있는 테이블입니다.</caption>
						<colgroup>
							<col style="width:20%">
							<col style="width:30%">
							<col style="width:30%">
							<col style="width:auto">
						</colgroup>
						<thead>
							<tr>
								<th scope="col" colspan="2">구분</th>
								<th scope="col">선택항목</th>
								<th scope="col">점수</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="rowgroup" rowspan="3">가점항목</th>
								<td>무주택기간(최고32점)</td>
								
									
									
										<td>1년 미만</td>
									
																
								<td>2점</td>
							</tr>
							<tr>
								<td>부양가족수(최고35점)</td>
								<td>2명</td>
								<td>15점</td>
							</tr>
							<tr>
								<td>청약통장 가입기간(최고17점)</td>
								<td>7년 이상 ~ 8년 미만</td>
								<td>9점</td>
							</tr>
							<tr style="background-color:#edf4ff; font-size:1.625rem; font-weight:normal;" class="mTotal">
								<th scope="row" colspan="2">총점</th>
								<td class="br_none"></td>
								<td><b class="color_blue">26</b><small class="xsmall">/ 84점</small></td>
							</tr>
						</tbody>
				</table>
				
                </div>

                <ul class="inde_txt blue_bg_round txt_l">
                    <li>* 주택형 = 주거전용면적(type이 있는 경우 type 포함)</li>
                    
                </ul>
			
			                
                <form name="reqstForm" id="reqstForm" method="POST">
				<div class="info_add_wrap mt_50">
					
					<h5 class="sub_tit mb_10">
						최하층 우선배정 신청 <span class="color_red">(선택사항)</span>
						<span class="detail_btn"><a href="#a" title="최하층 우선배정 신청 설명보기"><img src="https://static.applyhome.co.kr/images/kabhom/apply_step/detail_chk.png" alt="상세설명"></a></span>
						<div id="layer01" class="detail_layer pop" tabindex="0">
							<div class="line_box" style="margin: 0">
								<div class="line_content">
								    <ul class="bul_list bul_no">
										<li><small class="mini">모집공고일 현재 아래의 2가지 중 하나에 해당되고 최하층 배정을 희망하는 경우 신청하시기 바랍니다.</small></li>
										<li><small class="mini">1번과 2번 모두에 해당하는 경우에는 1번 신청자에 대해서 우선적으로 최하층 배정하오니 1번을 선택하여 주시기 바랍니다.</small></li>
									</ul>
									<small class="color_blue dis_b mt_10">*최하층 우선배정 여부는 당첨확률에 영향을 미치지 않으며, 당첨자의 동호수 배정 시에만 반영됩니다.</small>
									<small class="dis_b">*최하층 : 1층, 1층이 없는 경우 최저층</small>
						        </div>
								<button type="button" class="detail_close">
								    <i class="xi xi-close-thin"></i><span class="blind">팝업 닫기</span>
								</button>
						    </div>
						</div>
					</h5>
	
					<div class="agr_wrap">
						<div class="chk_wrap rtbl_input mt_30">
							<p>1.청약신청자와 <button type="button" class="btn_voca btnPopWord" data-popword="householdLay"><span>세대구성원</span></button> 중 만 65세 이상인 자 또는 장애인이 있는 경우
								<small><span class="color_blue">(기준일 : 1956년 12월 31일 이전 출생)</span></small>
							</p>
							<div class="check_st">
								<input type="checkbox" name="lwstflPrasgnReqstAt" id="atY" value="Y">
								<label for="atY">신청</label>
							</div>
						</div>
					</div>
					<div class="agr_wrap">
						<div class="chk_wrap rtbl_input mt_30">
							<p>2.청약신청자가 세명 이상의 미성년 자녀를 둔 경우
								<small><span class="color_blue">(기준일 : 2003년 01월 01일 이후 출생)</span></small>
							</p>
							<div class="check_st">
								<input type="checkbox" name="lwstflPrasgnReqstAt" id="atT" value="T">
								<label for="atT">신청</label>
							</div>
						</div>
					</div>
				
					<div class="sub_tit mb_10 mt_30">
						연락주소 입력
						<span class="detail_btn"><a href="#a" title="연락주소 입력 설명보기"><img src="https://static.applyhome.co.kr/images/kabhom/apply_step/detail_chk.png" alt="상세설명"></a></span>
						<div id="layer02" class="detail_layer pop" tabindex="0">
							<div class="line_box" style="margin: 0">
								<div class="line_content">
								    <ul class="bul_list bul_no">
										<li><small class="mini">당첨(예비당첨)될 경우 사업주체로부터 계약관련 내용 등을 안내받을 연락처를 입력하시기 바랍니다.</small></li>
										<li><small class="mini">“거주지 입력” 단계에서 선택한 주민등록표등본상 주소지와 다른 연락처를 입력하셔도 됩니다.</small></li>
										<li><small class="mini">사업주체에서 입주대상자 자격 확인 등을 위하여 필요시 연락드릴 수 있는 전화번호를 기재하시기 바랍니다.</small></li>
										<li><small class="mini">휴대번호를 입력하고 SMS 통지에 동의하신 경우에는 당첨(예비)자에 한하여 당첨사실을 SMS로 통지하여 드립니다.</small></li>
										<li class="color_blue"><small class="mini">본 서비스는 청약신청자의 편의도모를 위한 부가서비스입니다. 당첨여부는 사업주체 또는 한국부동산원 청약홈페이지에서 확인 바랍니다.</small></li>
									</ul>
						        </div>
								<button type="button" class="detail_close">
								    <i class="xi xi-close-thin"></i><span class="blind">팝업 닫기</span>
								</button>
						    </div>
						</div>
					</div>
					<div class="check_st2 ml0 mt_10">
						<input type="checkbox" id="chk_adr">
						<label for="chk_adr" class="color_blue">주소직접입력 (도로명주소가 검색되지 않는 경우에만 직접 입력하시기 바랍니다.)</label>
					</div>
					<table class="tbl_st tbl_row adr_tbl mt_10 mTbl type04">
						<caption class="blind">연락주소 입력</caption>
						<colgroup>
							<col style="width:10%">
							<col style="width:28%">
							<col style="width:10%">
							<col style="width:auto">
						</colgroup>
						<tbody>
							<tr>
								<th scope="row"><label for="contactAdresZip">우편번호</label></th>
								<td>
									<input type="text" name="contactAdresZip" id="contactAdresZip" class="adr_mid" disabled="disabled" value="" maxlength="5">
									<button type="button" id="btnAdres" style=" width: 65px;" title="주소검색이 새로운 창으로 열립니다.">주소검색</button>
								</td>
								<th scope="row"><label for="contactAdres">주소</label></th>
								<td><input type="text" name="contactAdres" id="contactAdres" placeholder="최대 100자" disabled="disabled" value="" maxlength="100"></td>
							</tr>
							<tr>
								<th scope="row"><label for="contactDetailAdres">상세주소</label></th>
								<td colspan="3"><input type="text" name="contactDetailAdres" id="contactDetailAdres" placeholder="최대 50자" maxlength="50"></td>
							</tr>
							<tr>
								<th scope="row"><label for="contactDetailAdres">연 락 처</label></th>
								<td colspan="3">
									<div style="overflow:hidden; float:left;">
										<label for="tel01" class="blind">연락처 앞 자리</label><input type="tel" id="tel01" maxlength="3" style="width: 100px; max-width: 29%;">
										<span style="width:5%; text-align:center; line-height:34px;">-</span>
										<label for="tel02" class="blind">연락처 가운데 자리</label><input type="tel" id="tel02" maxlength="4" style="width: 100px; max-width: 29%;">
										<span style="width:5%; text-align:center; line-height:34px;">-</span>
										<label for="tel03" class="blind">연락처 마지막 자리</label><input type="tel" id="tel03" maxlength="4" style="width: 100px; max-width: 29%;">
									</div>
									<div style="margin-top:5px; display:inline-block; float:left;" class="add_box">
										<p class="radio_st2">
											<input type="radio" name="smsNtice" id="smsY" value="Y" checked="checked">
											<label for="smsY">SMS통지에 동의함</label>
										</p>
										<p class="radio_st2">
											<input type="radio" name="smsNtice" id="smsN" value="N">
											<label for="smsN">SMS통지에 동의하지 않음</label>
										</p>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<input type="hidden" name="processTm" id="processTm" value="84816418038814725"/>
				<input type="hidden" name="cttpcHpNo" id="cttpcHpNo" value=""/>
				<input type="hidden" name="houseManageNo" id="houseManageNo" value="2021001007"/>
				<input type="hidden" name="pblancNo" id="pblancNo" value="2021001007"/>
			</form>
		
		
			<form name="reqstSerialForm" id="reqstSerialForm" method="POST">
				<input type="hidden" name="서비스" value="주택 청약신청"/>
			
				
				
					<input type="hidden" name="청약신청순위" value="1"/>
				
				
					<input type="hidden" name="주택명" value="래미안 포레스티지"/>
					<input type="hidden" name="주택형" value="059.9836A"/>
					<input type="hidden" name="거주구분" value="해당지역"/>
					<input type="hidden" name="장기복무군인신청" value="해당사항 없음"/>
					
						
						
							<input type="hidden" name="최하층우선배정신청" id="lwstflPrasgnReqstAtNm" value=""/>
						
					
				 		
					<input type="hidden" name="무주택기간" value="1년 미만"/>
					<input type="hidden" name="부양가족수" value="2명"/>
					<input type="hidden" name="청약통장가입기간" value="7년 이상 ~ 8년 미만"/>
					<input type="hidden" name="총점" value="26점"/>
				
			</form>   
			<div class="btn_box">
                   <button type="button" class="btn_cancel" id="btnSubmitPre"><img src="https://static.applyhome.co.kr/images/kabhom/sub/btn_left.png" alt=""> 이전</button>
                   <button type="button" class="btn_submit" id="btnSubmitNext">다음 <img src="https://static.applyhome.co.kr/images/kabhom/sub/btn_right.png" alt=""></button>
               </div>
               
		</div>    

        
        

 
 

<div id="pop_info2" style="display:none;" tabindex="0">
    <div class="pop_info_cell">
        <div class="pop_box" style="width:570px; height:420px; overflow: auto; ">
            <div class="pop_title">
                <h5>주소검색</h5>
                <button type="button" onclick="javascript:fn_popClose('pop_info2')">
                    <i class="xi xi-close-thin"></i><span class="blind">팝업 닫기</span>
                </button>
            </div>
            
            <div class="pop_cont" style="padding:0px 10px 10px">        
				<div class="addrPop">
				<form name="searchForm" id="searchForm" method="post">
				    <input type="hidden" id = "currentPage" name="currentPage" value="1"/> <!-- 요청 변수 설정 (현재 페이지. currentPage : n > 0) -->
				    <input type="hidden" id = "countPerPage" name="countPerPage" value="10"/><!-- 요청 변수 설정 (페이지당 출력 개수. countPerPage 범위 : 0 < n <= 100) -->
				    <input type="hidden" name="resultType" value="json"/> <!-- 요청 변수 설정 (검색결과형식 설정, json) --> 
				    <input type="hidden" name="confmKey" value="U01TX0FVVEgyMDIwMDkxNjExMTI0NzExMDE5NDc="/><!-- 요청 변수 설정 (승인키) -->
				    
				    <input type="hidden" name="roadAddr" id="roadAddr"/>
				    <input type="hidden" name="roadAddrPart1" id="roadAddrPart1"/>
				    <input type="hidden" name="roadAddrPart2" id="roadAddrPart2"/>
				    <input type="hidden" name="zipNo" id="zipNo"/>
				    
				    <!--  검색 영역 -->
				    <div class="addrpop_sch">
				        <fieldset>
				        <div class="search_box search_01">
				            <div class="search_wrap" style="padding: 10px">
				            <legend>도로명주소 검색</legend>
				            <span class="wrap">
				              <label for="keyword" class="blind">도로명주소, 건물명 또는 지번입력</label>
				               <input type="text" style="ime-mode:active; width:230px;" placeholder="도로명주소, 건물명 또는 지번입력" id="keyword" title="검색어를 입력하세요" name="keyword" tabindex="1" >
				            </span>
				            
				            <button type="button" class="search_btn" onclick="javascript:searchAddress();"><img src="https://static.applyhome.co.kr/images/kabhom/board/ic_search.png" alt="주소검색">검색</button>
				            </div>
				        </div>
				        </fieldset>
				
				        <p><small>검색어 예 : 도로명(반포대로 58), 건물명(독립기념관), 지번(삼성동 25)</small></p>
				    </div>
				    <!--  검색 영역 -->
				    
				    <!-- 검색결과 영역 -->
				    <div class="search-result mt_10" style="display:none">
				        <table id="searchResult" class="tbl_st tbl_addr mTbl2 type37">
				            <caption class="blind">도로명 주소검색 결과</caption>
				            <colgroup>
				                <col style="width:12%;">
				                <col style="width:auto;">
				                <col style="width:14%;">
				            </colgroup>
				            <thead>
				                <tr>
				                    <th>번호</th>
				                    <th>도로명주소</th>
				                    <th>우편번호</th>
				                </tr>
				            </thead>
				            <tbody>
				                <tr>
				                    <td>999</td>
				                    <td class="txt_l">
				                        <div>
				                            <a href="#a">
				                                <div><strong>지봉로77번길 </strong></div>
				                                <small>[지번]<span>역곡동</span></small>
				                            </a>
				                        </div>
				                    </td>
				                    <td>12345</td>
				                </tr>
				                <tr>
				                    <td>2</td>
				                    <td class="txt_l">
				                        <div>
				                            <a href="#a">
				                            <div><strong>지봉로77번길</strong></div>
				                            <small>[지번]<span>역곡동</span></small>
				                            </a>
				                        </div>
				                    </td>
				                    <td>12345</td>
				                </tr>
				            </tbody>
				        </table>
				    </div>
				    <!-- 검색결과 영역 -->
				    
				    <!-- Page Navigation 영역 -->
				    <div class="paging_wrap" style="display:none">
				        <div class="pageview">
				            <a href="#a" class="arrow"><span class="blind">처음으로</span></a>
				            <a href="#a" class="arrow arw_prev"><span class="blind">이전페이지</span></a>
				            <div class="page_box">
				                <a href="#a" class="active">1</a>
				                <a href="#a">2</a>
				                <a href="#a">3</a>
				                <a href="#a">4</a>
				                <a href="#a">5</a>
				                <a href="#a">6</a>
				                <a href="#a">7</a>
				                <a href="#a">8</a>
				                <a href="#a">9</a>
				                <a href="#a">10</a>
				            </div>
				            <a href="#a" class="arrow"><span class="blind">다음페이지</span></a>
				            <a href="#a" class="arrow arw_next"><span class="blind">맨끝으로</span></a>
				        </div>
				    </div>
				    <!-- Page Navigation 영역 -->
				    
				    <!-- 상세주소 영역 -->
				    <div class="detail mt_30" style="display:none">
				        <p><strong>상세주소 입력</strong></p>
				        <table class="tbl_st tbl_row mt_10">
				            <caption class="blind">주소입력</caption>
				            <colgroup>
				                <col style="width:27%">
				                <col style="width:auto">
				            </colgroup>
				            <tbody>
				                <tr>
				                    <th>도로명 주소</th>
				                    <td class="txt_l">
				                    <p id="addrPart1"><strong>경기도 부천시 지봉로77</strong></p>
				                    </td>
				                </tr>
				                <tr>
				                    <th>상세주소입력</th>
				                    <td class="txt_l">
				                        <label for="addr01"></label>
				                        <input type="text" id="addrDetail" name="addrDetail" title="상세주소 입력" maxlength="100">
				                        <p id="addrPart2"><small>(지봉로)</small></p>
				                    </td>
				                </tr>
				            </tbody>
				        </table>
				    </div>
				    <!-- 상세주소 영역 -->
				    
				    <!-- Button 영역 -->
				    <div id="divBtnAdres" class="btn_box" style="display:none">
				        <button type="button" class="btn_submit" style="height: 40px" onclick="javascript:setParent();">주소입력</button>
				    </div>
				    <!-- Button 영역 -->
				</form>    
				</div>
            </div>				
        </div>				
    </div>				   
</div>

<script>
	document.domain = "applyhome.co.kr";

    $(function(){
        $("#keyword").focus();
        $("#keyword").on("keydown", function(event){
            if (event.which == 13) {    
                event.keyCode = 0;  
                searchAddress(); 
            }
        });
    });
    
    
    function clearJuso() {
        $(".search-result").css('display','none');
        $(".paging_wrap").css('display','none');
        $(".detail").css('display','none');
        $("#divBtnAdres").css('display','none');
        
        $("#keyword").val("");
        $("#currentPage").val("1");
        $("#roadAddr").val("");
        $("#roadAddrPart1").val("");
        $("#roadAddrPart2").val("");
        $("#addrDetail").val("");
        $("#zipNo").val("");

        $("#addrPart1").html("");
        $("#addrPart2").html("");    	
    };
    
    function validateJuso(value){
        value =value.replace(/(^\s*)|(\s*$)/g, ""); //앞뒤 공백 제거
        return value.split(/[%]/).join("");  //특수문자제거
    };
    
    //검색 정제 (번지 빼기, 띄어쓰기)
    function regExpCheckJuso(strKeyword)
    {
        var tempKeyword = strKeyword;
        var charKeyword;  
        var tempLength;
        
        //주소일 경우 글자뒤에 번지 x, 주소와 숫자 사이에 한칸 띄우기
        var reqExp1 =/([0-9]|번지)$/;
        var reqExp2 =/번지$/;
        var checkChar =/^([0-9]|-|\.|\·)$/;
        var checkEng =/^[A-Za-z]+$/;

        if(reqExp1.test(strKeyword))
        {
            // 글자 뒤의 번지 삭제
            tempKeyword = strKeyword.split(reqExp2).join("");

            // 주소와 숫자 사이 한칸 띄우기
            tempLength = tempKeyword.length;

            for(var i=tempLength-1;i>=0;i--)
            {
                charKeyword = tempKeyword.charAt(i);
                
                if(!checkChar.test(charKeyword))
                {
                    if(charKeyword != " " && !checkEng.test(charKeyword))
                    {
                        tempKeyword = insertString(tempKeyword,i+1,' ');            
                    }
                    break;
                }
            }
        }
        
        var regExp3 = /[0-9]*[ ]*(대로|로|길)[ ]+[0-9]+[ ]*([가-힝]|[ ])*[ ]*(로|길)/;
        var regExp4 = /[ ]/;

        var k = tempKeyword.match(regExp3) ;
        
        if (k != null) {
            var tmp = k[0].split(regExp4).join("");
            
            tempKeyword=tempKeyword.replace(regExp3, tmp);
        }
        
        return tempKeyword;
    };
  
    function checkSearchedWord(obj){
        let length = obj.value.trim().length;
        if (length < 1) {
            alert("검색주소를 입력하세요.") ;
            return false ;
        } else {
            //특수문자 제거
            var expText = /[%=><]/ ;
            if(expText.test(obj.value) == true){
                alert("특수문자를 입력 할수 없습니다.") ;
                obj.value = obj.value.split(expText).join(""); 
                return false;
            }
            
            //특정문자열(sql예약어의 앞뒤공백포함) 제거
            var sqlArray = new Array(
                //sql 예약어
                "OR", "SELECT", "INSERT", "DELETE", "UPDATE", "CREATE", "DROP", "EXEC",
                         "UNION",  "FETCH", "DECLARE", "TRUNCATE" 
            );
            
            var regex;
            for(var i=0; i<sqlArray.length; i++){
                regex = new RegExp( sqlArray[i] ,"gi") ;
                
                if (regex.test(obj.value) ) {
                    alert("\"" + sqlArray[i]+"\"와(과) 같은 특정문자로 검색할 수 없습니다.");
                    obj.value =obj.value.replace(regex, "");
                    return false;
                }
            }
        }
        return true;
    };
    
    function searchAddress(){
        if (!checkSearchedWord(document.searchForm.keyword)) {
            $("#keyword").focus();
            return ;
        }
        
        $("#keyword").val(validateJuso($("#keyword").val())); //공백 및 특수문자 제거
        $("#keyword").val(regExpCheckJuso($("#keyword").val()));
        var searchData = $("#searchForm").serialize()
        
        $.ajax({
             url :"https://www.juso.go.kr/addrlink/addrLinkApi.do"
            ,type:"get"
            ,data:searchData
            ,dataType:"json"
            ,crossDomain:true
            ,success:function(searchResult){
                
                let common = searchResult.results.common;
                let jusoList = searchResult.results.juso;
                
                if( parseInt(common.totalCount) > 1000 && common.currentPage == "1" ){
                    alert("검색 결과가 너무 많습니다(1,000건 이상)\n검색어 예를 참조하여 검색하시기 바랍니다.");
                }
                
                if(common.errorCode != "0"){
                    alert(common.errorCode + "=" + common.errorMessage);
                }else{
                    if(searchResult != null){
                        makeList(searchResult);
                    }
                }
            }
            ,error: function(xhr,status, error){
                alert("검색에 실패하였습니다 \n 다시 검색하시기 바랍니다.");
            }
        });
            
    };
    
    // 도로명주소검색 결과리스트 및 페이지 네이게이션 처리
    function makeList(searchResult){
        $(".search-result").css('display','none');
        $(".paging_wrap").css('display','none');
        $(".detail").css('display','none');
        $("#divBtnAdres").css('display','none');

        $("#searchResult tbody").html("");
        $(".pageview").html("");
        
        let common = searchResult.results.common;
        let jusoList = searchResult.results.juso;
        
        let totalCnt = common.totalCount;
        let currentPage = common.currentPage;
        let countPerPage = common.countPerPage;
        let listNum = (currentPage*countPerPage)-(countPerPage - 1);
        let num = 0;

        if (common.totalCount == 0) {
            let tr = $("<tr/>");
            let td = $("<td/>", {colspan:"3",text:"검색된 내용이 없습니다."});
            
            tr.append(td);
            $("#searchResult tbody").append(tr);
        } else {
            
            // 검색결과 생성
            $.each(jusoList, function(idx, juso) {
                num++;
                
                let tr = $("<tr/>");
                let td1 = $("<td/>", {text:listNum++});
                
                let td2 = $("<td/>", {"class":"txt_l"});
                let td2_div = $("<div/>");
                let td2_a = $("<a/>", {href:"#", onclick:"javascript:setMaping('"+num+"');"});
                let td2_a_div = $("<div/>", {id:"roadAddrDiv_" + num});
                let td2_a_div_strong = $("<strong/>",{text:juso.roadAddr});
                let td2_a_div_small = $("<small/>",{text:"[지번] "});
                let td2_a_div_span = $("<span/>", {text:juso.jibunAddr});
                let td2_hidden1 = $("<div/>", {id:"roadAddrPart1_" + num, "style":"display:none", text:juso.roadAddrPart1});
                let td2_hidden2 = $("<div/>", {id:"roadAddrPart2_" + num, "style":"display:none", text:juso.roadAddrPart2});
                
                let td3 = $("<td/>");
                let td3_div = $("<div/>", {id:"zipNoDiv_" + num, text:juso.zipNo});
                
                td2_a_div.append(td2_a_div_strong);
                td2_a_div_small.append(td2_a_div_span);
                td2_a.append(td2_a_div, td2_a_div_small)
                td2_div.append(td2_a, td2_hidden1, td2_hidden2);
                td2.append(td2_div);
                
                td3.append(td3_div);
                
                tr.append(td1, td2, td3);
                
                $("#searchResult tbody").append(tr);
            });
            
            // Page Navigation 생성
             if(totalCnt > 1) {
                 let PAGEBLOCK= 10;
                 let totalPages = Math.floor((totalCnt-1)/countPerPage) + 1;
                 
                 let firstPage = Math.floor((currentPage-1)/PAGEBLOCK) * PAGEBLOCK + 1;
                 if( firstPage <= 0 ) firstPage = 1;  
                 
                 let lastPage = firstPage-1 + PAGEBLOCK;
                 if( lastPage > totalPages ) lastPage = totalPages;
                 
                 let nextPage = lastPage+1 ;
                 let prePage = firstPage-5 ;
                 
                 let paggingStr = "";
                 
                 if(totalPages > 1){
                     if( firstPage > PAGEBLOCK ){
                         paggingStr += "<a class='arrow' href='javascript: $(\"#currentPage\").val(1); searchAddress();'><span class='blind'>처음으로</span></a>";
                         paggingStr +=  "<a class='arrow arw_prev' href='javascript: $(\"#currentPage\").val("+prePage+"); searchAddress();'><span class='blind'>이전 페이지로</span></a>" ;
                     }
                     
                     paggingStr += "<div class='page_box'>";
                     for( let i=firstPage; i<=lastPage; i++ ){
                         if( currentPage == i )
                             paggingStr += "<a href='#a' class='active'>" + i + "</a>";
                         else
                             paggingStr += "<a href='javascript:$(\"#currentPage\").val("+i+");  searchAddress();'>" + i + "</a>  ";
                     }
                     
                     paggingStr += "</div>";
                     
                     if( lastPage < totalPages ){
                         paggingStr +=  "<a class='arrow' href='javascript: $(\"#currentPage\").val("+nextPage+");  searchAddress();'><span class='blind'>다음으로</span></a>";
                     }
                     paggingStr += "<a class='arrow arw_next' href='javascript: $(\"#currentPage\").val(" + totalPages + "); searchAddress();'><span class='blind'>맨끝으로</span></a>";
                 } 
                 
                 $(".pageview").html(paggingStr);
             }
            
            
        }
        
        $(".search-result").css('display','block');
        $(".paging_wrap").css('display','block');
        
        $("#roadAddr").val("");
        $("#roadAddrPart1").val("");
        $("#roadAddrPart2").val("");
        $("#zipNo").val("");

        $("#addrPart1").html("");
        $("#addrPart2").html("");
    };
     
    
    function setMaping(idx){
        $(".search-result").css('display','none');
        $(".paging_wrap").css('display','none');
        
        $(".detail").css('display','block');
        $("#divBtnAdres").css('display','block');
        
        let roadAddr = $("#roadAddrDiv_"+idx).text()
        let roadAddrPart1 = $("#roadAddrPart1_"+idx).text();
        let roadAddrPart2 = $("#roadAddrPart2_"+idx).text();
        let zipNo = $("#zipNoDiv_"+idx).text();
        
        $("#roadAddr").val(roadAddr);
        $("#roadAddrPart1").val(roadAddrPart1);
        $("#roadAddrPart2").val(roadAddrPart2);
        $("#zipNo").val(zipNo);

        $("#addrPart1").html("<strong>" + roadAddrPart1 + "</strong>");
        $("#addrPart2").html("<small>" + roadAddrPart2 + "</small>");
        $("#addrDetail").focus();
    };   
    
    
    function setParent(){
        var jusoCallBackOptions = new Object();
        
        jusoCallBackOptions.roadFullAddr = $.trim($("#roadAddr").val());
        jusoCallBackOptions.roadAddrPart1 = $.trim($("#roadAddrPart1").val());
        jusoCallBackOptions.roadAddrPart2 = $.trim($("#roadAddrPart2").val());
        jusoCallBackOptions.addrDetail = $.trim($("#addrDetail").val());
        jusoCallBackOptions.zipNo = $.trim($("#zipNo").val());

        jusoCallBack(jusoCallBackOptions);
        
        $("#pop_info2").hide();
        clearJuso(); 
    };
</script>
        
                  
<script>
	var checkSubmit = true;

	
	$(function() {
		gfn_hideCmmnProgressBar();
		
		
		$("#chk_adr").click(function(){
			if($(this).is(":checked")) {
				$("#contactAdresZip").removeAttr("disabled");
				$("#contactAdres").removeAttr("disabled");
			} else {
				$("#contactAdresZip").attr("disabled", "disabled");
				$("#contactAdres").attr("disabled", "disabled");
			}
		});
		
		
		$(".btnPopWord").click(function(){
			var pId = $(this).data("popword");
			var pTit = $(this).children('span').text();
			gfn_popupWordDc(pId, pTit);
		});
		
		$(".explan").hover(function(){
            $(this).parents(".sub_tit").find(".add_line_box").css("display","block")
        },function(){
            $(this).parents(".sub_tit").find(".add_line_box").css("display","")
        });
		
		// 질문에 대한 상세설명 팁 - 2019.11.25 추가
        $(".detail_btn").click(function() {
            $(this).parents("tr").siblings().find(".detail_layer").hide();
            $(this).parents("table").siblings().find(".detail_layer").hide();
            $(this).next(".detail_layer").toggle().focus();
        });

        $(".detail_close").click(function() {
            $(this).parents(".detail_layer").hide();
        });
		
		
		$("input[name='lwstflPrasgnReqstAt']").on("click", function(){
			if($("input[name='lwstflPrasgnReqstAt']:checked").length > 1) {
				$("input[name='lwstflPrasgnReqstAt'][value!='"+$(this).val()+"']").prop("checked",false);
			}
		});
		
		
		$("#btnSubmitPre").click(function() {
			
			//$net.href("/ap/apr/reqst/step3.do");
			$net.submit("reqstForm", "/ap/apr/reqst/step3.do");
		});
		
		$("#btnSubmitNext").click(function() {
			
			if(!fn_checkValidation()) {
				return false;
			}
			var $checkedLwstflPrasgnReqstAt = $("input[name='lwstflPrasgnReqstAt']:checked");
			if($checkedLwstflPrasgnReqstAt.length > 0) {
				if($checkedLwstflPrasgnReqstAt.val() == 'T'){
					$("#lwstflPrasgnReqstAtNm").val('다자녀가구로 최하층 신청');
				} else if($checkedLwstflPrasgnReqstAt.val() == 'Y'){
					$("#lwstflPrasgnReqstAtNm").val('노인, 장애인으로 최하층 신청');
				}
			} else {
				$("#lwstflPrasgnReqstAtNm").val('해당사항 없음');
			}

			fn_save();
		});
		
	    
	    $('#btnAdres').on('click', function() {
	        
	        $("#pop_info2").show().focus();
	        $(".current").removeClass('current');
	        $(this).addClass("current");
	    });
	    
	     
	    onlyNumber('#tel01');
		onlyNumber('#tel02');
		onlyNumber('#tel03');
	});
	
	/**
	 * 설명		: 입력값 validation 체크 
	 * 사용방식	: fn_checkValidation()
	 * 주의		: 
	 * 리턴		: boolean
	 */
	function fn_checkValidation() {
        // 주소변환
        replaceTabToSpace($("#contactAdres"));
	        
        // 상세주소변환
        replaceTabToSpace($("#contactDetailAdres"));
		 
		//주소
		if($num.onlyNumberObj($("#contactAdresZip")) == false) {
			
			alert('우편번호은(는) 숫자만 입력 가능합니다.');
			$("#contactAdresZip").focus();
			return false;
		}
		$("#contactAdresZip").val($.trim($("#contactAdresZip").val()));
		if($("#contactAdresZip").val().length != 5) {
			
			alert('우편번호은(는) 5자로 입력 해 주세요.');
			$("#contactAdresZip").focus();
			return false;
		}
		$("#contactAdres").val($.trim($("#contactAdres").val()));
		if($("#contactAdres").val().length < 5) {
			
			alert('주소을(를) 확인하여 주시기 바랍니다.');
			$("#contactAdres").focus();
			return false;
		}
		$("#contactDetailAdres").val($.trim($("#contactDetailAdres").val()));
		if($("#contactDetailAdres").val().length < 1) {
			
			alert('상세주소을(를) 확인하여 주시기 바랍니다.');
			$("#contactDetailAdres").focus();
			return false;
		}
		//전화번호
		if($num.onlyNumberObj($("#tel01")) === false) {
			
			alert('전화번호은(는) 숫자만 입력 가능합니다.');
			$("#tel01").focus();
			return false;
		}
		if($num.onlyNumberObj($("#tel02")) === false) {
			
			alert('전화번호은(는) 숫자만 입력 가능합니다.');
			$("#tel02").focus();
			return false;
		}
		if($num.onlyNumberObj($("#tel03")) === false) {
			
			alert('전화번호은(는) 숫자만 입력 가능합니다.');
			$("#tel03").focus();
			return false;
		}
		
		if($.trim($("#tel01").val().length) < 2) {
			
			alert('전화번호은(는) 2자 이상 입력해야 합니다.');
			$("#tel01").focus();
			return false;
		}
		if($.trim($("#tel02").val()).length < 3) {
			
			alert('전화번호은(는) 3자 이상 입력해야 합니다.');
			$("#tel02").focus();
			return false;
		}
		if($.trim($("#tel03").val()).length < 4) {
			
			alert('전화번호은(는) 4자 이상 입력해야 합니다.');
			$("#tel03").focus();
			return false;
		}
		
		if($("#tel01").val().replace(/0/ig, "").length == 0) {
			
			alert('전화번호 0은(는) 유효하지 않은 값입니다.');
			$("#tel01").focus().val("");
			return false;
		}
		if($("#tel02").val().replace(/0/ig, "").length == 0) {
			
			alert('전화번호 0은(는) 유효하지 않은 값입니다.');
			$("#tel02").focus().val("");
			return false;
		}
		
		var tel01Val = $("#tel01").val();
		var strHp = "|010|011|016|017|018|019|";
		if(strHp.indexOf("|"+tel01Val+"|") < 0) {
			alert("연락전화번호는 \n\n휴대폰 번호를 입력하셔야 합니다.");
			$("#tel01").focus();
			return false;
		}
		
		return true;
	}
	
	function fn_checkWord(str, word) {
	    return str.indexOf(word);
	}
	
	var saveStep = 0;
	
	/**
	 * 설명		: 서명데이터 생성 후 호출하는 CallBack 함수
	 * 사용방식	: fn_save(code, data)
	 * 주의		: 
	 * 리턴		: 
	 */
	function fn_save() {
	    if(saveStep > 0) {
	        return;
	    }
	    saveStep = 1;
	    
		
		var vUrl = "/ap/apr/reqst/insertContactInfo.do";
		var oOptions = new Object();
		
		
		oOptions.dataType = "json";
		
		
		oOptions.CallBack = "fn_crtfctLoginCallBack";
		
		
		var vHpNo = $("#tel01").val() + "-" + $("#tel02").val() + "-" + $("#tel03").val() ;
		oOptions.requestData = 
		{
	        "contactAdresZip": $("#contactAdresZip").val()
			,"contactAdres" : $("#contactAdres").val()
			,"contactDetailAdres" : $("#contactDetailAdres").val()
			,"cttpcHpNo" : vHpNo
			,"cttpcHpNo1" : $("#tel01").val()
			,"cttpcHpNo2" : $("#tel02").val()
			,"cttpcHpNo3" : $("#tel03").val()
			,"smsAgreAt" : $("input[name=smsNtice]:checked").val()
			,"lwstflPrasgnReqstAt" : $("input[name=lwstflPrasgnReqstAt]:checked").val()
			,"processTm" : $("#processTm").val() 
		}
		
		
		$net.ajax(vUrl, oOptions);
	}
	
	/**
	 * 설명		: 인증서 로그인 시도 후 호출하는 CallBack 함수
	 * 사용방식	: fn_crtfctLoginCallBack(vResBody, e)
	 * 주의		: 
	 * 리턴		: 
	 */
	function fn_crtfctLoginCallBack(vResBody, e) {
	     if(saveStep != 1) {
	         return ;
	     }
	     saveStep = 2;
		if(vResBody.resultCode == "200") {
			
			saveStep = 0;
			//$net.href("/ap/apr/reqst/selectSubscrptChk.do");
			$("#processTm").val(vResBody.processTm);
			$net.submit("reqstForm", "/ap/apr/reqst/selectSubscrptChk.do");
		} else {
		    saveStep = 0;
			var popOpt = new Object();
			popOpt.msg = '연락처 등 입력 오류 ';
			popOpt.msgDetail = '';
			popOpt.msgDetail += vResBody.resultMsg;
			gfn_popupHtmlMsgErr(popOpt);
			
			return false;
		}
	}
	
    /**
     * 설명       : 주소팝업 Callback 함수. 선택한 주소정보 set
     * 사용방식 : jusoCallBack()
     * 주의       : 
     * 리턴       : boolean
     */
    function jusoCallBack(jusoObj){
        if($.isEmptyObject(jusoObj) == false) {
            $("#contactAdresZip").val(jusoObj.zipNo);
            $("#contactAdres").val(jusoObj.roadAddrPart1);
            $("#contactDetailAdres").val(jusoObj.addrDetail);
        }
    }
    
    
    function fn_popClose(popid) {
        
        $("#" + popid).hide();
        $(".current").focus();
    }    
</script>   

<script src="/js/kabhom/com/ai.com.js"></script>
		



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
	var gvPgmId = "API10M05";
</script>
<script src="/js/kabhom/com/hom.core.js"></script>
<script src="/js/kabhom/util/hom.all.js"></script>
</body>
</html>
	    