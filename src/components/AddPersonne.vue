<template>
  <div class="submit-form">
    <div v-if="!submitted">
                            <!-- A COMPLETER -->
      <input type="text" class="..." id="XXX" required v-model="personne.name" name="XXX"/>
      <input type="text" class="..." id="XXX" required v-model="personne.XXX" name="XXX"/>
      <input type="text" class="..." id="XXX" required v-model="personne.XXX" name="XXX"/>
      <input type="text" class="..." id="XXX" required v-model="personne.XXX" name="XXX"/>


      <button @click="creerPersonne" class="btn btn-success">Ajouter</button>
    </div>

    <div v-else>
      <h4>Personne ajoutée avec succès!</h4>
      <button class="btn btn-success" @click="resetForm">Ajouter une nouvelle personne</button>
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

      // A COMPLETER
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
