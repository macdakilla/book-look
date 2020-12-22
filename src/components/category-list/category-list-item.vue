<template>
    <div class="col-lg-4 col-md-6 btn-cat-wrap">
        <router-link tag="button" :to="{ name: 'CategoryItem', params: {name: name, title: title, category: 'subject'} }" class="btn btn-info btn-lg btn-block btn-cat">{{title}}</router-link>
    </div>
</template>

<script>
export default {
    name: 'category-list-item',
    props: ['title', 'name']
}
</script>

<style>
    .btn-cat-wrap {
        padding: 0 20px;
    }
    .btn-cat {
        margin: 10px 0;
    }
    .btn.btn-info {
        background-color: #3D8CA3;
    }
    .btn.btn-info:hover {
        background-color: #2c6475;
    }
</style>