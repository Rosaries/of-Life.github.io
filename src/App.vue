<template>
  <v-app id="inspire">
    <v-navigation-drawer 
    v-model="drawer"
    app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Rosary of Life
          </v-list-item-title>
          <v-list-item-subtitle>
           
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

 <v-app-bar
      app
      color="#primary"
      dark
 
      src= Rosary.jpg


    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Rosary of Life</v-app-bar-title>

      <v-spacer></v-spacer>


    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
       drawer: null,
              items: [
          { title: 'Rosary of Life', icon:'mdi-mother-nurse', to: '/' },    
          { title: 'Introduction', icon: 'mdi-book-cross', to: '/introduction' },
          { title: 'Trees of Life & Death', icon: 'mdi-pine-tree', to: '/life-and-death' },
          { title: 'Rosary Prayers', icon: 'mdi-gamepad-circle-outline', to: '/rosary' },
          
              { title: 'Joyful Mysteries', icon: 'mdi-emoticon-happy-outline', to: '/joyful' },
              { title: 'Luminous Mysteries', icon: 'mdi-glass-tulip', to: '/luminous' },
              { title: 'Sorrowful Mysteries', icon: 'mdi-emoticon-sad-outline', to: '/sorrowful' },
              { title: 'Glorious Mysteries', icon: 'mdi-triangle-outline', to: '/glorious' },

          

          { title: 'Final Prayers', icon: 'mdi-shield-cross', to: '/final-prayers' },
          { title: 'What is Prayer?', icon: 'mdi-head-dots-horizontal-outline', to: '/what-is-prayer' },
          { title: 'Scripture Study Tips', icon: 'mdi-lightbulb-outline', to: '/scripture-tips' },
          { title: 'About', icon: 'mdi-help-box', to: '/about' },
        ], 
       }),
  }
</script>