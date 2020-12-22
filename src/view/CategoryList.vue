<template>
    <main>
        <h2 class="title-category">Жанры</h2>
        <div class="container">
            <div class="row">
                <category-list-item 
                    v-for="({name, title}, index) in categories"
                    :key="index"
                    :name="name"
                    :title="title"
                />
            </div>
        </div>
    </main>
</template>

<script>
import CategoryListItem from '../components/category-list/category-list-item';
export default {
    name: 'category-list',
    data() {
        return {
            categories: this.$store.getters.categoryList
        }
    },
    components: {
        CategoryListItem
    }
}
</script>

<style>

</style>