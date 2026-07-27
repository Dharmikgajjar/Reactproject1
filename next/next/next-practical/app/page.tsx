import Link from 'next/link';

type Student ={
  id: number;
  name: string;
  age: number;
  department: string;
  email: string;
}


function StudentCard({ name, age, department , email }: Omit<Student, 'id'>) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px 0'
    }}>
      <h3>{name}</h3>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>department :</strong> {department }</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}


const students: Student[] = [
  { id: 1, name: 'Dharmik gajjar', age: 30, department : 'Computer Science', email: 'dharmik@gmail.com' },
  { id: 2, name: 'ibhrahim memon', age: 28, department : 'Data Science', email: 'i.memon@gmail.com' },
  { id: 3, name: 'Himanshu sansarkar', age: 30, department : 'Engineering', email: 'himanshu.s@gmail.com' },
];


export default function HomePage() {
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px' }}>
      <nav style={{ marginBottom: '20px' }}>
        <h2>Task 7: Next.js Basics </h2>
        <br />
        <br />
        <Link href="/about" style={{color: '#ff1601'}}>About</Link>
      </nav>

      <h1>Students Information </h1>

      <div>
        {students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            age={student.age}
            department ={student.department }
            email={student.email}
          />
        ))}
      </div>
    </main>
  );
}