<template>
  <div>
    <SectionsTitle :name="'Recent Works'" />
    <div
      class="relative before:hidden md:before:block before:line-gradiant-y before:left-1/2"
    >
      <WorksCard
        class="w-full md:w-1/2 inline-block"
        v-for="work in works"
        :key="work.title"
        :title="work.title"
        :img="work.img"
        :modalImg="work.modalImg"
        
      />
    </div>
  </div>
</template>


<script>
  import SectionsTitle from "@/components/SectionsTitle.vue";
  import WorksCard from "@/components/WorksCard.vue";
  export default {
    components: { SectionsTitle, WorksCard },
    data() {
    
      return {
        works: [
        
          {
            title: "Face Attendance Project",
            img: "img/works/Face Attendance Project.jpg",
            modalImg: "img/works/Face Attendance Project.jpg",
          },
            {
            title: "Real or Not",
            img: "img/works/real-or-fake.jpg",
            modalImg: "img/works/real-or-fake.jpg",
          },
                    {
            title: "Fuel Consumption",
            img: "img/works/Fuel Consumption.jpg",
            modalImg: "img/works/Fuel Consumption.jpg",
          },
          {
            title: "Customer attrition",
            img: "img/works/Customer attrition.jpg",
            modalImg: "img/works/Customer attrition.jpg",
          },
          {
            title: "prediction",
            img: "img/works/prediction.jpg",
            modalImg: "img/works/prediction.jpg",
          },
          {
            title: "Ahmed Badr",
            img: "img/works/Ahmed.jpg",
            modalImg: "img/works/Ahmed.jpg",
          },
        ],
      };
    },
  };
  

</script>
