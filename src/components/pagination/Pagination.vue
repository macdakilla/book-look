<template>
    <nav class="pagination aling-items-center justify-content-center">
        <ul class="pagination">
            <pagination-item
                v-for="(pag, index) in amountBtnPagination"
                :key="index"
                :title="previosOrNext(index)"
                :page="index"
                :currentPage="currentPage"
                @changePage="changePage"
                :category="category"
                :categoryName="categoryName"
            />
        </ul>
    </nav>
</template>

<script>
import PaginationItem from './Pagination-item';
export default {
    name: 'pagination',
    data() {
        return {
            currentPage: 1,
            positionBtnNext: 11,
            positionBtnPrevious: 0,
            amountBtnPagination: 12
        }
    },
    props: ['category', 'categoryName'],
    computed: {
        books() {
            return this.$store.getters.books.items;
        }
    },
    methods: {
        changePage(operation, indexPage) {
            switch (operation) {
                case '+':
                    this.currentPage++;
                    break;
                case '-':
                    this.currentPage--;
                    break;
                case '=':
                    this.currentPage = indexPage;
                    break;
            }
        },
        previosOrNext(index) {
            if (index == this.positionBtnPrevious) {
                return 'Предыдущая'
            } else if(index == this.positionBtnNext) {
                return 'Следущая'
            } else {
                return index
            }
        }
    },
    components: {
        PaginationItem
    }
}
</script>

<style scoped>
    .page-item.active .page-link {
        color: white !important;
    }
    .pagination {
        margin: 10px 0 15px;
    }
    @media (max-width: 500px) {
        .pagination {
            display: block;
            text-align: center;
        }
    }
</style>