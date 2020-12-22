<template>
    <footer class="footer clearfix">
        <div class="text">
            <p>Обратная связь: help@booklook.ru</p>
            <p>© {{ new Date().getFullYear() }} book-look.ru, Все права защищены</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footer-site'
}
</script>

<style scoped>
    .footer {
        background-color: #327286;
        color: rgba(255, 255, 255, 0.801);
        padding: 15px;
        border-top: 3px solid rgb(46, 109, 128);
    }
    .text {
        float: right;
        line-height: 20px;
    }
    .text p {
        margin: 0;
    }
</style>