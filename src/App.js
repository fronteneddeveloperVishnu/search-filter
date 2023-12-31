import logo from './logo.svg';
import './App.css';
import {Data} from './Data';
import { useState } from 'react';

function App() {
  
  const [data, setData] = useState('');

  return (
    <div className="App">

      <h1>SEARCH CONTACTS</h1>

      <input type="text" placeholder='Search....' onChange={(e)=>setData(e.target.value)} className='input'/>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            Data.filter((item) => {
              return data.toLowerCase() === '' ? item : item.first_name.toLowerCase().includes(data);
            }).map( (item)=> (
              <tr>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
