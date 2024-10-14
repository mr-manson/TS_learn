"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["IN_PROGRESS"] = 2] = "IN_PROGRESS";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
;
const res = {
    status: "Платеж успешен",
    statusCode: StatusCode.SUCCESS,
};
if (res.statusCode === StatusCode.SUCCESS) {
    console.log(res);
}
