function StudentCard(props) {
  return (
    <div >
      <h3>{props.name}</h3>
      <p><b>Course:</b> {props.course}</p>
      <p><b>City:</b> {props.city}</p>
      <p><b>State:</b> {props.state}</p>
      <p><b>Country:</b> {props.country}</p>
    </div>
  );
}

function StudentList() {
  return (
    <div>
      <h2>Task 4: Props</h2>
     
      
      <StudentCard 
        name="Dharmik Gajjar" 
        city="Chelmsford" 
        state="Essex" 
        country="England" 
        course="Fullstack development" 
      />
      
      <StudentCard 
        name="Himanshu sansarkar" 
        city="Surat" 
        state="Gujarat" 
        country="India" 
        course="Node JS" 
      />
      
      <StudentCard 
        name="Jay Vyas" 
        city="Osaka" 
        state="Osaka Prefecture" 
        country="Japan" 
        course="React JS" 
      />
      
      <StudentCard 
        name="Gaurav Kaji" 
        city="Banglore" 
        state="Karnataka" 
        country="India" 
        course="UI/UX Design" 
      />
      
      <StudentCard 
        name="Ibhrahim Memon" 
        city="Perth" 
        state="State of Western Australia" 
        country="Australia" 
        course="Data Science" 
      />
      <hr />
    </div>
    
  );
}

export default StudentList;