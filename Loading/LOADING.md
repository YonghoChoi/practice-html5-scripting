# Loading

## Session history and navigation

### Single-page Application

* 출현 배경
  * 2010년, Apple이 Flex를 지원하지 않는다는 발표에 따라 Flex, Silverlight, Java 애플릿 등의 플러그인 형태의 RIA가 사용하지 않게 됨.
    * RIA : Rich Internet Application
  * 대신 HTML5로 구현된 SPA가 주목 받기 시작함

* SPA 환경
  * 페이지를 이동하지 않고 현재 페이지에 데이터 표현
    * Navigation이 동반되어야 한다.
  * XMLHttpRequest, WebSocket 등으로 서버와 통신
  * DOM으로 데이터를 바꾸어서 웹 페이지에 표현

* SPA 영향
  * UI/UX 변화에 지대한 영향을 미침
  * 이에 따른 개발 방법의 변화
  * 컴포넌트 방법 필요, HTML5의 다양한 요소 기술 적용 등
    * react, angluar등의 프레임워크를 컴포넌트 개념으로 접근해서 이해해야 한다. (OOP가 아님)

### Session history

* 개요
  * 브라우징 콘텍스트 방문 이력(history) 정보를 저장하고 자바스크립트로 제어 할 수 있는 프로퍼티와 메소드 제공
    * 이력에 대한 sequence를 session history에 저장하여 navigation이 가능하도록 한다.
  * 이전 페이지로 돌아가거나 다음 페이지로 이동할 수 있다.

* 시나리오
  1. "데이터 수신" 버튼을 클릭하면 서버에서 비동기 통신(XMLHttpRequest)으로 데이터를 받아 현재 웹페이지에 데이터를 표현한다.
  2. 브라우저의 "이전 페이지" 버튼을 클릭하면 이전 페이지를 표시하고 "다음 페이지" 버튼을 클릭하면 다음 페이지를 표시한다.
  3. 이 때 "이전/다음 페이지" 버튼을 길게 누르면 표시 기록을 표시하여 선택할 수 있도록 한다.

#### history


#### Session history

* [history.js] 사용 권장
  * 크로스 브라우저 문제 및 고려사항이 있으므로 프레임워크 사용.

[history.js]: https://github.com/browserstate/history.js

## Location

### Location 속성
