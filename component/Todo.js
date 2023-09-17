import React, { useState } from 'react'
// import todo from "./images/todo.png";
import "../App.css";

const Todo = () => {
  const [inputData,setinputData] = useState('');
  const [Title,setTitle]=useState([]);
  const addTitle =()=>{
    if(!inputData){

    }else{

    
    setTitle([...Title, inputData]);
    setinputData('')
    }
  }

  
  const deleteTitle =(id)=>{
  console.log(id);
  const updatetitle = Title.filter((elem, ind) =>{
    return ind !== id; //not match to id
  });
  setTitle(updatetitle);
}
const removeAll = ()=>{
  setTitle([]);
}
  return (
    <>
    <div className='main-div'>
         <div className='child-div'>
            <figure>
                {/* <img src={todo} alt='todologo'/> */}
                <figcaption>
                  Add your List Here
                </figcaption>
            </figure>
            <div className='addTitle'> 
            <input type='text' placeholder='write add Title..' id=''
            value={inputData}
            onChange={(e)=> setinputData(e.target.value)}
            />
            
            <button className='btnm' title='Add Title 'onClick={addTitle}>+</button>
            {/* <i className="fa-solid fa-plus add-btn" title='Add Title 'onClick={addTitle}></i> */}
            {/* // <FontAwesomeIcon icon="fa-solid fa-plus" title='Add Title 'onClick={addTitle}/> */}
            {/* <i className='fa fa-plus add-btn' title='Add Title 'onClick={addTitle}></i>  */}
            </div>
              
              <div className='showTitle'>

                {
                  Title.map((elem, ind)=>{
                    return(
                      <div className='eachTitle' key={ind}>
                      <h2>{elem} 
                      
                      <button className='btn' title='Delete Title' onClick={()=>deleteTitle(ind)}>-</button>
                      </h2>
                      {/* <i className='far fa-trash-alt add-btn' title='Delete Title' onClick={()=>deleteTitle}></i> */}
                    </div>
                    )
                  })
                } 
                {/* <div className='eachTitle'> */}
                  {/* <h3>Apple</h3> */}
                  {/* <i className='far fa-trash-alt add-btn' title='Delete Title'></i> */}

                {/* </div> */}
              </div>
              <div className='showTitle'>
                <button className='btn effect04' data-sm-link-text='Remove All' onClick={removeAll}> <spain>Remove All</spain></button>
              </div>
         </div>
         
    </div>

    </>
  )
}

export default Todo
