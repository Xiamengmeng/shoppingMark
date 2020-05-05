export let illegalChar = function (str) {
    if (str) {
        return str.replace(/\\/g, "")
    }
}

export let getNowFormatDate = function () {
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var strDate = date.getDate()
    var strHour = date.getHours()
    var strMinutes = date.getMinutes()
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (strHour >= 0 && strHour <= 9) {
        strHour = "0" + strHour;
    }

    if (strMinutes >= 0 && strMinutes <= 9) {
        strMinutes = "0" + strMinutes;
    }

    var currentdate = year + month + strDate + strHour + strMinutes + '00';
    return currentdate;
}
