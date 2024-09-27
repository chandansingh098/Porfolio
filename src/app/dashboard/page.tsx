"use client"
// import React from "react";
// import StudentDashboard from "../components/StudentDashboard/Students";
// const Dashboard = () => {
//   return (
//     <>
//       <div className="items-center justify-center">
//         <h2 className="text-center my-20 items-center justify-center text-4xl">
//           <span className="text-green-500">Welcome to </span> dashboard
//         </h2>
//       </div>
//       <div>
//         <StudentDashboard />
//       </div>
//     </>
//   );
// };

// export default Dashboard;

// pages/dashboard.tsx
// \src\app\dashboard\page.tsx
import { useEffect, useState } from 'react';

interface Student {
  id: number;
  name: string;
  email: string;
  age: number;
}

const Dashboard = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch('/Students/Students.ts');
      const data = await response.json();
      setStudents(data);
      setLoading(false);
    };

    fetchStudents();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <h1>Student Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

