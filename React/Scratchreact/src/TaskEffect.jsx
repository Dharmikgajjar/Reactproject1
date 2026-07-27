import { useState, useEffect } from "react";

function TaskEffect() {
  
  const [participants, setParticipants] = useState(() => {
    const savedData = localStorage.getItem("participantsData");
    return savedData ? JSON.parse(savedData) : [];
  });

 
  const [inputVal, setInputVal] = useState("");

 
  useEffect(() => {
    localStorage.setItem("participantsData", JSON.stringify(participants));
  }, [participants]);

  
  const insertParticipant = () => {
    if (inputVal === "") return;

    const newStudent = {
      id: Date.now(),
      fullName: inputVal
    };

    setParticipants([...participants, newStudent]);
    setInputVal(""); 
  };

  
  const removeParticipant = (id) => {
    const filteredList = participants.filter((student) => student.id !== id);
    setParticipants(filteredList);
  };

  return (
    <div>
      <h2>Task 6: Student Information Manager</h2>

    
      <div>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Enter student name..."
        />
        <button onClick={insertParticipant}>Add Student</button>
      </div>

     
      <div>
        <p>Total Students: {participants.length}</p>
        <ul>
          {participants.map((student) => (
            <li key={student.id}>
              {student.fullName}
              <button onClick={() => removeParticipant(student.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskEffect;