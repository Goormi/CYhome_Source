# Goormy_ChungYak_Web
'Goormy Homes' 주택 청약 신청 웹 서비스 프로젝트의 소스코드 저장소입니다.

## <h1>GoormyHomes Project </h1><br/>
- 기획 배경<br/><br/>
주택청약 사이트는 무순위 청약 시 사이트가 마비되어 청약 마감 시간을 늦추어야 했던 사례가 있었습니다. <br/>
저희는 이러한 부분을 **AWS와 쿠버네티스**를 적용하여 해결하고자 해당 프로젝트 주제를 선정하였습니다. <br/>
    * [관련 기사](https://www.donga.com/news/Economy/article/all/20200205/99539951/1)
<br><br/>
- 웹페이지 주소 : http://k8s-default-backendi-6566bc7d31-1502049738.ap-northeast-2.elb.amazonaws.com/
<br/><br/>
- github-action : https://github.com/Goormi/Goormi_Web_CICD/actions
<br/><br/>
- k8s-ops-view : http://aaa417015787f411d83389759dd299c5-2099455264.ap-northeast-2.elb.amazonaws.com/
<br/><br/>
- ArgoCD : http://aa93b5fcd0be741f2bed689ab4d80d28-1175049485.ap-northeast-2.elb.amazonaws.com
> (ArgoCD-admin password : IFCfdunSMAc1JyDa)
- Grafana : http://a48a7539d5c32460dafa141bfe6edc80-873073777.ap-northeast-2.elb.amazonaws.com
>(Grafana-admin password : EKS!sAWSome)


## <h1> Usage Examples <br/> <h3> with GoormyHomes You Can..</h3> <br/></h1><br/>
서비스의 기능별 사용 방법입니다. 이미지 클릭 시 영상으로 확인하실 수 있습니다.<br/>  
### 회원가입, 로그인  
회원 가입 시 가점 계산기를 사용, 본인의 가점 입력 후 회원 가입 가능합니다. <br/>
[![회원가입-로그인](https://img.youtube.com/vi/gHR2DFzMdKY/0.jpg)](https://www.youtube.com/embed/gHR2DFzMdKY)
### 청약 신청  
[![청약 신청](https://img.youtube.com/vi/J0Cb-XKhZwM/0.jpg)](https://www.youtube.com/embed/J0Cb-XKhZwM)
### CI CD 과정  
[![CI CD 과정](https://img.youtube.com/vi/Ac6_gXiE9Ps/0.jpg)](https://www.youtube.com/embed/Ac6_gXiE9Ps)

## <h1> Done List <br/><br/></h1><br/>
##### <h4> 단계별 업무 </h4>
* 주제 선정 및 기획
브레인 스토밍, 투표, 구현할 기능 List 작성
* FE 기획, API 신청
Figma를 사용한 프로토타이핑, 청약홈페이지에서 코드 가져오기, 페이지 각각 연결하기, API 사용 권한 신청 및 획득, API 테스트 및 사용법 정리
* DB 구현
DB-RDS table 5개 설계 및 구현, 연동
* BE 개발
session 로그인 기능, DB-RDS 연결 및 구현
페이지들간 데이터 전달 기능 구현 - URL 사용, 세션 저장 및 호출
* FE 개발
사용에 불편함이 없도록 UI 수정
* 어플리케이션 배포
Cloud 9으로 진행, EKS, github action, Argo 사용
* 부하 테스트, 모니터링
모니터링 도구 구현, Apache JMeter 사용 연습, 플랜 생성 및 테스트
<br/><br/>
##### <h4>단계적 세부 개발</h4>
* FE 기획, API 신청
청약홈 코드 : html을 각각 만들고, css와 image들을 추가적으로 다운로드하여 사용.
API : 해당 API의 기술문서를 참고, URL의 형식을 변형하여 원하는 설정을 받아옴.
* DB 구현
DB-RDS : RDS(MySQL) 생성 후 보안그룹을 수정하여 접근. Workbench를 사용하여 테이블 생성 및 쿼리 테스트.
* BE 개발
session 로그인 기능, DB-RDS 연결 및 구현 : routing 기능을 사용, 원하는 값을 axios get/post로 받아와서 출력함.
페이지들간 데이터 전달 기능 구현 - URL 사용, 세션을 RDS에 저장
* 어플리케이션 배포
AWS hands-on-Lab을 참고하여 Cloud 9을 통해 EKS, ECR, k8s ops view, hpa, fargate, ingress-ALB, cloudwatch, github actions, Argo 사용
* 부하 테스트, 모니터링
eksworkshop을 참고하여  Prometheus + Grafana 구현, Apache JMeter 사용.
<br/><br/>
##### <h4>주요 이슈 해결</h4>
* 서비스 개발
웹 개발 기간 단축 => 청약 1/2순위 선택 기능 삭제
API 인증키 미허용 이슈 => API 호출 제한에 따른 API 데이터 DB 저장 방식 사용
웹 어플리케이션 개발 기간을 고려하여 react를 최소화 하는 개발 방법 선택
* 인프라
비용 이슈 => AWS CloudWatch, Lambda 이용 데이터베이스 서버 시작/종료 자동호
promise 타입으로 DB 값을 받아와서 해당 함수 외부에서는 DB 접근 미허용 문제 => 내부에 함수를 중첩하여 해결
다른 vpc내의 리소스간 접근(peering, Inbound rule, routing table) 연결 문제 ( RDS ⇔ EKS_EC2 )				 => RDS인바운드 규칙 설정
* 배포
비용 이슈 => AWS 사용 제한을 고려하여 프로젝트 후반부에 서버 개설과 배포CI/CD
Jenkins와 Github Actions 중 후자 선택 (설치 없이 사용할 수 있어 간편, GitHub을 소스 관리 플랫폼으로 활용하면서 GitHub Actions를 사용하는 이점과 커뮤니티가 활성화 되어있으므로 예시 템플릿 활용 가능)
* 모니터링 및 부하테스트
apache Jmeter JRE 버전과 테마에 따라 설치와 실행이 안되는 오류: 재설정으로 해결
<br/><br/>
##### <h4>향후 보완 방향</h4>
* 부하테스트를 보다 적극적으로 진행하여 (Plan을 변경하거나 다른 Parameter들을 변경하여 테스트 등) 결과 분석 이후 해당 결과들을 토대로 수정하는 과정 필요
* 사이트의 크기를 더욱 확장시키고 기능을 추가하며, 실제로 청약이 신청이 되도록 만든뒤 실제로 사용될 사이트의 수준에서 부하테스트를 진행해볼 필요
* 비용적인 측면을 고려하여 모든 부분을 클라우드로 구성하는게 아닌, DB같은 부분은 로컬환경에 구성해 적은 비용으로 사용할 수 있도록 보완
* Trivy vulnerability Test를 통해 찾은 사소한 결함들에 대해서 찾아보고 해결 필요



## <h1> Project Architecture <br/><br/></h1><br/>
#### 웹 어플리케이션 프레임워크
<img width="508" alt="imgweb" src="https://user-images.githubusercontent.com/59551613/154191727-4ae9d73d-d43d-4674-8e58-b04d66b782a3.png" /> </img>
#### 데이터베이스 설계
<img width="404" alt="imgdb1" src="https://user-images.githubusercontent.com/59551613/154191719-26b31411-b1a9-4c8a-b2d0-a353cb4a0004.png" /> </img>
<img width="404" alt="imgdb2" src="https://user-images.githubusercontent.com/59551613/154191722-7e3fc6ae-3269-440c-aa47-cb6da6f9fc53.png" /> </img>
#### 쿠버네티스 아키텍처
<img width="611" alt="imgk8s" src="https://user-images.githubusercontent.com/59551613/154191724-797a3f6d-e748-4b80-9bf3-bc71b5097a39.png" /> </img>
#### CI/CD 파이프라인
<img width="611" alt="imgargo" src="https://user-images.githubusercontent.com/59551613/154191715-679ecba6-9299-4532-833a-7d8b91aa6fb3.png" /> </img>

## <h1> Getting Started <br/><br/></h1><br/>
> [GettingStarted.md](https://github.com/Goormi/CYhome_Source/blob/main/GettingStarted.md) 를 통해 확인하실 수 있습니다.

## <h1> Contributors <br/><br/></h1><br/>
> Please contact us for details and the process for pull requests to us. <br/>
* **김도연** - (https://github.com/zaharod)
* **정혜민** - (https://github.com/heyhmin)
* **이현범** - (https://github.com/normal-beom)
* **황정환** - (https://github.com/hwangjeunghwan)
* **전재일** - (https://github.com/JJY2021)

## <h1> Inspiration <br/><br/></h1><br/>
* AWS hands-on-Lab   -  Amazon EKS로 웹 애플리케이션 구축하기 <br/>
https://catalog.us-east-1.prod.workshops.aws/v2/workshops/9c0aa9ab-90a9-44a6-abe1-8dff360ae428/ko-KR/ 
  <br/><br/>
* EKS Workshop   -   MONITORING USING PROMETHEUS AND GRAFANA <br/>
  https://www.eksworkshop.com/intermediate/240_monitoring/ 
