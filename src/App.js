import { React, useEffect, useState } from "react";
function App() {
  const [array, setArray] = useState([]);
  const [flag, setFlag] = useState(false);
  const [indices, setIndices] = useState([]);
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function resetArray() {
    let t = [];
    for (let i = 0; i < 300; i++) {
      t.push(getRandomInt(5, 680));
    }
    setArray(t);
  }
  if(array.length === 0) resetArray();


  function merge(arr, s, m, e,i) {
    setTimeout(()=>{
      let s2 = m + 1;
      if (arr[m] <= arr[s2]) {
        return;
      }
      while(s<=m && s2<=e){
        if(arr[s] <= arr[s2]) {
          s++;
        }
        else{
          let value = arr[s2];
          let index = s2;
          while(index != s){
            arr[index] = arr[index-1];
            index--;
          }
          arr[s] = value;
          s++;
          m++;
          s2++;
        }
      }
      setTimeout(()=>{
        setArray([...arr]);
      })
    },100)
    
  }
  
  function mergeSort(arr,s,e,i){
    setTimeout(()=>{
      if(s==e) return;
      const m = Math.floor((s+e)/2);
      mergeSort(arr,s,m,i+1);
      mergeSort(arr,m+1,e,i+1);
      merge(arr,s,m,e,i+1);
    },150)
    
  }
  return (
    <div className="App">
      <div className="main_container">
        { 
          array.map((num, idx) => {
            return (
              <div
                className="arr_num"
                style={{ height: `${num}px` }}
                key={idx}
              ></div>
            );
          })
        }
        
      </div>
      
      <div className="btns" style={{display:'flex',gap:'20px'}}>
        <button onClick={resetArray}>Generate new Array</button>
        <button onClick={()=>{mergeSort([...array],0,array.length-1,0)}}>MergeSort</button>
      </div>
    </div>
  );
}

export default App;
