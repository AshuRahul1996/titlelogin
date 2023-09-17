// import logo from './logo.svg';
import Todo from './component/Todo';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './component/login';
// import Todo from './component/todo'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Todo' element={<Todo/>}></Route>
      </Routes>
      </BrowserRouter>
      {/* <Switch> */}
        {/* <Route exact path="/" component ={Todo}/> */}
        {/* <Route path="/" component={Login}/> */}
      {/* <Redirect  to="/Todo" component={Login} /> */}
      {/* </Switch> */}
      {/* <Login/> */}
      {/* <Todo/> */}
    </div>
  );
}

export default App;
