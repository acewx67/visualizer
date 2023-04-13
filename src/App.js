import { React, useEffect, useState, useRef } from "react";
function App() {
  const [array, setArray] = useState([]);
  const [slider, setSlider] = useState(30);
  const idx = useRef(null);
  const idx1 = useRef(null);
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
  function bubbleSort(arr, slider) {
    for (let i = 0; i < arr.length - 1; i++) {
      setTimeout(() => {
        idx.current = i;
        for (let j = i + 1; j < arr.length; j++) {
          setTimeout(()=>{
            idx1.current = j;
            if (arr[j] < arr[i]) {
              let t = arr[i];
              arr[i] = arr[j];
              arr[j] = t;
            }
          },250)
        }
        setTimeout(() => setArray([...arr]), i * 0);
      }, i * 1500 * (1 / slider));
    }
    idx.current = null;
    idx1.current = null;
    return arr;
  }

  return (
    <div className="App">
      <div className="main_container">
        {array.map((num, i) => {
          return (
            <div
              className={idx.current == i ? 'index' : idx1.current == i ? 'compared_index' : 'arr_num'}
              style={
                { height: `${num}px`, }
              }
              key={idx}
            ></div>
          );
        })}
      </div>
      <div className="btns" style={{ display: "flex", gap: "20px" }}>
        <button onClick={resetArray}>Generate new Array</button>
        <button
          onClick={() => {
            bubbleSort(array, slider);
          }}
        >
          BubbleSort
        </button>
        <input
          type="range"
          min="1"
          max="100"
          onChange={(e) => {
            setSlider(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default App;
