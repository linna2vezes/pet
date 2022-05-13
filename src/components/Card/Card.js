import { A, Img } from "../../routes/styled"
import { Cardconteiner, Textcontainer } from "./styled"

const Card = (props) => {
 const {name, breed, age, species, gender, url } = props

   return (
   <Cardconteiner >
   <Img src={url} alt=''/>
   <Textcontainer>
   
   <p> Olá, meu nome é {name}!</p>
   <p> Espécie: {species}</p>
   <p> Gênero: {gender}</p> 
   <p> Idade: {age} anos.</p>
   <p >Raça: {breed}</p>
   </Textcontainer>
   <A alt='' href="#formcontact" > QUE TAL ME ADOTAR?</A>
   

   </Cardconteiner>
   )
}

export default Card