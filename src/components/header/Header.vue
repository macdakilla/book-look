<template>
    <header>
        <div class="row">
            <div class="col-lg-2 col-sm-4 col-12 text-sm-left text-center">
                <Logo/>
            </div>
            <div class="col-lg-3 col-sm-5 col-7 p-sm-0 d-flex align-items-center">
                <Search/>
            </div>
            <div class="col-lg-2 col-sm-3 col-5 p-sm-0 offset-lg-5">
                <Favorites/>
            </div>
        </div>
    </header>
</template>

<script>
import Logo from './Logo';
import Search from './Search-book'
import Favorites from './Favorites-head'

export default {
    name: 'site-header',
    components: {
        Logo,
        Search,
        Favorites
    }
}
</script>

<style scoped>
    header {
        height: 52px;
        background-color: #f1f1f1;
    }
    @media (max-width: 576px) {
        header {
            height: 100%;
        }
        .text-sm-center {
            text-align: center;
        }
    }
</style>