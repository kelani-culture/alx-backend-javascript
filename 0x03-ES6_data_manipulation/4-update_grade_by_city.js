export default function updateStudentGradeByCity(students, city, newGrade) {
  const dict = students
    .filter((data) => data.location === city)
    .map((data) => {
      const newObj = newGrade.find((grade) => grade.studentId === data.id);
      const studata = data;
      if (newObj) {
        studata.grade = newObj.grade;
      } else {
        studata.grade = 'N/A';
      }
      return studata;
    });
  return dict;
}
