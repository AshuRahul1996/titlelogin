import React, {useState}  from "react";



function BasicForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
      e.preventDefault();
      const newEntry ={
  
    
        id: new Date().getTime().toString(),
        email: email,
        password: password,
      };
      setAllEntry([...allEntry, newEntry]);
      console.log(allEntry);

}





return (
    <>
       
    
    <form action="" onSubmit={submitForm} className="el"> 
        <div  className="txthub">
          <h3>Login </h3>
          <label htmlFor="email" className="txt">Email: </label>
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="pass">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btnhub"> <a href="Todo">Login</a></button>
      </form>
        <div>
        {
          allEntry.map((curElem) =>{
            return(
                <div className="showDetailsStyle">
                    <p>
                        {curElem.email}
                    </p>
                    <p>{curElem.password}</p>
                </div>
            )
          })  
        }
        </div>
    </>

  );

}

export default BasicForm;
