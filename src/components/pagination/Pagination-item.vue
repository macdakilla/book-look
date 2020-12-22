<template>
    <li 
        :class="{
            'page-item': true, 
            'active': isActive, 
            'disabled': isDisabled
        }"
        >
        <a @click.prevent="changePage(page)" class="page-link">{{ title }}</a>
    </li>
</template>

<script>
export default {
    name: 'pagination-item',
    props: ['title', 'page', 'currentPage', 'category', 'categoryName'],
    computed: {
        isActive() {
            return this.currentPage == this.page
        },
        isDisabled() {
            return (this.page == 0 && this.currentPage == 1) || (this.page == 11 && this.currentPage == 10)
        }
    },
    methods: {
        changePage(indexPage) {
            switch (indexPage) {
                case 0:
                    this.$emit('changePage', '-');
                    this.$store.dispatch('initBooks', `q=${this.category}:${this.categoryName}&startIndex=${18 * this.currentPage - 18}&maxResults=18`);
                    break;
                case 11:
                    this.$emit('changePage', '+');
                    this.$store.dispatch('initBooks', `q=${this.category}:${this.categoryName}&startIndex=${18 + 18 * this.currentPage}&maxResults=18`);
                    break;
                default:
                    this.$emit('changePage', '=', indexPage)
                    this.$store.dispatch('initBooks', `q=${this.category}:${this.categoryName}&startIndex=${indexPage * 18}&maxResults=18`);
                    break;
            }
        }
    }
}
</script>

<style scoped>
    .page-item a.page-link {
        cursor: pointer;
        color: #333;
    }
    .page-item.active a.page-link {
        outline: none;
        background-color: #3D8CA3;
        color: #fff;
    }
    .page-item.disabled a.page-link {
        color: rgba(49, 49, 49, 0.75);
    }
    @media (max-width: 500px) {
        a.page-link {
            font-size: 18px;
        }
    }
</style>