<template>
  <div id="about-view">
    <ViewTitleComponent :title="title"></ViewTitleComponent>
  </div>
</template>

<script>
import ViewTitleComponent from "@/components/view/ViewTitle.component";
export default {
  name: "AboutView",
  components: {
    ViewTitleComponent
  },
  data: () => {
    return {
      title: 'Über Uns'
    }
  }
}
</script>