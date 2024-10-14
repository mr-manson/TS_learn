enum StatusCode {
	SUCCESS = 1,
	IN_PROGRESS,
	FAILED,
};

const res = {
	status: "Платеж успешен",
	statusCode: StatusCode.SUCCESS,
};

if (res.statusCode === StatusCode.SUCCESS) {
	console.log(res);
}