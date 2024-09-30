import React from 'react'
// const Users = () => {
//   return (
//     <div>Users</div>
//   )
// }

// export default Users

// pages/students.js
// import Link from 'next/link';
// import students from '@/app/student';

// const Users = () => {
//   return (
//     <div>
//       <h1>Students</h1>
//       <ul>
//         {students.map(student => (
//           <li key={student.id}>
//             <Link href={`/students/${student.userId}`}>
//               {student.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Users;

import Link from 'next/link';
import students from '../student';
 
const Users = () => {
  return (
    <div>
      <h2 className='text-center text-4xl'>Student List:</h2>
      <ul>
        {students.map((student) => (
          <li key={student.userId}>
            <Link href={`/students/${student.userId}`}>
              {student.name} - View Details
            </Link>
            <p>{student.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default Users;