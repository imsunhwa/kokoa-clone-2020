# Kokoa clone

## 3.9  inline block

- inline은 height, width를 가질 수 없음
- block의 속성을 유지하면서, inline형태로 두고 싶으면 inline-block사용 가능
    
## 6.3 Font Awesome(아이콘)

- svg이미지(좌표로 되어있음)를 구해서 넣는법 [heroicons](https://heroicons.dev/)
  - 이미지 구해서 클릭,복붙하면됨
  - 나중에 css로 크기나 스타일 같은거 바꿀 수 있음

- javascript활용해서 가져오는 법[fontawesome](https://fontawesome.com/)
  - kit code 필요
  - code kit은 javascript

    ```html
    <script
            src="https://kit.fontawesome.com/6478f529f2.js"
            crossorigin="anonymous"
        ></script>
    ```

  - 위에 있는 자바 스크립트 열어보면 html이나 css에 syylesheet추가하는거 볼 수 있음, 클래스도 추가하고 기타 등등.. 링크도 만들고 attribute를 설정하고, 폰트를 import하고,,
  - body아래에 위와 같은 script 추가(__스크립트는 항상 마지막에 있어야함__)
  - 이미지 찾고 <i class~> 라고 적힌 html 복붙하면 됨(여기서 i 는 icon의 줄임말임)
  - icon 복붙한 코드 이름 옆에
  `fa-lg`, `fa-2x`등 추가해서 아이콘 크기 변경 가능

## 6.6 Sign Up Screen part Three

- `reset.css` 파일을 새로 만들고, reset css 내용 넣어서 css파일에서 @import, html에 link추가는 좋지 않은 방법
- __구분되는 항목 별로 css파일 따로 만들어서 한번에 import__
- 브라우저가 기본으로 만드는 style을 전부 없애고 직접 디자인 하는게 더 좋은 방법