import client from "../providers/client";

export const listPets = () =>  client.get("pets/0b24lpf");

 export const postPets = (data) => client.post("pets/0b24lpf", data);
// export const postPets = (data) => console.log(data);

export const deletePets = (data) => client.delete(`pets/0b24lpf/${data}`);

