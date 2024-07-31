import logo from './logo.svg';
import './App.css';
import { useState, useMemo } from 'react';
// import 'antd/dist/antd.css'
import { Button } from 'antd';



//1.Add & Delete the chosen list
function App() {

    const [inputValue,setInput] = useState('');
    const [itemsList, setItemsList] = useState([]);

    const handleInputChange  = (event) => {
        setInput(event.target.value);
    };



    const addValue = () =>{
      setItemsList([...itemsList,inputValue]);
      setInput('');

    };

    const deleteValue = (index) =>{
      const newList = [...itemsList];
      newList.splice(index, 1);
      setItemsList(newList);
    };

    return (
    <div>
      <div>key</div>
      <div>key</div>
      <div>key</div>
      <div>key</div>
      <div>key</div>
      <div>key</div>
     <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter some text"
      />
      <button onClick={addValue}>
        add
      </button>
      <div>
      {
        itemsList.map((item, index) => {
          return <div key={index}>
            {item}
            <button onClick = {() => deleteValue(index)}>delete</button> 
                 {/*do not undertstand this function  */}
            </div>
        })
      }
      </div>
    </div>
  );
}


//Change the tab
// function App() {
//   const [data, setData] = useState([
//     {
//       type: 'JS',
//       label: 'js',
//       content: 'js question'
//     },
//     {
//       type: 'html',
//       label: 'html',
//       content: 'html question'
//     },
//     {
//       type: 'css',
//       label: 'css',
//       content: 'css question'
//     }
//   ])
//   const [activeItem, setActiveItem] = useState('12')
//   const handleClick = (type) => {
//     setActiveItem(type)
//   }


//   const content = useMemo(() => {
//     const find = data.find(item => item.type === activeItem) || {}
//     return <span>{find.content}</span>
//   }, [activeItem, data]
//   )

//   return (
//     <div className="App">
//      <Button type="primary">Primary</Button>
//       <div>
//         {
//           data.map(item => (
//             <div
//               onClick={() => handleClick(item.type)}
//               key={item.type}
//               className={`itemText ${activeItem === item.type ? 'active' : ''}`} >
//               {item.label}
//             </div>))
//         }
//       </div>
//       <div>{content}</div>
//     </div>
//   )
//}

export default App;
