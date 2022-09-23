# 운영 배포

## 절차

1. AWS Console > S3 > CloudFormation 작업용 버킷을 생성합니다.(리전 확인)
1. main.yml 파일을 제외하고 모든 yml 파일을 1번에서 생성한 버킷에 업로드합니다.
1. AWS Console > CloudFormation > us-east-1 리전으로 변경하고 dns.yml 템플릿을 이용해 ACM 인증서를 위한 스택을 생성합니다.
1. 생성된 ACM 인증서의 ARN 값을 복사합니다.
1. AWS Console > CloudFormation 에서 Stack 생성을 누르고 main.yml 파일을 선택합니다.
1. DNS Stack 생성 중에 Route53에서 생성된 Hoste Zone의 NS 서버 리스트를 복사합니다.
1. 도메인 관리 설정에서 서브 도메인을 위한 NS 레코드를 만들고 값에 복사한 NS 서버 리스트를 입력합니다.
1. 인증서 검증(DNS)이 정상적으로 확인되었는지 체크합니다.