module.exports = function check(str, bracketsConfig) {
    let stack = [];

    this.checkThere = function (str) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (str == bracketsConfig[i][0] || str == bracketsConfig[i][1]) return true
        }
        return false
    };

    this.checkEqual = function (str) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (str == bracketsConfig[i][0] && bracketsConfig[i][0] == bracketsConfig[i][1]) {
                return true
            }
        }
        return false
    };

    this.equalDelAdd = function (str){
        if (stack[stack.length - 1] == str) {
            stack.pop();
        }else {
            stack.push(str);
        }
    };

    this.checkLeft = function (str) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (str == bracketsConfig[i][0]) return true
        }
        return false
    };

    this.checkRight = function (str) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (str == bracketsConfig[i][1] && stack[stack.length-1] == bracketsConfig[i][0]) {

                return true
            }
        }
        return false
    };

    for (let i = 0; i < str.length; i++) {
        let k = str.charAt(i);
        if (!this.checkThere(k)) {
            return false
        } else if (this.checkEqual(k)) {
            this.equalDelAdd(k);
            continue
        } else if (this.checkLeft(k)) {
            stack.push(k);
            continue
        } else if (this.checkRight(k)) {
            stack.pop();
            continue
        };
        return false
    }
    return stack.length == 0
};




