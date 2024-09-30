import students from '@/app/student';
import { Student } from '@/app/student';
 
interface Props {
  params: {
    userId: string;
  };
}
 
const StudentDetails = ({ params }: Props) => {
  const { userId } = params;
 
  // Find the student by their id
  const student: Student | undefined = students.find((student) => student.userId === Number(userId));
 
  if (!student) {
    return <p>Student not found</p>;
  }
 
  return (
    <div>
      <h1>Student Details</h1>
      <p><strong>ID:</strong> {student.userId}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Age:</strong> {student.age}</p>
    </div>
  );
};
 
export default StudentDetails;