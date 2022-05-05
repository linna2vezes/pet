import "./ProtectedPage.css";
// import React, { useState } from "react";
// import { useEffect } from "react";
import { postPets, deletePets } from "../services/pets";
import { Button } from "./styled";



function ProtectedPage() {

const post = async (submitData) => {
 try {
  submitData.preventDefault ()
  console.log(submitData.target)
  const data = new FormData(submitData.target)
  const name = data.get("name")
  console.log(name)
  const breed = data.get("breed")
  const age = data.get("age")
  const species = data.get("species") 
  const gender = data.get("gender") 
  console.log(gender) 
  const url = data.get("url")
  console.log(url) 
  const cadastrePet = { name : name , breed : breed, age: age , species: species, gender: gender, url:url}
  await postPets (cadastrePet)  
  // const cadastrePet = { name , breed , age , species, gender, url}
   
 } catch (error) {
   }
}

const remove = async (submitId) => {
  try {
   submitId.preventDefault ()
   const data = new FormData(submitId.target)
   const id = data.delete("id")
  //  const name = data.get("name")
  //  const breed = data.get("breed")
  //  const age = data.get("age")
  //  const species = data.get("species") 
  //  const gender = data.get("gender") 
  //  const url = data.get("url")
   const removePet = { id }
   await deletePets (removePet)  
   // const cadastrePet = { name , breed , age , species, gender, url}
    
  } catch (error) {
    }
 }
 
  return ( 
  <div className="container_page_protected"> 
  <h2>Cadastre um bichinho para adoção:</h2>

  
    <form id="form_pets"  onSubmit={(submitData)=> post(submitData)}>
      <p><input type="text" placeholder="Nome do pet" name="name"  /></p> 
      <p> <input type="text" placeholder="Raça do pet" name="breed"  /> </p> 
      <p> <input type="number" id="age" placeholder="Idade do pet" name="age"  /> </p> 
     <p><select name="species" defaultValue="Gato"> 
       <option value="Cachorro"> Cachorro </option>
     <option value="Gato">Gato</option> </select>
     <select name="gender" defaultValue="Macho"> 
      <option value="Macho"> Macho </option>
     <option value="Fêmea">Fêmea</option> </select></p>
     <p><input type="url" placeholder="Foto do pet" name="url"  /> </p>
      
     
    <center><Button >Adicionar pet</Button> </center>
  </form>

  <form id="form_pets" onSubmit={(submitId)=> remove(submitId)}>
     <p>  <input type="text" placeholder="Id de registro do pet" name="id"  /> </p>
     <center> <Button >Remover pet</Button></center> 
  </form>
  
  
  </div>
  )}

  export default ProtectedPage;