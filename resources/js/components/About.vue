<template>
  <div>
    This page describes who we are.
    <div v-html="content"></div>
  </div>
</template>
<script>
import marked from "marked";

export default {
  created() {
    this.content = marked(this.markdown);
  },
  data() {
    return {
      content: "",
      markdown: `
Laravel App
========================

I'm Laravel.
`
    };
  }
};
</script>
