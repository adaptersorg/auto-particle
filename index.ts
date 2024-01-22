export const 조사 = {
  은_는: "은_는",
  이_야: "이_야",
  이_여: "이_여",
  이_라: "이_라",
  으_로: "으_로",
  와_과: "와_과",
  을_를: "을_를",
  이_가: "이_가",
  이_랑: "이_랑",
  이_의: "이_의",
  이_와: "이_와",
  아_야: "아_야",
} as const;

const isUnderlay = (word: string) => {
  if (typeof word !== "string") return false;
  const lastLetter = word[word.length - 1];
  const uni = lastLetter.charCodeAt(0);
  if (uni < 44032 || uni > 55203) return false;
  return (uni - 44032) % 28 != 0;
};

const particleSwitch = (keyword: string, state: string, isName: boolean) => {
  switch (state) {
    case 조사.은_는:
      if (isUnderlay(keyword))
        return isName ? `${keyword}이는` : `${keyword}은`;
      return `${keyword}는`;
    case 조사.이_야:
      if (isUnderlay(keyword)) return `${keyword}이야`;
      return `${keyword}야`;
    case 조사.이_여:
      if (isUnderlay(keyword)) return `${keyword}이여`;
      return `${keyword}여`;
    case 조사.이_라:
      if (isUnderlay(keyword)) return `${keyword}이라`;
      return `${keyword}라`;
    case 조사.으_로:
      if (isUnderlay(keyword))
        return isName ? `${keyword}이로` : `${keyword}으로`;
      return `${keyword}로`;
    case 조사.와_과:
      if (isUnderlay(keyword))
        return isName ? `${keyword}이와` : `${keyword}과`;
      return `${keyword}와`;
    case 조사.을_를:
      if (isUnderlay(keyword))
        return isName ? `${keyword}이를` : `${keyword}을`;
      return `${keyword}를`;
    case 조사.이_가:
      if (isUnderlay(keyword))
        return isName ? `${keyword}이가` : `${keyword}이`;
      return `${keyword}가`;
    case 조사.이_랑:
      if (isUnderlay(keyword)) return `${keyword}이랑`;
      return `${keyword}랑`;
    case 조사.이_의:
      if (isUnderlay(keyword) && isName) return `${keyword}이의`;
      return `${keyword}의`;
    case 조사.이_와:
      if (isUnderlay(keyword) && isName) return `${keyword}이와`;
      return `${keyword}의`;
    case 조사.아_야:
      if (isName) return isUnderlay(keyword) ? `${keyword}아` : `${keyword}야`;
  }
};

export const particle = (keyword: string) => {
  const name = (state: string) => particleSwitch(keyword, state, true);

  const word = (state: string) => particleSwitch(keyword, state, false);

  return { name, word };
};
