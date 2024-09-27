// \src\app\components\StudentData\StudentData.ts

interface Student {
    id: number;
    name: string;
    email: string;
    age: number;
  }
  
  const students: Student[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', age: 20 },
    { id: 2, name: 'Bob', email: 'bob@example.com', age: 21 },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 22 },
    { id: 4, name: 'David', email: 'david@example.com', age: 23 },
    { id: 5, name: 'Eva', email: 'eva@example.com', age: 20 },
    { id: 6, name: 'Frank', email: 'frank@example.com', age: 21 },
    { id: 7, name: 'Grace', email: 'grace@example.com', age: 22 },
    { id: 8, name: 'Hank', email: 'hank@example.com', age: 23 },
    { id: 9, name: 'Ivy', email: 'ivy@example.com', age: 20 },
    { id: 10, name: 'Jack', email: 'jack@example.com', age: 21 },
  ];
  
  export default students;
  