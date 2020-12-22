<template>
    <router-link :to="{ name: 'iMain' }" tag="div" class="home-link">
        Book Look
    </router-link>
</template>

<script>
export default {
    name: 'logo'
}
</script>

<style lang="scss" scoped>
    .home-link {
        font-size: 25px;
        color: #3d8ca3;
        transition: all .2s ease 0s;
        line-height: 47px;
        font-weight: 700;
        text-shadow: 2px 2px 1px #d7d7d7;
        cursor: pointer;
        line-height: 52px;
        transition: all 0.3s ease-in-out;
    }
    .home-link:hover {
        color: #36778b;
    }
</style>