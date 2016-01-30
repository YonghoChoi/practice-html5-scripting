# BOM (Browser Object Model)

* Window와 Document를 제어하기 위한 프로퍼티 제공
* 자바스크립트로 제어

* window.setTimeout() 형태에서 window를 작성하지 않고 setTimeout()만 작성 가능
  * 지원하지 않는 브라우저도 있기 때문에 window까지 적어주는 것이 좋다.

* W3C 표준은 아니지만 웹 초창기부터 사용.
* 현재는 HTML5와 DOM4 스펙에 기술되어 있다.
  * 기존에 BOM이라고 분리되었던 기능이 HTML5 스펙에 포함되었다.

* browsing context
  * 브라우저를 통해 보여지는 Document 환경
  * Tab, Window, iframe

## 현재의 브라우징 콘텍스트 속성

|이름|형태|개요|
|---|---|---|
|window|WindowProxy|Window 오브젝트 반환|
|self|WindowProxy|Window 오브젝트 반환|
|document|Document|Document 오브젝트|
|name|DOMString|browsing context name|
|location|Location|Document의 Location|
|history|History|Session History|
|locationbar|BarProp|location bar(주소창)|
|menubar|BarProp|menu bar 표시 상태|
|personalbar|BarProp|personal bar 표시 상태|
|scrollbars|BarProp|scroll bar 표시 상태|
|statusbar|BarProp|status bar 표시 상태|
|toolbar|BarProp|tool bar 표시 상태|
|status|DOMString|과거 버전 호환을 위해 존재|

* 현재 open된 브라우징 콘텍스트 속성

* BarProp 오브젝트 형태
  * readonly attribute boolean visible
  * window.menubar.visible 형태로 접근하며 Boolean 값을 반환

## 브라우징 콘텍스트 속성

|이름|구분|형태|개요|
|----|----|----|----|
|closed|속성|Boolean|window가 close 상태이면 true, 아니면 false 반환|
|close()|파라미터|없음|현재 window를 닫음|
|stop()|파라미터|없음|document load를 취소|
|focus()|파라미터|없음|window에서 focus를 맞춤|
|blur|파라미터|없음|window에서 focus를 떠나게 함|
|open()|파라미터|DOMString|url, optional, 디폴트 : "about:blank"|
|||DOMString|target, optional, 디폴트 : "_blank"|
|||DOMString|features, optional, 디폴트 : ""|
|||DOMString|replace, optional, 디폴트 : false|
||반환|WindowProxy||

* 파라미터 값을 기준으로 새로운 window를 오픈하고 이를 반환

* window.open()
* UI 및 기능이 부족하므로 가급적 사용 억제
* tab 브라우징 사용 권장
* ajax가 나온 이후부터는 잘 사용 안함

## 다른 브라우징 콘텍스트 속성

|이름|형태|개요|
|----|----|----|
|frames|WindowProxy|window 오브젝트 반환. iframe 리스트가 아님|
|length|Number|차일드 브라우징 콘테게스트 수|
|window(index)|WindowProxy|index 번째의 차일드 브라우징 콘텍스트 반환|
|top|WindowProxy|window의 최상위 레벨(top-level) 브라우징 콘텍스트 반환|
|opener|WindowProxy|현재 Window을 open한 window 반환|
|parent|WindowProxy|페어런트 window 반환. parent가 없으면 자신 window 반환|
|frameElement|Element|\<iframe\>, \<object\>와 같이 window에 포함된 엘리먼트 반환|

* 다른 브라우징 콘텍스트 속성
  * \<iframe\>, \<object\>를 포함한 브라우징 콘텍스트
  * iframe은 되도록이면 사용을 자제하는 것이 좋다.

## User prompt

|이름|구분|형태|개요|
|----|----|----|----|
|alert()|파라미터|DOMString|message. 디폴트 ""|
||반환||반환 없음|
|confirm()|파라미터|DOMString|message. 디폴트 ""|
||반환|Boolean|OK: true, Cancel: false|
|prompt()|파라미터|DOMString|message. 디폴트 ""|
||반환||프롬프트에서 입력한 값. cancel하면 null|
|print()|파라미터|없음|현재 Document를 인쇄하기 위한 다이얼로그 표시|
||반환||반환 없음|

## Timers

|이름|구분|형태|개요|
|----|----|----|----|
|setTimeout()|파라미터|Function|handler, timeout 시간 후에 실행할 함수|
||파라미터|Number|타임 아웃 1/1000초|
||파라미터|any|arguments|
||반환|Number|timeout ID. clearTimeout()에서 사용|
|setTimeout()|파라미터|DOMString|핸들러 함수를 문자열로 작성. 비추천|
||파라미터|Number|타임 아웃 1/1000초|
||반환|Number|timeout ID|
|clearTimeout()|파라미터|Number|setTimeout()에서 반환한 timeout ID|
||반환||없음|

* 지정한 시간 후에 핸들러 함수 호출
* 사용하지 않게 되면 타이머 해제
* this가 글로벌 오브젝트를 참조

|이름|구분|형태|개요|
|----|----|----|----|
|setInterval()|파라미터|Function|handler, timeout 시간 후에 실행할 함수|
||파라미터|Number|타임 아웃 1/1000초|
||파라미터|any|arguments|
||반환|Number|timeout ID. clearTimeout()에서 사용|
|setInterval()|파라미터|DOMString|핸들러 함수를 문자열로 작성. 비추천|
||파라미터|Number|타임 아웃 1/1000초|
||반환|Number|timeout ID|
|clearInterval()|파라미터|Number|setTimeout()에서 반환한 timeout ID|
||반환||없음|

* 지정한 간격으로 반복하여 핸들러 함수 호출
* 반복을 해제하면 핸들러 함수를 호출하지 않음
* this가 글로벌 오브젝트를 참조
* 10/1000과 같이 작은 간격은 정확하게 맞지 않을 수 있음.
  * 엔진 자체에서 돌아가는 interval이 이보다 길 수 있기 때문.

## Base64

|이름|구분|형태|개요|
|----|----|----|----|
|btoa()|파라미터|DOMString|ASCII 문자열을 Base64 문자열로 인코딩|
||반환|DOMString|변환한 값|
|atob()|파라미터|DOMString|Base64 문자열을 ASCII 문자열로 디코딩|
||반환|DOMString|변환한 값|

* 함수명이 혼동할 소지가 있음
  * btoa가 base64가 ascii로 변환된다는 의미 같지만 그 반대

* 각 함수의 파라미터 및 반환 값은 Unicode 문자열
* HTML5에서 표준이 됨

## Navigator

|이름|형태|개요|
|----|----|----|
|appCodeName|DOMString|고정값으로 "Mozilla"|
|appName|DOMString|고정값으로 "Netscape"|
|appVersion|DOMString|브라우저 버전|
|platform|DOMString|플랫폼 이름|
|product|DOMString|고정값으로 "Gecko"|
|productSub|DOMString|"20030107" 또는 "20100101" 반환|
|userAgent|DOMString|User-Agent 헤더|
|vendor|DOMString|빈문자열, "Apple Computer, Inc", "Google Inc."|
|vendorSub|DOMString|고정값으로 빈문자열|
|language|DOMString|선택한 언어|
|onLine|DOMString|online 상태면 true, offline 상태면 false|
|cookieEnabled|DOMString|쿠키 사용 가능하면 true, 아니면 false|

* 사용자의 브라우저 버전, 브라우저 헤더 정보 등을 제공

## Navigator.plugins

|이름|구분|형태|개요|
|----|----|----|----|
|length|속성|Number|Navigator.plugins에서 반환한 플러그인 수|
|item()|파라미터|Number|plugins에서 인덱스 번째의 플러그인 반환|
||반환|Plugin|플러그인|
|namedItem()|파라미터|DOMString|plugins에서 이름이 같은 플러그인 반환|
||반환|Plugin|플러그인|
|refresh()|파라미터|Boolean|plugins와 mimeTypes를 Update. 디폴트 false|
||반환||반환 없음|

* 각 플러그인 속성

|이름|구분|형태|개요|
|----|----|----|----|
|name|속성|DOMString|플러그인 이름|
|description|속성|DOMString|플러그인 설명|
|filename|속성|DOMString|플러그인 파일 이름|
|length|속성|Number|플러그인 길이|

* 설치된 플러그인을 반환. Navigator.plugins에서 제공
* 반환된 오브젝트가 Arrary는 아니지만 배열처럼 사용할 수 있음.
* navigator.javaEnabled(): 브라우저에서 Java 실행 가능 여부, true : 불가, false : 가능

## navigator.mimeTypes

|이름|구분|형태|개요|
|----|----|----|----|
|length|속성|Number|Navigator.mimeTypes에서 반환한 Mime Type 수|
|item()|파라미터|Number|mimeTypes에서 인덱스 번째의 Mime Type 반환|
||반환|MimeType|MimeType|
|namedItem()|파라미터|DOMString|mimeTypes에서 이름이 같은 MimeType 반환|
||반환|MimeType|MimeType|

* 각 플러그인 속성

|이름|구분|형태|개요|
|----|----|----|----|
|type|속성|DOMString|MimeType의 타입|
|description|속성|DOMString|MimeType 설명|
|suffixes|속성|DOMString|MimeType의 확장자|
|enabledPlugin|속성|Plugin|MimeType을 적용한 Plugin 반환|

* 지원 Mime Type 반환. Navigator.mimeTypes에서 제공
* 반환된 오브젝트가 Array는 아니지만 배열처럼 사용할 수 있음.
