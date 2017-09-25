"use strict"

module.exports = function check(str, bracketsConfig) {
    let stack = [];

    function checkThere (str) {
        let i;
        for (i = 0; i < bracketsConfig.length; i++) {
            if (str == bracketsConfig[i][0] || str == bracketsConfig[i][1]) return true
        }
        return false
    };

    function checkEqual (str) {
        let i;
        for (i = 0; i < bracketsConfig.length; i++) {
            if (str == bracketsConfig[i][0] && bracketsConfig[i][0] == bracketsConfig[i][1]) {
                return true
            }
        }
        return false
    };

    function equalDelAdd(str){
        if (stack[stack.length - 1] == str) {
            stack.pop();
        }else {
            stack.push(str);
        }
    };

    function checkLeft (str) {
        let i;
        for (i = 0; i < bracketsConfig.length; i++) {
            if (str == bracketsConfig[i][0]) return true
        }
        return false
    };

    function checkRight (str) {
        let i;
        for (i = 0; i < bracketsConfig.length; i++) {
            if (str == bracketsConfig[i][1] && stack[stack.length-1] == bracketsConfig[i][0]) {

                return true
            }
        }
        return false
    };

    let i;
    for (i = 0; i < str.length; i++) {
        let k = str.charAt(i);
        if (!checkThere(k)) {
            return false
        } else if (checkEqual(k)) {
            equalDelAdd(k);
            continue
        } else if (checkLeft(k)) {
            stack.push(k);
            continue
        } else if (checkRight(k)) {
            stack.pop();
            continue
        };
        return false
    }
    return stack.length == 0
};