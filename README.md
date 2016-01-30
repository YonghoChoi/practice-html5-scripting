# HTML5 Scripting

## 범위

* DOM 스크립팅 범위
  * Document, Element, Event Control

* HTML5 관련 범위
  * HTML5 스펙에서 DOM 스크립팅과 관련된 것
  * HTML5 API, Canvas, MathML, SVG 제외

* HTML5에 DOM 스크립팅이 있는 이유
  * DOM3까지 DOM 스펙에 존재했으나 HTML5에서 DOM의 CSS 관련 부분을 CSSOM으로 분리하고 나머지를 HTML5에 포함시킴
  * HTML5에는 마크업과 API만 있는 것이 아니고 DOM Script도 많은 부분 포함되어 있다.

* HTML5 스크립팅
  * HTML5 스펙에서 DOM 스크립팅과 관련된 것을 지칭.
    * 식 명칭은 아님.

## 사전 지식

* HTML5 마크업, CSS, DOM, JavaScript

## 목표

* 기능 습득을 통해 활용성 증대

## 타임테이블

|분류|개요|
|----|----|
|Document|Collections, metadata 속성, DOM 트리 프로퍼티, markup 생성|
|HTMLElement|<img> 생성, <img> 전송, <select/option>, <textarea>|
|Input|<input> 속성과 메소드|
|확장 API|Text Field Selection, Constraint Validation, Session history, Location|
|BOM|BOM 개요, 브라우징 콘텍스트, prompt, Timers, Base64, Navigator|
|CSSOM|MediaList, CSSOM 인터페이스, Document 확장, Window 확장|
|CSSOMView|MediaQueryList, window, Document, Element|

* Document는 Doctype 부터 끝까지
* HtmlElement는 <head>부터 끝까지
* BOM은 표준이 아님

## S/W의 최종 목적

* 인간의 삶에 기여
* 소프트웨어 기술은 최종 목적이 될 수 없다.
  * 구현 수단, 방법일 뿐

## DOM

* Document Object Model

* Document
  * <!DOCTYPE html> ~ </html>
    * html 파일 전체

* Object
  * 객체 개념으로 접근
  * 객체 구성 : method, property

* Model
  * 객체를 Interface 형태로 제공
  * 다수의 언어에서 사용
  * DOMString 형태로 표기
