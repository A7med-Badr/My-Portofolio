<template>
  <BackAnimations />
  <div id="works-modal"></div>
  <div
    class="mx-auto relative text-gray-100 md:py-6 md:px-5 md:max-w-2xl md:items-center md:grid md:grid-cols-6 lg:grid-cols-12 lg:max-w-7xl lg:h-screen lg:overflow-hidden"
  >
    <NavBar />
    <ProfileCard class="md:col-span-5 lg:col-span-4" />
    <VeiwsSwitcher
      class="md:px-0 md:row-span-auto md:col-span-5 md:col-start-2 lg:col-span-7"
      id="viewer"
    />
  </div>
</template>

<script>
  import NavBar from "./views/NavBar.vue";
  import BackAnimations from "./components/BackAnimations.vue";
  import ProfileCard from "./views/ProfileCard.vue";
  import VeiwsSwitcher from "./views/VeiwsSwitcher.vue";
  export default {
    components: {
      NavBar,
      BackAnimations,
      ProfileCard,
      VeiwsSwitcher,
    },
    mounted() {
      document.title = "Ahmed Badr";
      const link = document.querySelector("[rel='icon']");
      link.setAttribute("href", "icon.png");
    },
  };
</script>
<style>
  /* width */
  ::-webkit-scrollbar {
    width: 12px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #262626;
    border-radius: 0 10px 10px 0;
    transition: all 0.3s ease-in-out;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #363636;
  }
</style>
