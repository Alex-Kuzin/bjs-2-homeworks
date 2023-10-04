function getArrayParams(...arr) {
	let sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	let avg = (sum / arr.length).toFixed(2);
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	return {
		min: min,
		max: max,
		avg: Number(avg)
	};
}

function summElementsWorker(...arr) {
	if (arr.length == 0) {
		return 0;
	} else {
		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
			sum += arr[i];
		}
		return sum;
	}
}

function differenceMaxMinWorker(...arr) {
	if (arr.length == 0) {
		return 0;
	} else {
		let min = Math.min(...arr);
		let max = Math.max(...arr);
		let result = max - min;
		if (result > 0) {
			return result;
		}
		if (result < 0) {
			return result * -1;
		} else {
			return result;
		}
	}
}

function differenceEvenOddWorker(...arr) {
	if (arr.length == 0) {
		return 0;
	} else {
		let isOdd = (num) => num % 2 !== 0;
		let odd = arr.filter(isOdd);
		let res = odd.reduce(function(sum, elem) {
			return sum + elem;
		}, 0);

		let res2 = arr.reduce(function(sum, elem) {
			return sum + elem;
		}, 0);
		let res3 = res2 - res;
		let res4 = res3 - res;

		return res4;

	}
}

function averageEvenElementsWorker(...arr) {
	if (arr.length == 0) {
		return 0;
	} else {
		let sum = 0;
		let counter = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 == 0) {
				counter++;
				sum += arr[i];
			}
		}
		let average = sum / counter;
		return average;
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		let resultt = func(...arrOfArr);
		if (resultt > maxWorkerResult) {
			maxWorkerResult = resultt;
		}
	}
	return maxWorkerResult;
}
