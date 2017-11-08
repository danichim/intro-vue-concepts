<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawerRight"
      temporary
      right
      enable-resize-watcher
      app
    >
      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dreapta</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="indigo"
      dark
      fixed
      app
      clipped-right
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Codecamp</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Meniu
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-group v-for="item in items" :value="item.active" v-bind:key="item.title" >
          <v-list-tile slot="item" :router="!!item.routeName && !item.items" :to="!item.items ? item.routeName : ''">
              <v-list-tile-action>
                  <v-icon dark>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                  <v-icon dark>{{ item.items ? 'keyboard_arrow_down' : '' }}</v-icon>
              </v-list-tile-action>
          </v-list-tile>
          <v-list-tile v-for="subItem in item.items" v-bind:key="subItem.title" :router="!!subItem.routeName" :to="subItem.routeName">
              <v-list-tile-content>
                  <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <main>
      <v-navigation-drawer
        temporary
        v-model="left"
        fixed
      ></v-navigation-drawer>
      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <v-fade-transition mode="out-in">
              <router-view></router-view>
            </v-fade-transition>
          </v-layout>
        </v-container>
      </v-content>
      <v-navigation-drawer
        right
        temporary
        v-model="right"
        fixed
      ></v-navigation-drawer>
    </main>
    <v-footer color="indigo" class="white--text" app>
      <span>Vuetify - Dan Ichim</span>
      <v-spacer></v-spacer>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      drawerRight: false,
      right: null,
      left: null,
      items: [
        { title: 'Home', icon: 'home', routeName: '/home', active: false },
        { title: 'Declarative', icon: 'dashboard', routeName: 'declarative', active: false },
        { title: 'Conditionals', icon: 'event', routeName: 'conditionals', active: false },
        { title: 'Form Input Bindings', icon: 'event', routeName: 'form', active: false },
        { title: 'Computed Properties', icon: 'event', routeName: 'computed', active: false },
        { title: 'User', icon: 'mouse', active : false,
          items: [{
              active : false,
              title: 'Create ',
              routeName: '/user/create'
          }]
        },
      ]
    })
  }
</script>