<template>
    <router-link :to="path" tag="li" class="navbar-item">
        {{title}}
    </router-link>
</template>

<script>
export default {
    name: 'navbar-item',
    props: ['title', 'path']
}
</script>

<style scoped>
    .navbar-item {
        padding: 15px;
        font-size: 14px;
        color: #FFF;
        text-transform: uppercase;
        cursor: pointer;
        transition: all .2s ease-in-out;
    }
    .navbar-item:hover {
        background-color: #275a69;
    }
    .router-link-exact-active {
        background-color: #275a69;
    }
</style>