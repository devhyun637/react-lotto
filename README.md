<p align="middle" >
  <img width="200px;" src="https://raw.githubusercontent.com/woowacourse/javascript-lotto/main/src/images/lotto_ball.png"/>
</p>
<h2 align="middle">Level2 - 행운의 로또</h2>
<p align="middle">React 로또 어플리케이션</p>
<div align="center">
  <img src="https://img.shields.io/badge/language-react-skyblue.svg?style=flat-square" />
  <img src="https://img.shields.io/badge/style-styled--component-yellowgreen"/>
</div>
</p>

## 데모 사이트

- 마지막 업데이트 : 2021.06.14
- 티케의 [행운의 React-Lotto](https://devhyun637.github.io/react-lotto/)

## 📝 구현목록

### Step1

- [x] `Class Component`를 사용합니다.
- [x] 로또 구입 금액을 입력하면, 금액에 해당하는 로또를 발급해야 한다.
- [x] 로또 1장의 가격은 1,000원이다.
- [x] 소비자는 **자동 구매**만 할 수 있다.
- [x] 로또 번호는 번호보기 토글 버튼을 클릭하면, 볼 수 있어야 한다.
- [x] 결과 확인하기 버튼을 누르면 당첨 통계, 수익률을 모달로 확인할 수 있다.
- [x] 로또 당첨 금액은 고정되어 있는 것으로 가정한다.
- [x] 다시 시작하기 버튼을 누르면 초기화 되서 다시 구매를 시작할 수 있다.

#### 구현 목록

1. 사용자는 금액 입력을 할 수 있다.

- [x] autofocus를 통해 로또 구입 금액 입력에 대한 인지를 할 수 있다.
- ~~[ ] 거스름 돈을 거슬러준다.~~
- [x] 금액은 1,000원 단위만 입력할 수 있다.
- [x] 최소 금액은 1,000원이고 최대 금액은 50,000원이다.
- [x] 입력한 후에 금액 입력 form은 disable 된다.

2. 사용자는 로또를 구입하고, 로또 번호를 확인할 수 있다.

- [x] 로또의 번호는 1 ~ 45 사이의 중복되지 않는 번호이다.
- [x] 지불한 금액에 해당하는 로또를 발급받는다.
- [x] 로또 개수 만큼의 티켓 아이콘을 보여준다.
- [x] 번호 보기 버튼을 클릭하면, 구입한 로또 번호를 보여준다.

3. 사용자는 로또 당첨 번호를 입력할 수 있다.

- [x] 로또 당첨 번호는 1 ~ 45 사이의 중복되지 않는 번호이다.
  - [x] 보너스 번호에 중복된 숫자를 입력했을 때, alert로 알린다.
- [x] 로또 당첨 번호는 6개의 당첨 번호와 1개의 보너스 번호로 이루어져있다.
- ~~[ ] 두자리 숫자를 입력하면 자동으로 다음 번호를 입력할 수 있다.~~
- ~~[ ] 당첨 번호 초기화 버튼을 선택하면, 당첨 번호 input이 전부 초기화 된다.~~

4. 사용자는 당첨 결과를 확인하고, 프로그램을 재시작 할 수 있다.

- [x] 결과 확인 버튼을 선택하면, 모달 창이 열린다.
- [x] 등수 별 당첨 금액과 수익률을 확인할 수 있다.
- [x] ❌ 버튼이나 dimmed 된 영역을 선택하면, 모달 창을 닫을 수 있다.
- [x] 다시 시작하기 버튼을 누르면, 프로그램을 다시 시작한다.

### Step2

- [x] Step1의 Class Component를 Function Component로 마이그레이션 합니다.

### 공통 심화

- [ ] UI를 통해 **실시간으로** 당첨 번호 발표까지 남은 시간을 제공합니다.
- [ ] 다시 시작하기 버튼을 누르면 당첨 번호 발표 시간도 사라진다.

## 👏 Contributing

만약 미션 수행 중에 개선사항이 보인다면, 언제든 자유롭게 PR을 보내주세요.

<br>

## 🐞 Bug Report

버그를 발견한다면, [Issues](https://github.com/woowacourse/react-lotto/issues)에 등록해주세요.

<br>

## 📝 License

This project is [MIT](https://github.com/woowacourse/react-lotto/blob/main/LICENSE) licensed.
