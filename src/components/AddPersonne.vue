<template>
  <!-- concerne la page d'ajout -->
  <div class="submit-form">
    <div v-if="!submitted">
      <input type="text" placeholder="Nom" class="name" id="name" required v-model="personne.name" name="XXX"/>
      <input type="text" placeholder="Prénom" class="surname" id="surname" required v-model="personne.surname" name="XXX"/>
      <input type="text" placeholder="Téléphone" class="phone" id="phone" required v-model="personne.phone" name="XXX"/>
      <input type="text" placeholder="Ville" class="city" id="city" required v-model="personne.city" name="XXX"/>
      
      <div>
        <button @click="creerPersonne" class="badge badge-success mr-2 rounded-pill">Ajouter</button>
      </div>
    </div>

    <div v-else>
      <h2>Personne ajoutée avec succès!</h2>
      <button class="badge badge-success mr-2 rounded-pill" @click="resetForm">Ajouter une nouvelle personne</button>
    </div>
  </div>
</template>

<script>
  import PersonneDataService from "../services/PersonneDataService";

  export default {
    name: "add-personne",
    data() {
      return {
        personne: {
          id: null,
          name: "",
          surname: "",
          phone: "",
          city: ""
        },
        submitted: false
      };
    },
    methods: {
      creerPersonne() {
        var data = {
          name: this.personne.name,        // id a été supprimé car c'est la bdd qui le génère à la création
          surname: this.personne.surname,
          phone: this.personne.phone,
          city: this.personne.city,
        };

      
      PersonneDataService.create(data)
      .then(response => {
        console.log(response.data);
        this.submitted = true;
      })
      .catch(e => {
        console.log(this.currentPersonne);
        console.log(e);
      });
    },
    
    resetForm() {
      this.submitted = false;
      this.personne = {};
    }
  }
};
</script>

<style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
</style>
