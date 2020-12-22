<template>
    <div class="col-lg-2 col-sm-4 col-6">
        <div class="item">
            <router-link :to="pathToBook" tag="a" class="item-thumb" :style="{background: `url( ${thumbBook} ) center center/cover no-repeat`}">
                <div class="item-mask">
                    <b-icon icon="text-left" font-scale="4" class="icon-book"></b-icon>
                </div>
                <div @click.prevent="toggleFavorite" :class="{'item-favorite': true, 'active': isFavorite}">
                    <b-icon icon="star-fill" font-scale="1.1" class="icon-star"></b-icon>
                </div>
                <div
                    @click.prevent
                    @mouseenter="isActiveInfo = true"
                    @mouseleave="isActiveInfo = false"
                    class="item-info">
                    <b-icon icon="info" font-scale="1.5" class="icon-star"></b-icon>
                </div>
            </router-link>
            <transition name="fade">
                <more-info
                    :title="title"
                    :descr="descr"
                    :author="author"
                    :category="category"
                    :year="year"
                    :rigthPos="positionInfo"
                    :leftPos="!positionInfo"
                    v-if="isActiveInfo"
                />
            </transition>
            <div class="item-descr">
                <router-link :to="pathToBook" tag="a" class="item-title nowrap">{{ title }}</router-link>
                <div class="item-cat nowrap">{{ category }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { BIcon } from 'bootstrap-vue'
import MoreInfo from './MoreInfo';
export default {
    name: 'book',
    data() {
        return {
            isFavorite: this.isFavorited,
            isActiveInfo: false
        }
    },
    computed: {
        positionInfo() {
            switch (this.index) {
                case 1: case 2: case 3: case 7: case 8: case 9: case 13: case 14: case 15:
                    return true
                    break;
                case 4: case 5: case 6: case 10: case 11: case 12: case 16: case 17: case 18:
                    return false
                    break;
            }
        }
    },
    components: {
        MoreInfo
    },
    props: ['pathToBook', 'title', 'category', 'thumbBook', 'item', 'isFavorited', 'descr', 'author', 'year', 'index'],
    components: {
        BIcon,
        MoreInfo
    },
    methods: {
        toggleFavorite(event) {
            event.stopImmediatePropagation();
            this.isFavorite = !this.isFavorite;
            if (this.isFavorite) {
                this.$store.commit('SET_FAVORITE', this.item);
            } else {
                this.$store.commit('REMOVE_FAVORITE', this.item.id);
            }
        }
    }
}
</script>

<style scoped>
    .item {
        position: relative;
    }
    .item-thumb {
        display: block;
        height: 220px;
        width: 100%;
        position: relative;
    }
    .item-descr {
        font-size: 13px;
        color: #000;
        height: 70px;
        padding-top: 10px;
        line-height: 18px;
    }
    .item-title {
        font-weight: 700;
        display: block;
        max-height: 36px;
        overflow: hidden;
    }
    .item-cat {
        opacity: 0.5;
    }
    .item-mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background-color: rgba(0,0,0,0.5);
        opacity: 0;
        z-index: 3;
        transition: opacity .3s ease-in-out;
    }
    .item-mask:hover {
        opacity: 1;
    }
    .icon-book {
        color: #fff;
    }
    .item-favorite {
        display: inline-block;
        padding: 4px 6px;
        background-color: #2c2f40;
        position: absolute;
        top: 0;
        left: 0;
        color: #FFF;
        font-size: 11px;
        z-index: 6;
    }
    .item-info {
        cursor: help;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 6;
        width: 24px;
        height: 24px;
        background-color: #2c2f40;
        color: #fff;
    }
    .item-info svg {
        margin-left: 1px;
    }
    .icon-star {
        transition: color .3s ease-in-out;
    }
    .item-favorite:hover .icon-star {
        color: rgb(255, 45, 45);
    }
    .active .icon-star {
        color: rgb(255, 45, 45);
    }
    a.item-title {
        color: #333;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s ease-in-out;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
</style>