<script>
export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    console.log("Mount");

    this.$axios.get("http://localhost:8080/greeting")
      .then(res => {
        console.log("응답: " + JSON.stringify(res.data));
        this.posts = res.data
      })
      .catch(error => {
        console.log("에러 : " + error.data);
      })
      .finally(() => {
        console.log("[MainComponent] : [axios] : [complete]");
      })
  }
}
</script>

<template>
  <header>
  </header>

  <main>
  123
  <div v-for="post in posts" :key="post.id">
    <h2>{{ post.id }} {{ post.name }}</h2>
  </div>
  </main>
</template>

