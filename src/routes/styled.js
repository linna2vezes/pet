import styled from "styled-components"

export const Div = styled.div `

    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    width: 900px;
    min-height: 300px;
    color: gainsboro;
    align-items:center;
    padding-top: 50px;
    gap:15px;
    

    /* @media (min-width: 992px) {

    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    width: 900px;
    min-height: 300px;
    color: gainsboro;
    align-items:center;
    padding-top: 50px;
    gap:15px;
        
    } */
    
`

export const A = styled.a `

   text-decoration: none;
   font-size:smaller;
   color: white;
   margin-left:15px;

   &:hover {
    color: #ffc903;

   }

    /* @media (min-width: 992px) {

    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    width: 900px;
    min-height: 300px;
    color: gainsboro;
    align-items:center;
    padding-top: 50px;
    gap:15px;
        
    } */
    
`

export const Img = styled.img `

border-radius:8px;
width:200px;

`

export const Button = styled.button `

    margin: auto;
    border-radius: 8px;
    width: fit-content;
    padding-left:8px;
    padding-right:8px;
    margin-top:8px;
    margin-bottom:8px;
    height: 30px;
    background-color: transparent;
    border-color: #ffc903;
    border-width: 0.1px;
    color: white;
    justify-content: center;
    align-items: center;
      
    &:hover {
    margin: auto;
    background-color: transparent;
    padding-left:8px;
    padding-right:8px;
    margin-top:8px;
    margin-bottom:8px;
    border: none;
    height: 30px;
    color:  #ffc903;
          
  }

  `