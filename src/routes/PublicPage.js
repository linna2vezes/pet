import React from "react";
import { useEffect, useState } from "react";
import {listPets} from "../services/pets";
import "./PublicPage.css";
import Card from "../components/Card/Card";
import {Div} from "./styled"

function PublicPage() {

  const [ pets, setPets] = useState ([]);
  
    useEffect(() => {
      const request = async () => {
      try {
        const response = await listPets();
        console.log(response.data.pets);
        setPets(response.data.pets)
         } catch (error) {
         console.log("Deu Ruim");
         }
       };
      request();
    }, []);
    
  return <Div> {pets.map (el => <Card  name={el.name} breed={el.breed} age={el.age} species={el.species} url={el.url} />)} </Div>;



}

export default PublicPage;
