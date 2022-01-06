<template>
  <!-- concerne la page de modification et suppression-->
    <div v-if="currentPersonne">
      <input type="text" class="name text-center" id="name" v-model="currentPersonne.name" />
      <input type="text" class="surname text-center" id="surname" v-model="currentPersonne.surname" />
      <input type="text" class="phone text-center" id="phone" v-model="currentPersonne.phone" />
      <input type="text" class="city text-center" id="city" v-model="currentPersonne.city" />
    </div>
    
  <div v-else>
    <br />
    <p>N'existe pas</p>
  </div>

  <div class="text-left">
    <button class="badge badge-danger mr-2 rounded-pill" data-bs-toggle="button" @click="deletePersonne">Supprimer</button>
  </div>
  
  <div class="text-left">
   <button type="submit" class="badge badge-success mr-2 rounded-pill" data-bs-toggle="button" @click="updatePersonne">Modifier</button>
  </div>

<p>{{ message }}</p>

</template>


<script>
  import PersonneDataService from "../services/PersonneDataService";

  export default {
    name: "personne",
    data() {
      return {
        currentPersonne: null,
        message: ''
      };
    },
    methods: {
      getPersonne(id) {   //correspond à la page "modifier" : affiche les infos via le .then et l'erreur avec .catch 
      PersonneDataService.get(id)
      .then(response => {
        this.currentPersonne = response.data;
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      })
    },

      updatePersonne() {     // pour la modification
        PersonneDataService.update(this.currentPersonne)
        .then(response => {
          console.log(response.data);
          this.message = 'Personne modifiée avec succès!'
        })
        .catch(e => {
          console.log(this.currentPersonne);
          console.log(e);
        });
      },

      deletePersonne() {     // pour la suppression, attention à bien changer la route vers la liste des personnes
        PersonneDataService.delete(this.currentPersonne.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "personnes"});
        })
        .catch(e => {
          console.log(e);
        });
      }
    },
    mounted() {
      this.message = '';
      this.getPersonne(this.$route.params.id);
    }
  };
</script>

<style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
</style>
