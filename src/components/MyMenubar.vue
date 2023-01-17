<script lang="ts">
  import Menubar from 'primevue/menubar';
  export default{
    data(){
      return {
        items: [
          {
            label: 'Neues Spiel',
            icon: 'pi pi-fw pi-file',
            command: (ev)=>{
                this.$emit('new');
            }
          },
          {
            label: 'Spiel laden',
            icon: 'pi pi-fw pi-align-left',
            command: (ev)=>{
              this.$emit("load");
            }
          },
          {
            label: 'Spiel speichern',
            icon: 'pi pi-fw pi-pencil',
            command: (ev)=>{
              this.$emit("save");
            }
          },
          {
            label: 'Einstellungen',
            icon: 'pi pi-cog',
            command: ()=>{
              this.$emit("settings");
            }
          }
        ]
      };
    },
    components: {
      Menubar
    }
  };
</script>

<template>
  <Menubar :model="items">
  </Menubar>
</template>


