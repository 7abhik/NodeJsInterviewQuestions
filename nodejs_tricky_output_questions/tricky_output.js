(function () {
	setTimeout(() => console.log(1), 2000);
	console.log(2);
	setTimeout(() => console.log(3), 0);
	console.log(4);
})();
// 2,4,3,1

################################################.

function func1() {
	setTimeout(() => {
		console.log(x);
		console.log(y);
	}, 3000);
	var x = 2;
	let y = 12;
}
func1()

// 2,12

################################################


