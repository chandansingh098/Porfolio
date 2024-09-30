// data/students.ts
export interface Student {
  userId: number;
  name: string;
  email: string;
  age: number;
}

const students: Student[] = [
  { userId: 1, name: 'Alice', email: 'alice@example.com', age: 20 },
  { userId: 2, name: 'Bob', email: 'bob@example.com', age: 21 },
  { userId: 3, name: 'Charlie', email: 'charlie@example.com', age: 22 },
  { userId: 4, name: 'David', email: 'david@example.com', age: 23 },
  { userId: 5, name: 'Eva', email: 'eva@example.com', age: 20 },
  { userId: 6, name: 'Frank', email: 'frank@example.com', age: 21 },
  { userId: 7, name: 'Grace', email: 'grace@example.com', age: 22 },
  { userId: 8, name: 'Hank', email: 'hank@example.com', age: 23 },
  { userId: 9, name: 'Ivy', email: 'ivy@example.com', age: 20 },
  { userId: 10, name: 'Jack', email: 'jack@example.com', age: 21 },
];

export default students;
