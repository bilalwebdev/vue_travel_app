<template>
   <div class="home">
      <h1>All Destinations</h1>
    </div>

    <div class="destinations">
          <router-link 
          v-for="destination in destinations"
          :key="destination.id"
          :to="destination.slug"
          >
          <h2>{{ destination.name }}</h2>
        </router-link>
    </div>
</template>



<script>

import sourceData from '../../public/data.json'

export default {
  data() {
    return {
      destinations: sourceData.destinations
    }
  }
}

</script>
