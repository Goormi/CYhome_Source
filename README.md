# Goormy_ChungYak_Web
'Goormy Homes' 주택 청약 신청 웹 서비스 프로젝트의 소스코드 저장소입니다.

## <h1>GoormyHomes Project </h1><br/>
- 기획 배경 (5p image)
- 프로젝트 목적 (4p image)
<br><br/>
- 웹페이지 주소 : http://k8s-default-backendi-6566bc7d31-1502049738.ap-northeast-2.elb.amazonaws.com
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

<h1> Done List <br><br></h1><br>
<h4>단계별 업무</h4>
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
  
<h4>단계별 세부적 개발</h4>

<h4>주요 이슈 해결</h4>

<h4>향후 보완 방향</h4>


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
> GetStarted.md 를 통해 확인하실 수 있습니다.

## <h1> Contributors <br/><br/></h1><br/>
> Please contact us for details and the process for pull requests to us. <br/>
* **김도연** - (https://github.com/zaharod)
* **정혜민** - (https://github.com/heyhmin)
* **이현범** - (https://github.com/normal-beom)
* **황정환** - (https://github.com/hwangjeunghwan)
* **_** - (_)

## <h1> Inspiration <br/><br/></h1><br/>
* AWS hands-on-Lab   -  Amazon EKS로 웹 애플리케이션 구축하기 <br/>
https://catalog.us-east-1.prod.workshops.aws/v2/workshops/9c0aa9ab-90a9-44a6-abe1-8dff360ae428/ko-KR/ 
  <br/><br/>
* EKS Workshop   -   MONITORING USING PROMETHEUS AND GRAFANA <br/>
  https://www.eksworkshop.com/intermediate/240_monitoring/ 
