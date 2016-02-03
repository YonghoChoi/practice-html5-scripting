# CSSOM View

* 스타일 적용 우선 순위에 따라
* 다큐먼트에 랜더링된 최종 프로퍼티의 반환 및 제어
* Scrolling,

* spec을 보다보면 partial interface를 통해 추가된 부분을 별도로 기술해 놓았다. 보이는 것이 전부가 아닐 수 있음에 주의.
  * ex) HTMLElement의 경우 기본 interface는 HTML5 spec에 기술되어 있지만 css에 대한 부분은 extend로 추가 기술 되어 있다.

## MediaQueryList

### 메소드

* matchMedia()

* addListener()

* removeListener()


## window 프로퍼티

### window-screen

### window-viewport

* viewport는 window 내의 document를 의미


## Document

### elementFromPoint()

### elementsFromPoint()

### caretPositionFromPoint()

## Element

## View

### scrollIntoView()

### getBoundingClientRect()

### getClientRects()
