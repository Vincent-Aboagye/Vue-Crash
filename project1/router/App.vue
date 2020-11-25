<template>
    <h3>Hello, and welcome this is Vue Router</h3>
    <router-link to="/hello">Home</router-link>
     <router-link to="/posts">Posts</router-link>
    <div><router-view /></div>

</template>

<script>
export default {
    
}
</script>