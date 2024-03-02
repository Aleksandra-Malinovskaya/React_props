import './App.css';

const firstComponent = () => {
  return <p>Hello</p>
}

let secondComponent = () => {
  return <a href="https://reactjs.org">Hello, React!</a>;
}

let ThirdComponent = () =>{
  let age = 20;
  return <FourthComponent myAge = {age}/>
}

let FourthComponent = (props) =>{
  return <h4>{props.myAge}</h4>;
}

let ParentComponent = () =>{
  let str = "Redev";
  let obj = {city: "New York"};
  function band(){
    return <hr></hr>
  }
  let array = [1, 2, 3, 4, 5];

  return <ChildComponent str = {str}
                        bol = {true}
                        obj = {obj.city}
                        func = {band}
                        array = {array}/>
}

let ChildComponent = (props) =>{
  return <div><p>str = {props.str}</p>
              <p>bool = {props.bol.toString()}</p>
              <p>obj = {props.obj}</p>
              <p>function = {props.func()}</p>
              <p>array = {props.array}</p>
              </div>
}

 function App() {
  return (
    <div>
      <ThirdComponent/>
      <ParentComponent/>
    </div>
  );
}

export default App;






