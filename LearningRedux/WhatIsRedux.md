# Redux(리덕스) 

> 크로스 컴포넌트 또는 앱 와이드 상태를 위한 상태 관리 시스템
State 데이터 관리를 도와준다.
<br />
데이터를 다수의 컴포넌트나 앱 전체에서 관리하도록 해준다.

Local State : 데이터가 변경되어서 하나의 컴포넌트에 속하는 UI에 영향을 미치는 상태, 토글 버튼 등
 <br />
Cross-Component State: 다수의 컴포넌트에 영향을 미치는 상태 컴포넌트, 모달 컴포넌트 등 (props drilling/chains)
 <br />
App-Wide State: 애플리케이션의 모든 컴포넌트에 영향을 미치는 상태, 사용자 인증 등 (props drilling/chains)
 <br />
  <br />

### 리액트 컨텍스트가 있는데 왜 사용하나?

리액트 컨텍스트 : useState Hook과 useReducer Hook 등
- 컨텍스트의 잠재적 단점
  - 컨텍스트를 사용하면 설정과 컨텍스트를 이용한 상태 관리가 복잡해질 수 있다.
  - 다수의 컨텍스트로 나누면 중첩된 JSX문이 늘어나고, 하나에 몰아넣으면 관리가 어려워진다.
  - 데이터가 자주 변경되는 경우의 사용은 적합하지 않다.

### 리덕스의 작동 방식
  - 한 개의 중앙 데이터 저장소 → 전체 애플리케이션 상태 저장
  - 중앙 데이터 저장소에 데이터를 저장해서 컴포넌트 안에서 직접 사용하게 함
  - 컴포넌트가 저장소를 구독하고 데이터가 변경될 때마다 컴포넌트에 필요한 데이터를 받음
  - 저장된 데이터는 절대 직접 조작하지 않음 → Reducer 함수를 이용해서 변형을 주는 방식
  - Reducer 함수가 입력을 받은 후 변환하고 줄임
  - 데이터 변경을 연결하는 것은 Action이 담당함 (Action은 모던 자바스크립트 객체)
  - 컴포넌트가 Action을 발송하면 Reducer가 담당해야하는 작업을 설명하게 됨
  - Redux가 Action을 Reducer로 전달하고 작업을 Reducer가 수행하게 됨
  - Reducer가 새로운 상태를 출력하면 새로운 상태가 기존 상태를 대체하며 저장됨
  - 데이터 저장소의 상태가 업데이트 되면 컴포넌트는 구독 알림을 받고 UI를 업데이트 할 수 있게 됨

Reducer는 항상 기존의 상태와 발송된 액션을 받아야하고 어떠한 출력(새로운 상태 객체)을 리턴해야만 한다.
 <br />
  → Reducer는 pure function 이여야 한다.
<br />
 ❓ pure function: 동일한 입력 값을 넣으면 동일한 출력이 산출되는 함수

```js
const redux = require('redux');

// Reducer 함수 생성
const counterReducer = (state = {counter: 0}, action) => { // state = {counter: 0} : 초기 상태 지정
  if(action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if(action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// 중앙 데이터 저장소 생성
const store = redux.createStore(counterReducer);

console.log(store.getState());

// 구독
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

// 액션
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});
```