import {useState} from 'react';
import {removeSpace,removeDuplicate,checker,same} from './helper'
import List from './componenets/List';
function App() {
  const [a,setA] = useState('');
  const [b,setB] = useState('');
  const [onlyA,setOnlyA] = useState([]);
  const [onlyB,setOnlyB] = useState([]);
  const [unique,setUnique] = useState([]);
  const [both,setBoth] = useState([]);
  const find = (e) => {
      e.preventDefault();
      if (a.length === 0 || b.length === 0) {
        alert("Please Enter a Value");
      } else {
        let list1 = a.split(",");
        let list2 = b.split(",");
        list1 = removeDuplicate(removeSpace(list1));
        list2 = removeDuplicate(removeSpace(list2));
        let aOnly = checker(list1,list2);
        let bOnly = checker(list2,list1);
        setOnlyA(aOnly);
        setOnlyB(bOnly);
        const merge = aOnly.concat(bOnly);
        setUnique(merge);
        const sameValues = same(list1,list2);
        setBoth(sameValues);
      }    
      
  }
  return (
    <div className="App">
      <h1 className="title">Difference Between Two Lists</h1>
      <form onSubmit={find}>
        <div className="input-container">
          <input
            className="input"
            placeholder="Enter Elements of List A use (,) to seprate elements"
            type="text"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            className="input"
            type="text"
            placeholder="Enter Elements of List B use (,) to seprate elements"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </div>
        <button type="submit" className="btn">
          Check
        </button>
      </form>
      <div className="element-container">
        <div className="a list-container">
          <h1>A</h1>
          <ul>
            {onlyA.map((item) => {
              return <List item={item} />;
            })}
          </ul>
        </div>
        <div className="b list-container">
          <h1>B</h1>
          <ul>
            {onlyB.map((item) => {
              return <List item={item} />;
            })}
          </ul>
        </div>
        <div className="both list-container">
          <h1>Present In Both</h1>
          <ul>
            {both.map((item) => {
              return <List item={item} />;
            })}
          </ul>
        </div>
        <div className="unique list-container">
          <h1>Both Unique</h1>
          <ul>
            {unique.map((item) => {
              return <List item={item} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
