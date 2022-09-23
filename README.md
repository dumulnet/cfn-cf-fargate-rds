# 운영 배포

## 절차

1. 외부 도메인 관리 서버에 서비스 도메인을 위한 ACM 인증서 등록을 위한 NS 레코드를 등록합니다.
2. AWS COnsole > CloudFormation > us-east-1 리전으로 변경하고 dns.yml 템플릿을 이용해 ACM 인증서를 위한 스택을 생성합니다.