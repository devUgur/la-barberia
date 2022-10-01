<template>
  <div id="instagram-gallery">
    <InstagramFeed
        :count="12"
        accessToken="9618b73c68219d7a85d7d58896df1d7a"
        :pagination="true"
        :caption="true"
    />
  </div>
</template>

<script>


export default {
  name: "InstagramGallery",
  components: {}
}
</script>