# Liberté et Amour

<p align="center">
<img src="https://github.com/Ryanch0/First_Project/assets/165358637/3f764319-bbb4-4cd1-93e1-13946ac9a23d" width="300px"/>
</p>

## 프로젝트 정보
이 프로젝트는 웹 개발에 입문한 지 5개월 정도 되었을 때 처음으로 진행했던 개인 프로젝트입니다. 처음으로 혼자서 기획하고, 스스로 코드를 한 줄 한 줄 작성하면서 많은 오류를 접했습니다. 비록 미완성된 상태로 마무리되었지만, 이 프로젝트는 저의 개발 실력을 가장 많이 끌어올려 준 소중한 경험이었습니다.
<br/>
개발기간 : 2024.04.1 ~ 2024.04.25

<br></br>
## 프로젝트 소개
Liberté et Amour는 프랑스어로 “자유와 사랑”을 의미합니다. 자유롭고 낭만넘치는 패션을 타깃으로 한 쇼핑몰입니다.
<br></br>

## Stacks
### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             

### Development
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
<br></br>

## 화면 구성
<p align="center">
<img src="https://github.com/Ryanch0/First_Project/assets/165358637/0cfbdbcc-4697-4b2b-a8c7-0e4d7c68c3a7" width="800px" />
</p>
<p align="center">
<b>PC버전 메인페이지</b>
</p>

<br></br>
<p align="center">
<img src="https://github.com/Ryanch0/First_Project/assets/165358637/210b9cbc-2d2c-4d18-9d0d-1c8750080180" width="600px" />
</p>
<p align="center">
<b>모바일 버전의 반응형 레이아웃</b>
</p>

<br></br>
<p align="center">
<img src="https://github.com/Ryanch0/First_Project/assets/165358637/80384073-9f05-4995-86d3-36266e2c1f8b" width = "900px"/>
</p>
<b>회원가입 페이지</b>
<br></br>
- express의 세션라이브러리와 passport로 세션방식 로그인을 구현하였으며 유저데이터는 mongoDB로 저장했습니다.
<br></br>
- 회원가입시 input값에 대한 예외처리를 정규표현식으로 처리했습니다(Email형식, password일치, 전화번호 형식, null값 혹은 빈 문자열 처리 등).
<br></br>
- React에서 회원상태 관리는 Redux로 전역으로 관리했습니다.

<br></br>

<table style="width:100%">
  <tr>
    <td align="center">
      <img src="https://github.com/Ryanch0/First_Project/assets/165358637/0cdbd2fa-a929-45b1-915b-175a7c95417a" width="470px" />
      <br>
      <b>PC버전 상품 페이지</b>
    </td>
    <td align="center">
      <img src="https://github.com/Ryanch0/First_Project/assets/165358637/50efd474-1613-4635-8c26-094371deb425" width="470px" />
      <br>
      <b>모바일 버전의 반응형 레이아웃</b>
    </td>
  </tr>
</table>
<b>상품 페이지</b>
<br></br>
- 모든 이미지와 상품명, 가격등 정보는 모두 github에 JSON파일로 만들어서 ajax요청을 통해 데이터를 받았습니다.

<br></br>
<p align="center">
<img src="https://github.com/Ryanch0/First_Project/assets/165358637/b7fedb7e-c1b8-4484-861e-4f63c3f7fc2a" width="900px"/>
</p>  
<b>상품페이지 CSS</b>
<br></br>
- 유저가 상품의 상세페이지를 접속하지 않고도 모델의 착용샷을 미리 볼 수 있도록 css로 처리했습니다.

<br></br>
<p align="center">
<img src="https://github.com/Ryanch0/First_Project/assets/165358637/b35a082a-fdac-4b9c-afc0-6060db058a9a" width="900px"/>
</p>
<b>상세페이지(미완성)</b>

<br></br>
<p align="center">
<img src="https://github.com/Ryanch0/First_Project/assets/165358637/4febffdb-e9e3-49c6-a8a2-984871dd61c6" width="900px"/>
</p>
<b>마이페이지</b>
<br></br>
- 비밀번호 수정기능과 간단한 회원정보만 출력했습니다.

<br></br>
## 프로젝트 후기

첫 번째 프로젝트였기 때문에 체계적인 계획 없이 진행한 부분이 많았습니다. 프론트엔드와 백엔드를 즉흥적으로 처리하면서 비효율적인 개발 방식을 취하기도 했습니다. 하지만 이 프로젝트는 저의 개발 실력을 크게 향상시킨 소중한 경험이었습니다.

### 주요 배움과 경험
- Redux를 사용하여 React 컴포넌트 간의 상태 관리를 효율적으로 수행하는 방법을 배웠습니다. 이를 통해 전역 상태를 효과적으로 관리하고, 컴포넌트 간의 데이터를 공유하는 방법을 익혔습니다.
- 백엔드에서는 Node.js와 Express를 사용하여 서버를 구축하는 방법을 익혔습니다. RESTful API를 설계하고 구현하면서 서버와 클라이언트 간의 데이터 통신을 이해하게 되었습니다.
- AJAX 요청을 통해 JSON 데이터를 서버와 비동기적으로 주고받는 방법을 익혔습니다. 이를 통해 페이지를 새로고침하지 않고도 데이터를 갱신하거나 가져오는 기술을 습득했습니다.
- 세션 기반의 회원 기능을 구현하면서 세션의 역할과 쿠키의 중요성을 배웠습니다. Passport.js와 Express-Session을 사용하여 사용자 인증과 권한 관리를 수행하는 방법을 익혔습니다.
<p>이 프로젝트는 많은 어려움과 도전을 안겨주었지만, 그만큼 많은 것을 배울 수 있는 기회였습니다.</p>

