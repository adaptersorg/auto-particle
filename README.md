## auto particle

단어의 받침 여부를 기준으로 조사를 붙여 단어를 편리하게 형용할 수 있게 도와주는 라이브러리입니다.

### Usage

#### word

일반적인 단어에 조사를 붙여야할 경우, particle().word() 함수를 사용할 수 있습니다.

```js
import { 조사, particle } from "auto-particle";
/** 이/가를 판단해야할 경우 */
const word1 = "광장";
const word2 = "택시";

const particleWord1 = particle(word1).word(조사.이_가);
const particleWord2 = particle(word2).word(조사.이_가);

console.log(particleWord1); // 광장이
console.log(particleWord2); // 택시가
```

#### name

이름 중에서도, 성을 제외하고 부르는 등 친근하게 이를 형용해야할 경우, particle().name() 함수를 사용할 수 있습니다.

```js
import { 조사, particle } from "auto-particle";
/** 이/가를 판단해야할 경우 */
const name1 = "우빈";
const name2 = "영희";

const particleName1 = particle(name1).name(조사.이_가);
const particleName2 = particle(name2).name(조사.이_가);

console.log(particleName1); // 우빈이가
console.log(particleName2); // 영희가
```

### More

지원하는 모든 예시는 다음과 같습니다.

#### word

```js
particle("광장").word(조사.은_는); // 택시는
particle("광장").word(조사.이_야); // 택시야
particle("광장").word(조사.이_여); // 택시여
particle("광장").word(조사.이_라); // 택시라
particle("광장").word(조사.으_로); // 택시로
particle("광장").word(조사.와_과); // 택시와
particle("광장").word(조사.을_를); // 택시를
particle("광장").word(조사.이_가); // 택시가
particle("광장").word(조사.이_랑); // 택시랑

particle("택시").word(조사.은_는); // 광장은
particle("택시").word(조사.이_야); // 광장이야
particle("택시").word(조사.이_여); // 광장이여
particle("택시").word(조사.이_라); // 광장이라
particle("택시").word(조사.으_로); // 광장으로
particle("택시").word(조사.와_과); // 광장과
particle("택시").word(조사.을_를); // 광장을
particle("택시").word(조사.이_가); // 광장이
particle("택시").word(조사.이_랑); // 광장이랑
```

#### name

```js
particle("우빈").name(조사.은_는); // 우빈이는
particle("우빈").name(조사.이_야); // 우빈이야
particle("우빈").name(조사.이_여); // 우빈이여
particle("우빈").name(조사.이_라); // 우빈이라
particle("우빈").name(조사.으_로); // 우빈이로
particle("우빈").name(조사.와_과); // 우빈이와
particle("우빈").name(조사.을_를); // 우빈이를
particle("우빈").name(조사.이_가); // 우빈이가
particle("우빈").name(조사.이_랑); // 우빈이랑
particle("우빈").name(조사.이_의); // 우빈이의

particle("영희").name(조사.은_는); // 영희는
particle("영희").name(조사.이_야); // 영희야
particle("영희").name(조사.이_여); // 영희여
particle("영희").name(조사.이_라); // 영희라
particle("영희").name(조사.으_로); // 영희로
particle("영희").name(조사.와_과); // 영희와
particle("영희").name(조사.을_를); // 영희를
particle("영희").name(조사.이_가); // 영희가
particle("영희").name(조사.이_랑); // 영희랑
particle("영희").name(조사.이_의); // 영희의
```

P.S. 내가 쓸라고 만듦 히히
