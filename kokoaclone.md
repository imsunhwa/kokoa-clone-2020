# Kokoa clone

## ~2.8

- element[HTML]: 시작 태그와 종료 태그로 이루어진 모든 명령어  
  시작태그\_

## 2.9 More Tags and IDs

- attribute : 요소(HTML문서의 개별적인 구성 요소>에 관한 추가적인 정보를 명시

  ```html
  <img src="이미지 주소" />
  ```

- 아래처럼 적으면 라벨 클릭했을 때 해당 아이디를 가진 인풋 활성화

  ```html
  <label for="profile">dkdkdk</label> <input id="profile" />
  ```

- id는 어떤 태그에든 넣을 수 있는 attribute, unique identifier
- element당 하나의 id만 가질 수 있음, id는 고유 해야함(unique), 중복되면 안됨
- scripting이나 CSS를 식별하려는 목적
- head, body로 크게 구성되어 있는데, head는 configure하기 위해 tag를 둠
- `<meta>`는 give extra information to our document (인코딩 언어, 만든이 등등)

## 2.10 Semantic HTML

- semantic : 문서를 보기만해도 그 의미를 짐작할 수 있는 것, 간단히 영역을 나눠놓는 것, semantic으로 짜면 의미 파악이 빨라져서 더 좋음, 의미있는 박스 ex)`<header> <main> <footer> <aside> <nav>`  
  참고 : https://blog.naver.com/wnsghks1017/222178097621
- `<div>` division : 그냥 박스라고 생각, document에는 아무 **의미도 없는** box 근데 문서 보면 이게 box인건 앎, block
- `<header>`, `<main>`: div랑 똑같은 기능, 하지만 website의 header, main 이라는 의미가 있음
- `<footer>`: 이것또한 div랑 같은 기능. `&copy; 2020 LSH`이런식으로 쓰면 아래 카피라이트로 보임
- `<span>`: 의미 없음. non semantic, `<p>`는 문단, `<span>`은 짧은 문구
- 짧은 문구 각각도 semantic되는걸로 적는게 좋음 ex)`<address>`
- h1, h2 헤더들 모임은 `<hgroup>`으로 묶어주면 됨

## 3.0 - 3.5 css, block, inline, margin

- CSS 기본구조 : **선택자(Selector) {속성(Property):값(Value);}**
- 추후에 pseudo selector도 배움
- CSS 입력하는 방법 1(`<head>`에 추가, rel는 html과의 관계)

  ```html
  <link href="styles.css" rel="stylesheet" />
  ```

- CSS 입력하는 방법 2(`<head>`에 추가)

  ```html
  <style>
    blah blah
  </style>
  ```

- 분리된 파일로 만드는 걸 추천, CSS따로 만들어 두면 다른 HTML 페이지에서도 사용 가능하기 때문

</br>

- display라는 속성의 값 : block, inline, inline-block
- block : 한영역을 차지하는 박스의 형태 기본 width가 100%, height, width 설정가능
- inline : 텍스트의 값에 따라 크기가 정해짐, 줄이 바뀌지 않음, padding, margin값은 적용되나 width, height값은 적용 되지 않음
- inline-block : 위의 2개가 섞여 있는 것, inline과 같이 텍스트 값에 따라 크기가 정해지지만 block처럼 width, height, padding, margin값 허용됨

</br>

- margin : box의 경계로부터 **바깥** 에 있는 공간, 1개(사방), 2개(상하/좌우), 4개(상/우/하/좌, clockwise)
- collapsing margin : 상/하 에서만 발생. a tag와 b tag의 경계가 겹치면 margin이 하나로 취급되어 더 큰걸로 반영됨

## 3.6 Padding and IDs

- #blahblah : id 가리키는 법
- .blahblah : class 가리키는 법
- `*` : 전체 다 가리키는법
- padding : box의 경계로부터 **안쪽** 에 있는 공간

## 3.9 inline block

- inline은 height, width를 가질 수 없음, maring, padding은 가능
- block의 속성을 유지하면서, inline형태로 두고 싶으면 inline-block사용 가능

## 3.10 Flexbox

- display : flex(box);
- body는 box의 크기만큼만 큼, 그래서 박스가 화면 정중앙에 있게 하고싶으면 Body height를 100vh로 맞춰줘야함
- [flexbox참고](https://heropy.blog/2018/11/24/css-flexible-box/)
- inline-block 문제를 해결하기 위해 고안된 flexblock : 박스를 일정하게 배열!
- flex rules

  1. '자식 tag(flex item)'가 아닌 상위의 '부모 tag(flex container)'를 display:flex; 로 만든다.
  2. flex 컨테이너(부모 tag)는 2개의 축(axis)를 가진다.

     a) justify-content: main axis(주축) 배열에 영향

     b) align-items: cross axis(교차축) 배열에 영향

  \*flex-start; 왼쪽or위쪽 정렬 / center; 가운데 정렬 / flex-end; 오른쪽or아래쪽 정렬 /space-evenly; 빈 공간을 같은 크기로 분배 / ...

  \*flex-direction : row; (default: 주축-수평)
  column; (변경 가능: 주축-수직)

  ​ 3. 부모tag에 height: 000vh; 추가하여 화면 크기(맥, 아이패드, 아이폰 등)에 관계 없이 동일한 배열 가능, flex 컨테이너가 height을 가지고 있지 않다면 박스크기에 맞춰 달라진다.
  \*vh(viewport height; 스크린 높이) : 100vh는 화면 높이의 100%를 뜻함

## 3.12 Fixed

- position : fixed; 화면을 스크롤 해도 계속 그자리에 있는 기능
- 레이아웃에서 초기에 위치한 자리에 계속 고정되어 있음
- 초기 위치를 이전 block 위치와 관계없이(이전 block뒤에 위치하는 것이 아니라) 페이지에서의 위치로 고정하고 싶다면?  
  → top/bottom/left/right 중 하나만 수정해도 이전에 위치한 block은 무시하고 화면에 배치됨, **아예 다른 layer에 있는 것**
- 맨처음 위치 기준으로 x,y축으로 움직이는듯. right 만 설정하면 y축은 기존 위치 그대로 오른쪽으로만 붙음
- t/b/l/r 위치 기준은 화면 맨 끝부터(0px로 하면 해당위치 맨 끝으로 붙음)

## 3.13 Relative Absolute

- position: static(default)
- position: relative; element가 초기에 위치했던 곳에서 상대적으로 위치 변경 가능(top/bottom/left/right)
- position: absolute; 가장 가까운 **relative부모** 를 기준으로 이동시켜줌(t/b/l/r) 부모들이 relative아니라면 body 기준으로

## 3.14 Pseudo Selector

- 세부적으로 element를 선택할 수 있게 해주는 것
- 선택자(selector): class, id(?) 뒤에 붙여서도 사용 가능 //////(last-child, first-child, nth-child(n, 2n, 2n+1), even, odd)
  - class.last-child의 경우 같은 level단에서 맨 마지막에 있는 class에 효과 적용이 됨(그 class name을 가진 애한테 적용)
  - 각기 다른 부모 아래에 있으면 각각 적용됨
- input: required/optional
- attribute selector : `input[type="password"]`, `input[placeholder="username"]`  
  `input[placeholder ~="name"]` =대신 ~=사용하면 name이라는 단어가 포함된 모든 placeholder에 효과 적용  
  $=".org" 는 .org로 끝나는 모든 anchor도 선택할 수 있음

## 3.15 Combinators

1. `div span {text-decoration : underline;}`  
   부모 자식; 이렇게하면 div밑에 있는 모든 span이 효과를 가짐(a b c:a아래 b아래 c 이런식으로 여러개도 가능)
2. `div > span {~~}`  
   부모 바로밑자식; 바로 밑 자식(상위 요소에서 하위 요소가 직계 자손으로 있을 때)에게만 스타일을 적용시킬 수 있음
3. `div + span`  
   형제와 바로 뒤에오는 형제; 인접해 있는 형제에게 스타일을 적용 시킬 수 있음
4. `div ~ span`  
   형제와 형제; 바로 뒤에 인접하지 않아도 형제관계일 때 스타일 적용시킬 수 있음

## 3.16 states

- [css]`button or a ...:--{}`

1. active: 버튼을 누르고 있을 때
2. focus: (키보드로)선택 되었을 때; input id password 입력하는 란 선택했을 때
3. hover: 마우스가 대상 위에 있을 때
4. visited: 링크에만 적용 됨, 한번 방문한 기록이 있는 사이트
5. focus within: 선택 되면 부모에 효과가 적용이 됨

- `form:hover input{dd}`: 이런식으로 if문처럼 사용 가능, 다른 element와 연계해서 사용 가능(부모:hover 자식{}만 되는지는 잘;)
- `form:hover input:focus{}`: 이렇게 여러개 사용도 가능

## 3.17 Recap

- pseudo element

1. input::placeholder
2. p::selection: 구문 드래그 하면 색깔 바뀌는거
3. p::first-letter: 첫번째 문자만 꾸밀 수 있음; first-line도 가능

## 3.18 Colors and Variables

- CSS에 :root라는 element를 만들어줌; root는 기본적으로 모든 document의 뿌리가 됨
- --main-color: red; 등록한 후 필요한 곳에 var(--main-color)이런식으로 변수처럼 사용 가능
- 변수 naming 형식 : --name, 공백은 -로 채워야함

---

## 4.0 Transitions

- 형식(속성) : `transition: background-color 10s ease-in-out;
  - 그냥 all해서 변화하는 모든 것 다 바꿀 수도 있음
  - 반점으로 구분해서 여러개 넣을 수 있음
- 어떤 상태에서 다른 상태로의 변화를 애니메이션으로 만드는 방법
- transition은 state가 없는 요소에 붙어야함  
  (state가 있는 곳에 transition을 준다면 state에서 벗어나면 원래상태로 바로 돌아가버림)
- 바뀌고 싶은 속성은 state있는 요소, 없는 요소 둘 다에 들어있어야하고, state가 있는 요소에 변화 결과 를 작성해야함

## 4.1 Transformations

- 형식(속성): transform: rotateY(),scaleX()... (여러개 중복으로도 가능)
- 한 요소를 변형 시킬 수 있음
- 형제 요소에 영향을 주지 않음 ex)오른쪽으로 translation 돼도 그 옆에 있는 element는 움직이지 않음
- box차원에서 일어나느게 아니라 픽셀의 다른 부분에서 일어남(layer다르다고 생각하면 될듯)
- transition하고 transform하고 결합하면 애니메이션 효과 가능

## 4.3 Animation

```html
@keyframes 애니메이션 이름 { from{ } to { } } 사용하기 img { animation :
애니메이션이름 재생시간 옵션 (infinite)}
```

- transiton말고 계속 재생되는 애니메이션을 얻고 싶을 때 사용
- from to 말고, 1,2,3,4,5...10 혹은 0% 25% 50% 75% 100% 같이 여러 단계로 나눠서 애니매이션을 만들 수 있음
- 다른 property들도 animation이 되긴 하는데 일부 property는 애니메이션이 잘 안되므로 transform 쓰는것을 권장

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
  - body아래에 위와 같은 script 추가(**스크립트는 항상 마지막에 있어야함**)
  - 이미지 찾고 <i class~> 라고 적힌 html 복붙하면 됨(여기서 i 는 icon의 줄임말임)
  - icon 복붙한 코드 이름 옆에
    `fa-lg`, `fa-2x`등 추가해서 아이콘 크기 변경 가능

## 6.6 Sign Up Screen part Three

- `reset.css` 파일을 새로 만들고, reset css 내용 넣어서 css파일에서 @import, html에 link추가는 좋지 않은 방법
- **구분되는 항목 별로 css파일 따로 만들어서 한번에 import**
- 브라우저가 기본으로 만드는 style을 전부 없애고 직접 디자인 하는게 더 좋은 방법
- 브라우저가 기본으로 html에 적용시키는 style 없애는게 reset.css

## 6.9 Recap and Froms

- CSS Class name : BEM방법으로 class를 만들던지, id로 not 이런거 선택해서 만들던지 이거는 개인이 편하고 효율적이라고 생각하는 방식으로 하는게 맞음
- BEM : Block, Element, Modifier/ 기본적으로 ID를 사용하지 않으며 class 만을 사용, 어떤 목적인가에 따라 이름지음 ex).header\_\_navigation--navi-text  
  https://nykim.work/15
- 페이지 넘어갈때 아래와 같은 방식으로 사용하는데, method 에 GET방식, POST 방식(백엔드 서버가 있는 경우 사용)이 있고 GET방식은 보안에 취약해서 username, password와 같은 정보는 GET 방식으로 보내면 안됨. URL에 포함돼도 상관없는 정보들만 보낼 것.
- action attribute는 form내에 입력한 값들을 전달할 서버에 대한 경로

  ```html
  <form action="friends.html" method="" id="login-form"></form>
  ```

## 6.10 Navigation Bar

- nav는 시맨틱 태그의 일종
- 구글 검색했을 때 타이틀 아래 리스트 처럼 있는 것도, navigation 안에 있는 ul의 li를 찾아서 가게 해주는 것
  - li는 ul, ol아래에 `<li>내용</li>` 이런식으로 리스트 구성 요소들 나타내는 것, list아래에 ul, ol 또 사용 가능
- VSC 단축키 : nav>ul>li\*4>a

  ```html
  <nav>
    <ul>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
      <li><a href=""></a></li>
    </ul>
  </nav>
  ```

  - import 순서 중요, 만약 variables를 나중에 import하면 그 전에 있는 css 에서는 variable 사용 못함
  - 위치 스크롤 하더라도 고정하고 싶은 경우 position : fixed;

## 6.11 Border Box

- Width : 100%하고 나서 padding 을 줘버리면 padding+100%길이 그대로 유지돼서 padding만큼 오른쪽으로 밀려버림, 그래서 `box-sizing: border-box;` 이게 박스사이즈 그대로 유지하고 내측에 padding만 추가해주라는 명령어  
  (css box padding의 디폴트 원리
  200픽셀의 박스에 50픽셀의 패딩을 주면, css는 기존 박스의 가로를 유지하기 위해 50만큼 박스를 늘림.
  이를 막기 위해 box-sizing:border-box를 쓰면 box의 크기를 유지한 채 padding을 줄 수 있다.)

## 6.12 Nav bar

- block을 원으로 만들고 싶으면 border-radius 를 block 크기의 절반으로 입력하면 됨 ex) width:10px; -> border-radius:5px;
- position: absolute는 가장 가까운 position: relative를 기준으로 자리잡음

## 6.15 Friends Screen

- screen : 그 페이지에만 있는 유니크한 CSS
- components : 여러 페이지에서 공용으로 사용할 수 있는 CSS
- div안에 있는 아이콘들 CSS주려면 .classname i{}
- icon은 text, font라고 생각하면 됨, front처럼 color 지정 가능
- \> : chevron

## 6.16 User component

- VSC 단축키 : .class_name\*2 이런식으로 적어도 div 생성됨
- 반복 되는 것들은 component로 만들어서 계속 사용한다
- class ="dkfjkejf ejkflsjkf" 하면 클래스 2개 할당하는 것

## 6.21 Find screen

- css에서 icon사이즈를 font-size로 지정해서 변경 가능
- ex
  ```css
  .find-icons__icon i {
    font-size: 35px;
  }
  ```
- 같은 코드가 계속 반복된다면 변수로 만들어서 사용하는 것도 좋음
- span에는 class명을 부여해 줄 필요가 없음 -> .class span{}이런식으로 명확하게 알면 괜춘
- 디자인적인 요소로 대문자가 필요하다면, 소문자로 작성하고 CSS에서 대문자로 바꿔줄 수 있음 `text-transform : uppercase;`
