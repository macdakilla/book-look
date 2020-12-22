<template>
    <main>
        <h2 class="title-category">Что почитать?</h2>
        <div class="list-book">
            <div class="row">
                <Book 
                    v-for="(item, i) in books" 
                    :key="item.id"
                    :index="i + 1"
                    :pathToBook="{ name: 'Id', params: {id: item.id} }" 
                    :title="item.volumeInfo.title" 
                    :author="notUndefined(item.volumeInfo.authors) ? item.volumeInfo.authors : ['Автор не известен']"
                    :category="notUndefined(item.volumeInfo.categories) ? item.volumeInfo.categories[0] : 'Категория не определена'" 
                    :thumbBook="notUndefined(item.volumeInfo.imageLinks) && notUndefined(item.volumeInfo.imageLinks.thumbnail) ? item.volumeInfo.imageLinks.thumbnail : './assets/foto-not-found.jpg'"
                    :item="item"
                    :descr="notUndefined(item.volumeInfo.description) ? item.volumeInfo.description : 'Для данной книги ещё не создано описание. Возможно оно появится позже!'"
                    :isFavorited="favorite.find((elem) => elem.id == item.id) === undefined ? false : true"
                    :year="notUndefined(item.volumeInfo.publishedDate) ? item.volumeInfo.publishedDate.substr(0, 4) : 'Год не известен'"
                />
            </div>
            <Pagination 
                v-if="books && books.length == 18"
                categoryName=""
                category=""
            />
        </div>
    </main>
</template>

<script>
import Book from '../components/book/Book';
import Pagination from '../components/pagination/Pagination';

export default {
    name: 'iMain',
    computed: {
        books() {
            return this.$store.getters.books.items;
        },
        favorite() {
            return this.$store.getters.favorite;
        }
    },
    components: {
        Book,
        Pagination
    },
    created() {
        this.$store.dispatch('initBooks', 'q=:&startIndex=18&maxResults=18');
    }
}
</script>

<style>
    .title-category {
        color: #333;
        font-weight: 700;
        font-size: 25px;
        padding: 15px;
        padding-left: 15px;
        margin: 0;
    }
</style>