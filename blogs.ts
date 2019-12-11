function foo() {
	var x = 10;
	return function() {
		return x;
    }
}


var bar = foo();
