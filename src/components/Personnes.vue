<template>
<!-- concerne la page initiale -->
<div class="container">
  <div class="row"> 
    <div class="col-5">
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-black text-center"
        :class="{ active: id == currentIndex }"
        v-for="(personne, id) in personnes"
        :key="id"
        @click="setActivePersonne(personne, id)"
        >
        {{ personne.surname }} {{ personne.name }} {{personne.phone}} {{personne.city}}
        </li>
      </ul> 
    </div>

    <div class="col-5">
      <div class="card-body">
        <ul class="list-group list-group-flush text-black text-center">
            <div v-if="currentPersonne">
              <li class="list-group-item bg-light">{{ currentPersonne.name }}</li>
              <li class="list-group-item bg-light">{{ currentPersonne.surname }}</li>
              <li class="list-group-item bg-light">{{ currentPersonne.phone }}</li>
              <li class="list-group-item bg-light">{{ currentPersonne.city }}</li>

              <router-link :to="'/personnes/' + currentPersonne.id" class="badge badge-warning mr-2 rounded-pill">Modifier</router-link>
            </div>
            <div v-else>
              <br />
              <p class="bg-light rounded-pill">Cliquez sur une des personnes pour afficher les détails.</p>
            </div>
        </ul> 
      </div>
    </div>
  </div>
</div>

</template>

<script>
import PersonneDataService from "../services/PersonneDataService";
export default {
  name: "personnes",
  data() {
    return {
      personnes: [],
      currentPersonne: null,
      currentIndex: -1,
    };
  },
  methods: {
    getPersonnes() {
      PersonneDataService.getAll()
      .then(response => {
        this.personnes = response.data;
      })
      .catch(e => {
        console.log(e);
      });
    },
    setActivePersonne(personne, index) {
      this.currentPersonne = personne;
      this.currentIndex = personne ? index : -1;
    },
  },
  mounted() {
    this.getPersonnes();
  }
};
</script>