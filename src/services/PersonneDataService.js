import http from "../http-common";

class PersonneDataService {
//Fonction pour récupérer l'ensemble des personnes
getAll() {
  return http.get("/entree");
}

//Fonction pour récupérer une personne via son ID (GET)
get(id) {
  return http.get(`/entree/${id}`);
}

//Fonction pour créer une nouvelle personne (POST)
//data représente les données du formulaire (nom, prénom, téléphone, ville)
create(data) {
  return http.post("/entree", data);
}

//Fonction pour modifier une personne, même chose que le create MAIS on est sur un PUT et non un POST
update(data) {
  return http.put("/entree", data);
}

//Fonction pour supprimer une personne, attention mettre des `` pour la prise en compte du ${id}
delete(id) {
  return http.delete(`/entree/${id}`);
}

}

export default new PersonneDataService();
