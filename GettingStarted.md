# 프로젝트 제목 Project Title

쿠버네티스 기반 주택 청약 신청 시스템

## 시작 방법 Getting Started

* AWS EKS를 이용하여 클러스터를 구성하기 위해 AWS 계정으로 console에 로그인이 필요합니다.
* 브라우저는 Google Chrome 를 권장합니다.

### 환경 구축 Prerequisites

* AWS Cloud9으로 IDE 구성
	AWS Cloud9으로 IDE 구성
* IAM Role 생성
* Cloud9 IDE에 IAM Role 부여
IDE(AWS Cloud9 인스턴스)에 IAM Role 부여
* AWS CLI 업데이트
```
sudo pip install --upgrade awscli
aws --version
```
* kubectl 설치
```
sudo curl -o /usr/local/bin/kubectl  \
   https://amazon-eks.s3.us-west-2.amazonaws.com/1.21.2/2021-07-05/bin/linux/amd64/kubectl

sudo chmod +x /usr/local/bin/kubectl

```
* jq, bash completion 설치
```
sudo yum install -y jq

sudo yum install -y bash-completion
```
* eksctl 설치
```
curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp

sudo mv -v /tmp/eksctl /usr/local/bin

```

### 클러스터 생성

`cd ~/environment`
eks-demo-cluster.yaml 생성
```
eksctl create cluster -f eks-demo-cluster.yaml
kubectl get nodes 
rolearn=$(aws cloud9 describe-environment-memberships --environment-id=$C9_PID | jq -r '.memberships[].userArn')
echo ${rolearn}
eksctl create iamidentitymapping --cluster eks-demo --arn ${rolearn} --group system:masters --username admin
kubectl describe configmap -n kube-system aws-auth
cd ~/environment
mkdir -p manifests/alb-ingress-controller && cd manifests/alb-ingress-controller
```
최종 폴더 위치 : /home/ec2-user/environment/manifests/alb-ingress-controller
```
eksctl utils associate-iam-oidc-provider \
    --region ${AWS_REGION} \
    --cluster eks-demo \
    --approve
```
```
aws iam create-policy \
    --policy-name AWSLoadBalancerControllerIAMPolicy \
    --policy-document https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/main/docs/install/iam_policy.json
```
```
eksctl create iamserviceaccount \
    --cluster eks-demo \
    --namespace kube-system \
    --name aws-load-balancer-controller \
    --attach-policy-arn arn:aws:iam::$ACCOUNT_ID:policy/AWSLoadBalancerControllerIAMPolicy \
    --override-existing-serviceaccounts \
    --approve
```
```
kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v1.4.1/cert-manager.yaml
```
```
wget https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.2.1/docs/install/v2_2_1_full.yaml
```
cluster-name을 편집
ServiceAccount 9개 줄 주석처리 - 546 ~ 554 line
```
kubectl apply -f v2_2_1_full.yaml
kubectl get deployment -n kube-system aws-load-balancer-controller
kubectl get sa aws-load-balancer-controller -n kube-system -o yaml
kubectl logs -n kube-system $(kubectl get po -n kube-system | egrep -o "aws-load-balancer[a-zA-Z0-9-]+")
ALBPOD=$(kubectl get pod -n kube-system | egrep -o "aws-load-balancer[a-zA-Z0-9-]+")
kubectl describe pod -n kube-system ${ALBPOD}
```
## 서비스 배포 Deployment
```
cd /home/ec2-user/environment
git clone https://github.com/heyhmin/cicdtest.git 
```
.env 파일 
```
rds_host=goormy-database-1.********.ap-northeast-2.rds.amazonaws.com
rds_user=********
rds_password=********
rds_database=********
```
```
aws ecr create-repository --repository-name goormi_web --image-scanning-configuration scanOnPush=true --region ${AWS_REGION}
cd cicdtest/
```
```
cd ../
git clone https://github.com/heyhmin/k8s-manifest-repo.git 
```
.yaml 파일 생성
해당 레포의 base에서 cloud9의 manifests로 deploy, fargate, hpa, ingress, service 복사 </br>
(deploy.yaml의 Account ID Number 수정해야 함)
```
cd manifests/
kubectl apply -f deploy.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml 
echo http://$(kubectl get ingress/backend-ingress -o jsonpath='{.status.loadBalancer.ingress[*].hostname}')/
```
* 다음 html들의 const url 값을 ingress 주소로 바꾸어야 합니다.
1. AptCancelList.html			430 line
2. Do.apply.complete.html		343 line
3. Do.apply.qualify.inputs.html		270 line
4. do_apply_home_select.html		260 line
5. do_apply_type_select.html		258 line
6. main.home.html			  84 line

```
cd ../cicdtest/
npm install
docker build -t goormi_web .
docker tag goormi_web:latest $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/goormi_web:latest
docker push $ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/goormi_web:latest
```
```
cd ../manifests/
kubectl delete deploy goormi-web
kubectl apply -f deploy.yaml
```
웹페이지 동작 확인
```
eksctl create fargateprofile -f fargate.yaml 
eksctl get fargateprofile --cluster eks-demo -o json
kubectl delete -f deploy.yaml 
kubectl apply -f deploy.yaml 
kubectl get pod -o wide
cd ~/environment
```
## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## 참고 자료
##### AWS EKS 웹 어플리케이션 hands-on lab 
*  Amazon EKS로 간단한 웹 애플리케이션 구축하기 - 김주영 (AWS) :: AWS Community Day Online 2021 

