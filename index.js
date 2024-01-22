"use strict";
exports.__esModule = true;
exports.particle = exports.조사 = void 0;
exports.조사 = {
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
    아_야: "아_야"
};
var isUnderlay = function (word) {
    if (typeof word !== "string")
        return false;
    var lastLetter = word[word.length - 1];
    var uni = lastLetter.charCodeAt(0);
    if (uni < 44032 || uni > 55203)
        return false;
    return (uni - 44032) % 28 != 0;
};
var particleSwitch = function (keyword, state, isName) {
    if (!keyword)
        return keyword;
    switch (state) {
        case exports.조사.은_는:
            if (isUnderlay(keyword))
                return isName ? "".concat(keyword, "\uC774\uB294") : "".concat(keyword, "\uC740");
            return "".concat(keyword, "\uB294");
        case exports.조사.이_야:
            if (isUnderlay(keyword))
                return "".concat(keyword, "\uC774\uC57C");
            return "".concat(keyword, "\uC57C");
        case exports.조사.이_여:
            if (isUnderlay(keyword))
                return "".concat(keyword, "\uC774\uC5EC");
            return "".concat(keyword, "\uC5EC");
        case exports.조사.이_라:
            if (isUnderlay(keyword))
                return "".concat(keyword, "\uC774\uB77C");
            return "".concat(keyword, "\uB77C");
        case exports.조사.으_로:
            if (isUnderlay(keyword))
                return isName ? "".concat(keyword, "\uC774\uB85C") : "".concat(keyword, "\uC73C\uB85C");
            return "".concat(keyword, "\uB85C");
        case exports.조사.와_과:
            if (isUnderlay(keyword))
                return isName ? "".concat(keyword, "\uC774\uC640") : "".concat(keyword, "\uACFC");
            return "".concat(keyword, "\uC640");
        case exports.조사.을_를:
            if (isUnderlay(keyword))
                return isName ? "".concat(keyword, "\uC774\uB97C") : "".concat(keyword, "\uC744");
            return "".concat(keyword, "\uB97C");
        case exports.조사.이_가:
            if (isUnderlay(keyword))
                return isName ? "".concat(keyword, "\uC774\uAC00") : "".concat(keyword, "\uC774");
            return "".concat(keyword, "\uAC00");
        case exports.조사.이_랑:
            if (isUnderlay(keyword))
                return "".concat(keyword, "\uC774\uB791");
            return "".concat(keyword, "\uB791");
        case exports.조사.이_의:
            if (isUnderlay(keyword) && isName)
                return "".concat(keyword, "\uC774\uC758");
            return "".concat(keyword, "\uC758");
        case exports.조사.이_와:
            if (isUnderlay(keyword) && isName)
                return "".concat(keyword, "\uC774\uC640");
            return "".concat(keyword, "\uC758");
        case exports.조사.아_야:
            if (isName)
                return isUnderlay(keyword) ? "".concat(keyword, "\uC544") : "".concat(keyword, "\uC57C");
    }
};
var particle = function (keyword) {
    var name = function (state) { return particleSwitch(keyword, state, true); };
    var word = function (state) { return particleSwitch(keyword, state, false); };
    return { name: name, word: word };
};
exports.particle = particle;
