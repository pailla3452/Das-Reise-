<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4>Ajouter votre voyage:</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateTravel">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Titre de votre voyage / déstination"
                id="title"
                v-model="title"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-select
                autocomplete
                label="Pays"
                placeholder="Select..."
                :rules="[() => !!country || 'This field is required']"
                :items="countries"
                v-model="country"
                ref="country"
                required
              ></v-select>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex xs12>
              <gmap-map
                :center="center"
                :zoom="7"
                style="width: 100%; height: 400px"
              >
                <gmap-marker
                  :key="index"
                  v-for="(m, index) in markers"
                  :position="m.position"
                  :clickable="true"
                  :draggable="true"
                ></gmap-marker>
              </gmap-map>
            </v-flex>
          </v-layout>
          <v-layout row class="mt-5">
            <v-flex xs12 sm6 offset-sm3>
              <v-btn raised class="primary" @click="onPickFile">Choissez une photo </v-btn>
              <input type="file" style="display: none" ref="fileInput" accept="image/*" @change="onFilePicked">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="400px">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="description"
                label="Détaillez votre expérience:"
                id="description"
                multi-line
                v-model="description"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn
                class="primary"
                :disabled="!formIsValid"
                type="submit">Publiez votre expérience !!!</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        imageUrl: '',
        countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium'],
        country: '',
        description: '',
        image: null,
        center: {lat: 52.0, lng: 13.0},
        markers: [
          {
            position: {lat: 10.0, lng: 13.0}
          },
          {
            position: {lat: 52.0, lng: 13.0}
          }
        ]
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' &&
          this.location !== '' &&
          this.imageUrl !== '' &&
          this.description !== ''
      }
    },
    methods: {
      onCreateTravel () {
        if (!this.formIsValid) {
          return
        }
        if (!this.image) {
          return
        }
        const travelData = {
          title: this.title,
          country: this.country,
          image: this.image,
          description: this.description,
          position: {lat: 10.0, lng: 13.0},
          date: new Date()
        }
        this.$store.dispatch('createTravel', travelData)
        this.$router.push('/AllReisen')
      },
      onPickFile () {
        this.$refs.fileInput.click()
      },
      onFilePicked (event) {
        const files = event.target.files
        let filename = files[0].name
        if (filename.lastIndexOf('.') <= 0) {
          return window.alert('Choissez un fichier valide svp')
        }
        const fileReader = new window.FileReader()
        fileReader.addEventListener('load', () => {
          this.imageUrl = fileReader.result
        })
        fileReader.readAsDataURL(files[0])
        this.image = files[0]
      }
    }
  }
</script>
