<template>
    <main>
        <h2 class="title-category">{{ this.$route.params.title }}</h2>
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
                    :isFavorited="favorite.find((elem) => elem.id == item.id) !== undefined"
                    :year="notUndefined(item.volumeInfo.publishedDate) ? item.volumeInfo.publishedDate.substr(0, 4) : 'Год не известен'"
                />
            </div>
            <Pagination 
                category="subject"
                :categoryName="this.$route.params.name"
            />
        </div>
    </main>
</template>

<script>
import Book from '../components/book/Book'
import Pagination from '../components/pagination/Pagination'

export default {
    name: 'category-item',
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
        this.$store.dispatch('initBooks', 'q=' + this.$route.params.category + ':' + this.$route.params.name + '&maxResults=18');
    }
}
</script>

<style>

</style>