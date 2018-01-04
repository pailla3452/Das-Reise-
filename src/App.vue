<template>
  <v-app>
    <!-- SIDEBAR -->
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile
        v-for="item in menuItems"
        :key="item.title"
        :to='item.link'>
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- TOOLBAR principal -->
    <v-toolbar dark :class="toolbarInfo.color">
      <!-- Open sidebar -->
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up "></v-toolbar-side-icon>
      <!-- Toolbar :B -->
      <v-toolbar-title>
        <router-link flat to='/' tag='span' style="cursor: pointer">
           <v-icon left dark class="mr-1 mb-1">{{toolbarInfo.icon}}</v-icon>
           {{toolbarInfo.text}}
         </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer >
      <v-toolbar-items class="hidden-xs-only">
        <!-- Array of MENU ITEMS -->
        <v-btn flat
        v-for="item in menuItems"
        :key="item.title"
        :to="item.link"
        >
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <!-- LOG OUT -->
        <v-btn flat
        @click="onLogOut"
        v-if="userIsAuthenticated"
        >
          <v-icon left>exit_to_app </v-icon>
          Log out
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        toolbarInfo: {
          icon: '',
          text: 'Reise!',
          color: 'primary',
          colorFluid: 'primary--text'
        }
      }
    },
    computed: {
      menuItems () {
        let menuItems = [
          {icon: 'face', title: 'Sign up', link: '/signup'},
          {icon: 'lock_open', title: 'Sign in', link: '/signin'},
          {icon: 'explore', title: 'Maps', link: '/world'}
        ]
        if (this.userIsAuthenticated) {
          menuItems = [
            {icon: 'account_circle', title: 'Profil', link: '/profil'},
            {icon: 'flight', title: 'Meine Reisen', link: '/profil'},
            {icon: 'explore', title: 'Forscher', link: '/world'}
          ]
        }
        return menuItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    },
    methods: {
      onLogOut () {
        this.$store.dispatch('logOut')
        this.$router.push('/signin')
      }
    }
  }
</script>
