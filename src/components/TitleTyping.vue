<template>
  <p class="text-4xl pb-1">Ahmed Badr </p>
  <VueWriter
    :eraseSpeed="25"
    :typeSpeed="50"
    :intervals="25"
    class="text-primary text-base"
    :array="[
      'Artificial Intelligence',
    ]"
  />
</template>

<script>
  import VueWriter from "vue-writer";
  export default {
    components: { VueWriter },
    props: ["fontSize"],
  };
</script>

<style></style>
