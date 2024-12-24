import { useState } from "react";
import "./styles.css";

// Задание 1
function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  return (
    <div>
      <input
        value={value1}
        onChange={(event) => setValue1(event.target.value)}
      />
      <p>text1: {value1}</p>
      <input
        value={value2}
        onChange={(event) => setValue2(event.target.value)}
      />
      <p>text2: {value2}</p>
    </div>
  );
}

// Задание 2
// function App() {
//   const [value, setValue] = useState("");
//   function handleChange(event) {
//     setValue(event.target.value);
//   }
//   return (
//     <div>
//       <input value={value} onChange={handleChange} />{" "}
//       <p>количество символов: {value.length}</p>
//     </div>
//   );
// }

// Задание 3
// function App() {
//   const [value1, setValue1] = useState(0);
//   const [value2, setValue2] = useState(0);
//   const [value3, setValue3] = useState(0);
//   const [value4, setValue4] = useState(0);
//   const [value5, setValue5] = useState(0);

//   function handleChange1(event) {
//     setValue1(+event.target.value);
//   }
//   function handleChange2(event) {
//     setValue2(+event.target.value);
//   }
//   function handleChange3(event) {
//     setValue3(+event.target.value);
//   }
//   function handleChange4(event) {
//     setValue4(+event.target.value);
//   }
//   function handleChange5(event) {
//     setValue5(+event.target.value);
//   }

//   const average = (value1 + value2 + value3 + value4 + value5) / 5;

//   return (
//     <div>
//       <input value={value1} onChange={handleChange1} />
//       <input value={value2} onChange={handleChange2} />
//       <input value={value3} onChange={handleChange3} />
//       <input value={value4} onChange={handleChange4} />
//       <input value={value5} onChange={handleChange5} />
//       <p>среднее арифметическое: {average}</p>
//     </div>
//   );
// }

// Задание 4
// function App() {
//   const [checked, setChecked] = useState(false);
//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           checked={checked}
//           onChange={() => setChecked(!checked)}
//         />
//         вам есть 18 лет?
//       </label>
//       {checked ? (
//         <div>
//           <h2>Ура, вам уже есть 18</h2>
//           <p> здесь расположен контент только для взрослых </p>
//         </div>
//       ) : (
//         <div>
//           <h2> увы, вам еще нет 18 лет:( </h2>
//         </div>
//       )}
//     </div>
//   );
// }

// Задание 5
// function App() {
//   const [value, setValue] = useState("");
//   function handleChange(event) {
//     setValue(event.target.value);
//   }
//   return (
//     <div>
//       <select value={value} onChange={handleChange}>
//         <option>--город--</option> <option>Вологда</option>
//         <option>Ярославль</option>
//         <option>Сокол</option> <option>Череповец</option>
//       </select>
//       <p> ваш выбор: {value} </p>
//     </div>
//   );
// }

// Задание 6
// function App() {
//   const [value, setValue] = useState("");
//   return (
//     <div>
//       <select value={value} onChange={(event) => setValue(event.target.value)}>
//         <option value="1">от 0 до 12</option>
//         <option value="2">от 13 до 17</option>
//         <option value="3">от 18 до 25</option>
//         <option value="4">старше 25</option>
//       </select>
//       <p>
//         {value === "1" && "ваш возраст от 0 до 12 лет"}
//         {value === "2" && "ваш возраст от 13 до 17 лет"}
//         {value === "3" && "ваш возраст от 18 до 25 лет"}
//         {value === "4" && "ваш возраст старше 25 лет"}
//       </p>
//     </div>
//   );
// }

// Задание 7
// function App() {
//   const [notes, setNotes] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   function changeHandler(index, event) {
//     const newValue = Number(event.target.value);
//     setNotes([...notes.slice(0, index), newValue, ...notes.slice(index + 1)]);
//   }
//   function getAverage(notes) {
//     const sum = notes.reduce((acc, num) => acc + num, 0);
//     return sum / notes.length;
//   }
//   return (
//     <div>
//       {notes.map((note, index) => (
//         <input
//           key={index}
//           value={note}
//           onChange={(event) => changeHandler(index, event)}
//         />
//       ))}
//       <div>Среднее арифметическое: {getAverage(notes)}</div>
//     </div>
//   );
// }

// Задание 8
// function App() {
//   const initDate = { year: 2025, month: 12, day: 31 };
//   const [date, setDate] = useState(initDate);
//   function handleChange(prop, event) {
//     setDate({ ...date, [prop]: event.target.value });
//   }
//   function getDayOfWeek(year, month, day) {
//     const dateObj = new Date(year, month - 1, day);
//     const options = { weekday: "long" };
//     return new Intl.DateTimeFormat("ru-RU", options).format(dateObj);
//   }
//   return (
//     <div>
//       <input
//         value={date.year}
//         onChange={(event) => handleChange("year", event)}
//       />
//       <input
//         value={date.month}
//         onChange={(event) => handleChange("month", event)}
//       />
//       <input
//         value={date.day}
//         onChange={(event) => handleChange("day", event)}
//       />
//       <br />
//       <p>
//         {date.year}-{date.month}-{date.day}
//       </p>
//       <p>день недели: {getDayOfWeek(date.year, date.month, date.day)}</p>
//     </div>
//   );
// }

// Задание 9
// function App() {
//   const initDate = { year: 2025, month: 12, day: 31 };
//   const [date, setDate] = useState(initDate);

//   function handleChange(prop, event) {
//     setDate({ ...date, [prop]: event.target.value });
//   }
//   function getDayOfWeek(year, month, day) {
//     const dateObj = new Date(year, month - 1, day);
//     const options = { weekday: "long" };
//     return new Intl.DateTimeFormat("ru-RU", options).format(dateObj);
//   }
//   return (
//     <div>
//       <input
//         type="number"
//         value={date.year}
//         onChange={(event) => handleChange("year", event)}
//       />
//       <input
//         type="number"
//         value={date.month}
//         onChange={(event) => handleChange("month", event)}
//       />
//       <input
//         type="number"
//         value={date.day}
//         onChange={(event) => handleChange("day", event)}
//       />
//       <br />
//       <p>
//         {date.year}-{date.month}-{date.day}
//       </p>
//       <p>день недели: {getDayOfWeek(date.year, date.month, date.day)}</p>
//     </div>
//   );
// }

// Задание 10
// function App() {
//   const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
//   const addNote = () => {
//     const newNote = notes.length + 1;
//     setNotes([...notes, newNote]);
//   };
//   const result = notes.map((note, index) => {
//     return <li key={index}>{note}</li>;
//   });
//   return (
//     <div>
//       <ul>{result}</ul>
//       <button onClick={addNote}>добавить элемент</button>
//     </div>
//   );
// }

// Задание 11
// function App() {
//   const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
//   const [inputValue, setInputValue] = useState("");
//   const addNote = () => {
//     if (inputValue.trim() !== "") {
//       setNotes([...notes, inputValue]);
//       setInputValue("");
//     }
//   };
//   const result = notes.map((note, index) => {
//     return <li key={index}>{note}</li>;
//   });
//   return (
//     <div>
//       <ul>{result}</ul>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button onClick={addNote}>добавить элемент</button>
//     </div>
//   );
// }

// Задание 12
// const initNotes = [
//   { id: 1, prop1: "Value1", prop2: "Value2", prop3: "Value3" },
//   { id: 2, prop1: "Value4", prop2: "Value5", prop3: "Value6" },
// ];

// function App() {
//   const [notes, setNotes] = useState(initNotes);
//   const addNote = () => {
//     const newNote = {
//       id: notes.length + 1,
//       prop1: `Value${notes.length * 3 + 1}`,
//       prop2: `Value${notes.length * 3 + 2}`,
//       prop3: `Value${notes.length * 3 + 3}`,
//     };
//     setNotes([...notes, newNote]);
//   };
//   const result = notes.map((note) => {
//     return (
//       <li key={note.id}>
//         <span>{note.prop1}</span> <span>{note.prop2}</span>{" "}
//         <span>{note.prop3}</span>
//       </li>
//     );
//   });
//   return (
//     <div>
//       <ul>{result}</ul>
//       <button onClick={addNote}>добавить элемент</button>
//     </div>
//   );
// }

// Задание 13
// const initNotes = [
//   { id: 1, prop1: "Value1", prop2: "Value2", prop3: "Value3" },
//   { id: 2, prop1: "Value4", prop2: "Value5", prop3: "Value6" },
// ];

// function App() {
//   const [notes, setNotes] = useState(initNotes);
//   const [input1, setInput1] = useState("");
//   const [input2, setInput2] = useState("");
//   const [input3, setInput3] = useState("");
//   const addNote = () => {
//     if (input1.trim() !== "" && input2.trim() !== "" && input3.trim() !== "") {
//       const newNote = {
//         id: notes.length + 1,
//         prop1: input1,
//         prop2: input2,
//         prop3: input3,
//       };
//       setNotes([...notes, newNote]);
//       setInput1("");
//       setInput2("");
//       setInput3("");
//     }
//   };
//   const result = notes.map((note) => {
//     return (
//       <li key={note.id}>
//         <span>{note.prop1}</span> <span>{note.prop2}</span>{" "}
//         <span>{note.prop3}</span>
//       </li>
//     );
//   });
//   return (
//     <div>
//       <ul>{result}</ul>
//       <input
//         type="text"
//         value={input1}
//         onChange={(e) => setInput1(e.target.value)}
//         placeholder="Prop1"
//       />
//       <input
//         type="text"
//         value={input2}
//         onChange={(e) => setInput2(e.target.value)}
//         placeholder="Prop2"
//       />
//       <input
//         type="text"
//         value={input3}
//         onChange={(e) => setInput3(e.target.value)}
//         placeholder="Prop3"
//       />
//       <button onClick={addNote}>Добавить элемент</button>
//     </div>
//   );
// }

export default App;
