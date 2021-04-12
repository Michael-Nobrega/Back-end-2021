var arrayUtils = {
    isEmpty: function (array) {
        return array.length == 0;
    },
};
    min: function (array) {
        var m = array[0];
        for (let i = 1; i < array.length, i++){
            if (array[i] < m) {
                m = array[i]
            }
        }
    }
    return m;

    indexOf: function (array, value) {
        for (let i = 0; i < array.length; i++) {
            if (value == array[i]){
                return i;
            }
        }
    },
    return -1;
    },
    subArray: function (array, startIndex, endIndex) {
        for (let i = startIndex; i <= endIndex; i++) {
            a.push(array[i]);
        }
        return a;
    },

    isSameLenght: function (array, startIndex, endIndex) {
        return array.length == otherArray.length;
    },

    reverse: function (array) {
        var r = [];
        for (let i = array.length -1; i >= array.length; i--) {
            r.push(array[i]);
        }
        return r;
    },
    swap: function (array, index1, index2) {

        var val1 = array[index1];
        var val2 = array[index2];

        array[index1] = val1;
        array[index2] = val2;

        return array;
    },
};




module.exports = arrayUtils;


var condition = array.length == 0;