<template>
    <div class="product">
        <div class="row">
            <div class="col-lg-3 col-md-4 image">
                <img 
                    :src="notUndefined(infoBook.imageLinks) && notUndefined(infoBook.imageLinks.thumbnail) ? infoBook.imageLinks.thumbnail : './assets/foto-not-found.jpg'" 
                    :alt="infoBook.title"
                    class="d-md-block d-none"
                >
                <div class="row" v-if="notUndefined(book.saleInfo.buyLink) || notUndefined(book.accessInfo.pdf.acsTokenLink)">
                    <a 
                        :href="book.saleInfo.buyLink" 
                        target="_blank" 
                        class="more-btn btn-buy col-md-12 col-sm-6 p-0 m-0" 
                        v-if="notUndefined(book.saleInfo.buyLink)">
                        <div>
                            <b-icon icon="cart-check-fill" font-scale="1.35" class="icon-buy"></b-icon>
                        </div>
                        <span>Купить</span>
                    </a>
                    <a 
                        :href="book.accessInfo.pdf.acsTokenLink" 
                        class="more-btn btn-load col-md-12 col-sm-6 p-0 m-0"
                        v-if="notUndefined(book.accessInfo.pdf.acsTokenLink)">
                        <div>
                            <b-icon icon="arrow-down-circle-fill" font-scale="1.35" class="icon-load"></b-icon>
                        </div>
                        <span>Скачать</span>
                    </a>
                    <a 
                        v-if="false"
                        @click="toggleFavorite" 
                        class="more-btn btn-favorite col-md-12 p-0 m-0">
                        <div>
                            <b-icon icon="heart-fill" font-scale="1.35" class="icon-favorite"></b-icon>
                        </div>
                        <span>Избранное</span>
                    </a>
                </div>
            </div>
            <div class="col-lg-9 col-md-8 pl-md-5 pl-0 inform">
                <h1 class="title">
                    {{ infoBook.title }}
                </h1>
                <div :class="{readmore: true, 'mask-more': !isActiveDescr}" :style="{height:  290 + heightAllDescr + 'px'}">
                    <ul class="finfo">
                        <li class="author" v-if="notUndefined(infoBook.authors)">
                            <span>Автор:</span>
                            <router-link tag="a" :to="{ name: 'CategoryItem', params: {name: infoBook.authors[0], title: infoBook.authors[0], category: 'inauthor'} }">{{ infoBook.authors[0] }}</router-link>
                        </li>
                        <li class="category" v-if="notUndefined(infoBook.categories)">
                            <span>Жанр:</span>
                            <ul>
                                <li v-for="(cat, index) in infoBook.categories" :key="index">
                                    <router-link tag="a" :to="{ name: 'CategoryItem', params: {name: cat, title: cat, category: 'subject'} }">
                                        {{cat}}
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                        <li class="year" v-if="notUndefined(infoBook.publishedDate)">
                            <span>Год:</span>
                            <span>{{ infoBook.publishedDate.substr(0, 4) }}</span>
                        </li>
                        <li class="numPage" v-if="notUndefined(infoBook.pageCount)">
                            <span>Страниц:</span>
                            <span>{{ infoBook.pageCount }}</span>
                        </li>
                        <li class="publisher" v-if="notUndefined(infoBook.publisher) && infoBook.publisher !== ''">
                            <span>Издатель:</span>
                            <span>{{ infoBook.publisher }}</span>
                        </li>
                        <li class="descr" v-if="notUndefined(infoBook.description)">
                            <span>Аннотация:</span>
                        </li>
                    </ul>
                    <div ref="descriptionProduct" v-if="notUndefined(infoBook.description)">{{ infoBook.description }}</div>
                </div>
                <div @click="isActiveDescr = !isActiveDescr" class="more-btn" v-if="showMoreDescr">
                    <span>{{ isActiveDescr ? 'Свернуть описание' : 'Развернуть описание' }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Product',
    data() {
        return {
            book: {
                volumeInfo: {
                    imageLinks: {}
                },
                accessInfo: {
                    pdf: ''
                },
                saleInfo: {
                }
            },
            isActiveDescr: false
        }
    },
    computed: {
        infoBook() {
            return this.book.volumeInfo
        },
        heightAllDescr() {
            if (this.isActiveDescr) {
                return this.$refs.descriptionProduct.clientHeight - 95;
            } else {
                return 0;
            }
        },
        showMoreDescr() {
            return this.infoBook.description !== undefined && this.infoBook.description.length > 250
        },/* 
        isFavorited() {
            return this.favorite.find((elem) => elem.id == book.id) === undefined ? false : true
        }, */
        favorite() {
            return this.$store.getters.favorite;
        }
    }/* ,
    methods: {
        toggleFavorite(event) {
            event.stopImmediatePropagation();
            if (!this.isFavorited) {
                this.$store.commit('SET_FAVORITE', this.book);
            } else {
                this.$store.commit('REMOVE_FAVORITE', this.book.id);
            }
        }
    } */,
    created() {
        axios
            .get(this.mainUrlApi+ '/' + this.$route.params.id)
            .then((resp) => {
                this.book = resp.data;
            });
    }
}
</script>

<style scoped>
    .product {
        padding: 40px 25px;
    }
    .image {
        height: 290px;
        padding: 0;
    }
    .image img {
        width: 100%;
    }
    .inform {
        padding-left: 50px;
    }
    .title {
        font-size: 23px;
        font-weight: 700;
        margin-bottom: 15px;
    }
    .finfo {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .finfo li {
        padding: 0 0 15px 100px;
        line-height: 20px;
    }
    .finfo li > span:first-child {
        display: inline-block;
        width: 110px;
        margin-left: -100px;
        font-weight: bold;
    }
    .finfo li:last-child {
        padding: 0 0 0 100px;
    }
    .readmore {
        overflow: hidden;
        position: relative;
        transition: height .3s ease-in-out;
    }
    .finfo a {
        text-decoration: underline !important;
        cursor: pointer;
        color: #000000;
    }
    .finfo a:hover {
        text-decoration: none !important;
    }
    .separator {
        text-decoration: none;
    }
    .mask-more::before {
        content: '';
        position: absolute;
        z-index: 1;
        bottom: 0px;
        left: 0;
        right: 0;
        height: 50px;
        pointer-events: none;
        background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%);
    }
    .more-btn {
        display: flex;
        margin: 20px 0;
        font-weight: 700;
    }
    .more-btn span {
        width: 100%;
        display: block;
        cursor: pointer;
        text-decoration: none;
        color: #fff;
        background-color: #3D8CA3;
        text-align: center;
        padding: 10px;
    }
    .more-btn div {
        width: 20%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .category {
        display: flex;
    }
    .category ul {
        padding: 0;
        list-style: none;
    }
    .category ul li {
        padding: 0 !important;
        margin-bottom: 10px;
    }
    .category ul li:last-child {
        margin-bottom: 0px;
    }
    .btn-buy span {
        width: 80%;
        background-color: #333;
    }
    .btn-buy div {
        background-color: #151313;
    }
    .btn-load span {
        width: 80%;
        background-color: #40739c;
    }
    .btn-load div {
        background-color: #30495d;
    }
    .btn-favorite span {
        width: 80%;
        background-color: #b11b1b;
    }
    .btn-favorite div {
        background-color: #7b2424;
    }
    @media (max-width: 767px) {
        .image {
            height: 100%;
            padding: 0 0 50px 0;
        }
    }
</style>