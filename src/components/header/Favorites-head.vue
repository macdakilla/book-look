<template>
    <router-link :to="{ name: 'Favorites' }" tag="div" class="favorites-link">
        <b-icon icon="suit-heart-fill" font-scale="1" class="icon-heart"></b-icon>
        Избранное
    </router-link>
</template>

<script>
import { BIcon } from 'bootstrap-vue'
export default {
    name: 'favorites',
    components: {
        BIcon
    }
}
</script>

<style scoped>
    .favorites-link {
        text-align: center;
        color: #2a6171;
        line-height: 52px;
        cursor: pointer;
        transition: color .3s ease-in-out;
    }
    .favorites-link:hover {
        color: rgb(182, 30, 30);
    }
</style>