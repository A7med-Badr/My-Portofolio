<template>

  <div>
    <SectionsTitle :name="'About Me'" />
    <div name="AboutView" class="flex flex-wrap">
      <div class="w-full md:w-15/2 p-6">
      I’m Ahmed Badr, an AI developer from Egypt. 
      with 1+ year experience in computer engineering and programming,
      artificial intelligence (AI) using machine learning, data science,
      computer vision, Natural Language Processing (NLP), and deep learning. 
      I have rich experience in computer engineering and programming for artificial intelligence (AI).
      I love the parade of brand-new things and am always looking for new things to learn.
      </div>
      <div>
        <InfoModifer
          v-for="data in aboutInfo"
          :key="data.name"
          :info="data.info"
          :name="data.name"
          class="before:last:hidden first:pt-0"
        />
      </div>
    </div>
    <SectionsTitle :name="'My Services'" class="pt-0" />
    <div class="flex flex-wrap text-center">
      <div
        class="w-full p-6 relative md:w-1/2 even:before:line-gradiant-y last:w-full after:line-gradiant-x"
        v-for="service in myServices"
        :key="service.title"
      >
        <font-awesome-icon
          class="bg-primary w-10 h-10 p-4 rounded-full text-white"
          :icon="`fa-solid ${service.icon}`"
        />
        <p class="text-white text-2xl font-bold py-4">{{ service.title }}</p>
        <p>
          {{ service.description }}
        </p>
      </div>
    
      <span
        class="w-1/2 p-6 relative grayscale transition-all duration-500 hover:grayscale-0 md:w-1/4 before:line-gradiant-y after:line-gradiant-x"
        v-for="client in clients"
        :key="client.link"
      >
        <img
          :src="'img/clientLogos/' + client.img"
          :alt="client.alt"
          class="m-auto w-5/6 h-full"
        />
      </span>
    </div>
  </div>
</template>
<script>
  import SectionsTitle from "@/components/SectionsTitle.vue";
  import InfoModifer from "../components/InfoModifer.vue";
  export default {
    components: { SectionsTitle, InfoModifer },
    data() {
      return {
        myServices: [
          {
            icon: "fa-code",
            title: "AI Development",
            description:
              "Advanced AI development services help automate business processes and overcome difficult business problems quickly.",
          },
        ],
      };
    },
  };
</script>
