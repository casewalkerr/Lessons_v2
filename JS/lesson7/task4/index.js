const getMessagesForBestStudents = (allStudents, faildStudents) =>{
const passedStudents = allStudents
.filter(name => !faildStudents.includes(name));
const masseges = passedStudents
.map(name => 'Good job, ' + name);
return masseges;
};