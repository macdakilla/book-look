<template>
    <main>
        <h2 class="title-category">Избранное</h2>
        <div v-if="favoriteList.length === 0" class="no-favorite">
            <p>В данный момент список пуст</p>
        </div>
        <div class="row" v-else>
            <Book
                v-for="(item, i) in favoriteList" 
                :key="item.id"
                :index="i + 1"
                :pathToBook="{ name: 'Id', params: {id: item.id} }" 
                :title="item.volumeInfo.title" 
                :category="notUndefined(item.volumeInfo.categories) ? item.volumeInfo.categories[0] : 'Неизвестно'" 
                :thumbBook="item.volumeInfo.imageLinks.thumbnail"
                :item="item"
                :descr="notUndefined(item.volumeInfo.description) ? item.volumeInfo.description : ''"
                :isFavorited="true"
            />
        </div>
    </main>
</template>

<script>
import Book from '../components/book/Book';
import axios from 'axios';
export default {
    name: 'favorite',
    data() {
        return {
            favoriteList: this.$store.getters.favorite
        }
    },
    components: {
        Book
    }
}
</script>

<style scoped>
    .no-favorite {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 500px;
        font-size: 25px;
    }
</style>