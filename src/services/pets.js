import client from "../providers/client";

export const listPets = () =>  client.get("pets/0b24lpf");

export const postPets = (data) => client.post("pets/0b24lpf", data);

export const deletePets = (id) => client.delete("pets/0b24lpf", id);

