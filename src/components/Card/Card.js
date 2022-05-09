import { A, Img } from "../../routes/styled"
import { Cardconteiner } from "./styled"

const Card = (props) => {
 const {name, breed, age, species, gender, url } = props

   return (
   <Cardconteiner>
   <Img src={url} alt=''/>
   <p> Olá, meu nome é {name}.  Sou um {species},
   minha raça é {breed}.</p>
   <p>Sou {gender} e tenho  {age} anos...  </p> 
   <A alt='' href="#formcontact" >QUER ME ADOTAR?</A>
      

   </Cardconteiner>
   )
}

export default Card