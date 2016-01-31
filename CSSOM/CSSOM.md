# CSSOM

* [CSSOM spec]

* 개요
  * Css Object Model
  * CSS를 자바스크립트로 제어하기 위한 인터페이스 제공
    * DOM2 Style에서 인터페이스로 제공했으나 CSSOM으로 분리
  * W3C 전체 스펙에서 Style과 관련된 것을 CSS로 통합하고 있으며 이를 자바스크립트로 제어하기 위한 것을 CSSOM에 정의

## MediaQuery

* Media 타입이란
  * 스크린, 프린터와 같은 디바이스 타입
  * braille, embossed, handheld, print, projection, screen, tty, tv

## CSSOM 인터페이스

### Rule Set

### CSSOM 인터페이스 구조

* HTMLStyleElement > CSSStyleSheet > CSSRuleList > CSSRule > CSSStyleDeclaration

### CSSStyleDeclaration

* CSSStyleDeclaration 인터페이스
  * CSS 프로퍼티 이름과 값을 제공하기 위한 인터페이스
  * 엘리먼트의 style 프로퍼티로 속성 이름과 값 제공

* 엘리먼트의 style 프로퍼티 값 반환 기준
  * 엘리먼트의 style에 작성한 것만 반환


### LinkStyle


### StyleSheet

### CSSStyleSheet

* sheet 프로퍼티로 반환 받음
* 룰셋 단위의 처리를 위한 인터페이스
* \<style\>과 \<link\>에 룰셋 추가 및 삭제

### CSSRule

### Document 확장

### window 확장


[CSSOM spec]: https://www.w3.org/TR/cssom/
