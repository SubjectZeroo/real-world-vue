<template>
  <div>
    <h1>Uh-Oh!</h1>
    <h3>
      It looks like your're experiencing some network issues, please click the
      back button and try again
    </h3>
     <router-link :to="{ name: 'event-list' }">Back to home page</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>