/**
 * @param {string} password
 * @return {number}
 */
var strongPasswordChecker = function(password) {
	let numc = 1;
	let upc = 1;
	let loc = 1;
	let cc = 0;
	let cc2 = 0;
	if(/[0-9]/.test(password) === true) {
		numc = 0;
	}
	if(/[a-z]/.test(password) === true) {
		loc = 0;
	}
	if(/[A-Z]/.test(password) === true) {
		upc = 0;
	}
	for(let i = 0; i < password.length; i++) {
		if(password[i] === password[i + 1] && password[i + 1] === password[i + 2]) {
			i += 2;
			cc += 1;
		}
	}
	if(password.length < 6) {
		return Math.max(loc + upc + numc, 6 - password.length);
	} else if(password.length <= 20) {
		return Math.max(loc + upc + numc, cc);
	} else if(password.length > 20) {
		password = password.split("");
		let y = password.length - 20;
		let x = password.length - 20;
		let count = 1;
		let a = [];
		let b = [];
		for(let i = 0; i < password.length; i++) {
			if(password[i] === password[i + 1]) {
				count += 1;
			} else {
				a.push(count);
				b.push(count);
				count = 1;
			}
		}
		let i = 0;
		while(i < 60 && x > 0) {
			for(let i = 0; i < b.length && x > 0; i++) {
				if(b[i] % 3 === 0 && b[i] >= 3) {
					b[i] = b[i] - 1;
					x = x - 1;
				}
			}
			for(let i = 0; i < b.length && x > 0; i++) {
				if(b[i] % 3 === 1 && b[i] >= 3) {
					b[i] = b[i] - 1;
					x = x - 1;
				}
			}
			for(let i = 0; i < b.length && x > 0; i++) {
				if(b[i] % 3 === 2 && b[i] >= 3) {
					b[i] = b[i] - 1;
					x = x - 1;
				}
			}
			i++;
		}
		for(let i = 0; i < b.length; i++) {
			for(let j = i + 1; j < b.length; j++) {
				if(b[i] >= 3 && b[j] >= 3 && b[i] % 3 === 0 && b[j] % 3 === 0 && b[i] !== a[i] && b[j] !== a[j]) {
					b[i] -= 1;
					b[j] += 1;
				} else if(b[i] >= 3 && b[j] >= 3 && b[i] % 3 === 0 && b[j] % 3 === 1 && b[i] !== a[i] && b[j] !== a[j]) {
					b[i] -= 1;
					b[j] += 1;
				} else if(b[i] >= 3 && b[j] >= 3 && b[i] % 3 === 1 && b[j] % 3 === 0 && b[i] !== a[i] && b[j] !== a[j]) {
					b[j] -= 1;
					b[i] += 1;
				}
			}
		}
		cc2 = 0;
		for(let i = 0; i < b.length; i++) {
			if(b[i] >= 3) {
				b[i] -= 3;
				cc2 += 1;
				i--;
			}
		}
		return Math.max(loc + upc + numc, cc2) + y;
	}
};