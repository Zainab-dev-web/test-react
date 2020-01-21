import React, { Fragment, useState } from 'react';
import Vehicule from './components/Vehicule'
import Garage from './components/Garage'
import './App.css';

const App=(props)=>{

  const [list, setList] = useState([{
    marque: " Mercedes Benz S 260 ",
    anne:  1991 ,
    couleur: " bleu ", 
    carburant: " Essence ",
    etat: " Non validé "
  }, {
    marque: " Fiat 500 ",
    anne:  2010 ,
    couleur: " Noire ",
    carburant: " Diesel ",
    etat: " Validé "
  }, {
    marque: " BMW 114 ",
    anne:  2012 ,
    couleur: " bleu" ,
    carburant: " Essence ",
    etat: " Non validé "
  }, {
    marque: " Audi A3 ",
    anne:  2015,
    couleur: " Rouge ",
    carburant: " Diesel ",
    etat: " Validé ",
  },])

  // let tabList=list.slice()
  // tabList.push(list)
  // setList(tabList)




  return (
    <Fragment>
      <div>
        <h1>Les Voitures</h1>
         
        <p>{props.marque}</p>
        <p>{props.anne}</p>
        <p>{props.couleur}</p>
        <p>{props.carburant}</p>
        <p>{props.etat}</p>
        
  <ul>{list.map(list => <li key={list.marque}>{list.marque}{list.anne}{list.couleur}{list.carburant}{props.etat}</li>)}
        </ul>
      </div>
      <Garage />
      <Vehicule/>
    </Fragment>
  );
}

export default App;
