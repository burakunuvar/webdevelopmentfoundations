// first() {
// 	var greet = "Hi";
// 	function second(){
// 		alert(greet);
// 	}
// 	return second;
// }

const first = () => {
		let greet = "Hi";
		const second = () => alert(greet);
		return second ;
}

var newFunc = first();
newFunc();
