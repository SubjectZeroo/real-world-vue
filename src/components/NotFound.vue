<template>
  <div>
    <h1>Oops!</h1>
    <h3>The {{ presource }} you're lokking is not here.</h3>
    <router-link :to="{ name: 'event-list' }">Back to home page</router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
