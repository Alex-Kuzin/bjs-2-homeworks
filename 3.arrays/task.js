function compareArrays(arr1, arr2) {
  return arr1.length == arr2.length && arr1.every((v,i)=>v === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
	if (gender == "мужской") {
		gender = "мужской";
	} else {
		if (gender == "женский") {
			gender = "женский";
		} else {
			return 0;
		}
	}
	if (users.length == 0) {
		return 0;
	} else {
		let result = users.filter((user) => user.gender.match(gender)).map((user) => user.age);
		let sum = 0;
		for (var i = 0; i < result.length; i++) {
			sum += result[i];
		}
		let avg = (sum / result.length);
		return avg;
	}
}
