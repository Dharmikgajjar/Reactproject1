import { useState } from "react";

function State() {
   
    const [hobby, setHobby] = useState("Travelling");

    
    const [Budget, setBudget] = useState(100000);

   
    const [Been, setBeen] = useState(false);

    
    const [Country, setCountry] = useState(["England", "France"]);

   
    const [Person, setPerson] = useState({
        fullName: "Dharmik Gajjar",
        department: "Engineering",
    });

    return (
        <div className="state-card">
            <h2 className="state-title">Task 5: State (useState)</h2>
            <hr className="state-divider" />

         
            <div className="state-section">
                <p>Hobby: <strong>{hobby}</strong></p>
                <button className="state-btn-primary" onClick={() => setHobby("Coding")}>
                    Change Hobby
                </button>
                <button className="state-btn-reset" onClick={() => setHobby("Travelling")}>
                    Reset
                </button>
            </div>

            <hr className="state-divider" />

         
            <div className="state-section">
                <p>Budget: <strong>{Budget}</strong></p>
                <button className="state-btn-primary" onClick={() => setBudget(prev => prev + 15000)}>
                    +
                </button>
                <button className="state-btn-primary" onClick={() => setBudget(prev => prev - 15000)}>
                    -
                </button>
                <button className="state-btn-reset" onClick={() => setBudget(100000)}>
                    Reset
                </button>
            </div>

            <hr className="state-divider" />

           
            <div className="state-section">
                <p>Travelled outside of india : <strong>{Been ? "Yes" : "No"}</strong></p>
                <button className="state-btn-primary" onClick={() => setBeen(prev => !prev)}>
                    Switch Status
                </button>
                <button className="state-btn-reset" onClick={() => setBeen(false)}>
                    Reset
                </button>
            </div>

            <hr className="state-divider" />

           
            <div className="state-section">
                <p>Wish list to travel : <strong>{Country.join(" | ")}</strong></p>
                <button
                    className="state-btn-primary"
                    onClick={() => {
                        if (!Country.includes("Greece")) {
                            setCountry([...Country, "Greece"]);
                        }
                    }}
                >
                    Add Country
                </button>
                <button className="state-btn-reset" onClick={() => setCountry(["England", "France"])}>
                    Reset
                </button>
            </div>

            <hr className="state-divider" />

            
            <div className="state-section">
                <p>Name: <strong>{Person.fullName}</strong></p>
                <p>Department: <strong>{Person.department}</strong></p>
                <button className="state-btn-primary" onClick={() => setPerson({ ...Person, department: "Product Design" })}>
                    Modify Department
                </button>
                <button className="state-btn-reset" onClick={() => setPerson({ fullName: "Dharmik Gajjar", department: "Engineering" })}>
                    Reset
                </button>
            </div>
            <hr />
        </div>
    ); 
}

export default State;