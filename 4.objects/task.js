function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (!this.marks) {
		return;
	}
	this.marks.push(...marksToAdd);
}

Student.prototype.getAverage = function() {
	if (this.marks.length != 0) {
		let sum = 0;
		for (let i = 0; i < this.marks.length; i++) {
			sum += this.marks[i];
		}
		return sum / this.marks.length;
	} else {
		return 0;
	}
}

Student.prototype.exclude = function(reason) {
	this.excluded = reason;
	delete this.subject;
	delete this.marks;
}
