<template>
  <v-app>
    <v-navigation>

    </v-navigation>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        menuItems: [
          {text: 'Se connecter', icon: '', link: ''},
          {text: 'Créer une conte', icon: '', link: ''},
          {text: 'Explorer', icon: 'explore', link: ''}
        ]
      }
    }
  }

</script>
