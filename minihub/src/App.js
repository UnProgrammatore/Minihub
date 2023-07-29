import React,{useState,useEffect} from 'react';
import './App.css';
import LinkCard from './components/LinkCard';
import * as utils from './Utils'

function App() {
  const [data, setData] = useState([]);
  function getData() 
  {
    fetch('data.json')
    .then(response => {
      return response.json();
    })
    .then(result => {
      let sortedData = result.toSorted((a, b) => {
        let afav = utils.isFav(a.address);
        let bfav = utils.isFav(b.address);
        if((afav && bfav) || (!afav && !bfav)){
          if(a.address > b.address) {
            return 1;
          }
          else {
            return -1;
          }
        }
        else if(afav && !bfav) {
          return -1;
        }
        else {
          return 1;
        }
      });
      console.log(sortedData);
      setData(sortedData);
    })
  }
  useEffect(()=>{
    getData();
  },[]);

  return (
    <div className="App">
      {
        //console.log(data)
      }
      {
        data.map(d => <LinkCard key={d.name} linkData={d}/>)
      }
    </div>
  );
}

export default App;
