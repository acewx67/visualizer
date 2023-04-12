import { React, useEffect, useState } from "react";
function App() {
  const [array, setArray] = useState([]);
  const [earlyExit, setEarlyExit] = useState(false);
  const [running, setRunning] = useState(false);
  const [slider, setSlider] = useState(30);
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function resetArray() {
    let t = [];
    for (let i = 0; i < 100; i++) {
      t.push(getRandomInt(5, 680));
    }
    setArray(t);
  }
  if (array.length === 0) resetArray();

  // function merge(arr, s, m, e,i) {
  //   setTimeout(()=>{
  //     let s2 = m + 1;
  //     if (arr[m] <= arr[s2]) {
  //       return;
  //     }
  //     while(s<=m && s2<=e){
  //       if(arr[s] <= arr[s2]) {
  //         s++;
  //       }
  //       else{
  //         let value = arr[s2];
  //         let index = s2;
  //         while(index != s){
  //           arr[index] = arr[index-1];
  //           index--;
  //         }
  //         arr[s] = value;
  //         s++;
  //         m++;
  //         s2++;
  //       }
  //     }
  //     console.log('logged',i);
  //     setArray([...arr]);
  //   },i * 100);

  // }

  // function mergeSort(arr, s, e, i) {
  //   if (s == e) return;
  //   const m = Math.floor((s + e) / 2);
  //   mergeSort(arr, s, m, i + 1);
  //   mergeSort(arr, m + 1, e, i + 1);
  //   setTimeout(()=>
  //     merge(arr, s, m, e, i + 1)
  //   , (++i)*100);
  // }
  function bubbleSort(arr,slider) {
    setRunning(true);
    for (let i = 0; i < arr.length - 1; i++) {
      setTimeout(() => {
        for (let j = i + 1; j < arr.length; j++) {
          if (earlyExit == true) {
            clearTimeout();
            setEarlyExit(false);
            return arr;
          }
          if (arr[j] < arr[i]) {
            console.log(earlyExit);
            let t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
          }
        }
        setTimeout(() => setArray([...arr]), i * 0);
      }, (i * 1000)*(1/slider));
    }
    setRunning(false);
    return arr;
  }

  return (
    <div className="App">
      
      <div className="main_container">
        {array.map((num, idx) => {
          return (
            <div
              className="arr_num"
              style={{ height: `${num}px` }}
              key={idx}
            ></div>
          );
        })}
      </div>
      <div className="btns" style={{ display: "flex", gap: "20px" }}>
        <button onClick={resetArray}>Generate new Array</button>
        {/* <button onClick={()=>{mergeSort([...array],0,array.length-1,0)}}>MergeSort</button> */}
        <button
          onClick={() => {
            if (!earlyExit && !running) {
              setRunning(true);
              var var_slider = slider;
              bubbleSort(array,var_slider);
            } else {
              setEarlyExit(true);
            }
          }}
        >
          BubbleSort
        </button>
      <input type="range" min="1" max="100" onChange={(e)=>{
        setSlider(e.target.value)
        }}/>
      {console.log(slider)}
        <button
          onClick={() => {
            setEarlyExit(true);
            setTimeout(() => setEarlyExit(false), 2000);
          }}
        >
          Abort Sorting
        </button>
      </div>
    </div>
  );
}

export default App;
