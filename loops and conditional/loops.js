var grades = [2, 5, , , 9, 7, 8];
var sun = 0;
var count = 0;
if (grades.length > 0) {
    for (index = 0; index < grades.length; index++) {
        if (grades[index] != undefined) {
            sun += grades[index];
            count++;
        }
    }
    document.write(sun / count);
}
else
    document.write("Empty Array");
