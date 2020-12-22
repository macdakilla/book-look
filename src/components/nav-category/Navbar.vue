<template>
    <ul class="navbar-list">
        <navbar-item title="Что почитать" path="/"/>
        <navbar-item title="Жанры" :path="{ name: 'CategoryList' }"/>
    </ul>
</template>

<script>
import NavbarItem from './Nav-item'
export default {
    name: 'navbar',
    components: {
        NavbarItem
    }
}
</script>

<style scoped>
    .navbar-list {
        width: 100%;
        background-color: #3d8ca3;
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>