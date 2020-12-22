<template>
    <div :class="{'info-wrap': true, left: leftPos, rigth: rigthPos}">
        <h3 class="info-title">{{ title }}</h3>
        <div class="info-descr">{{ descr }}</div>
        <div class="info-add">
            <ul>
                <li>
                    <span>Автор: </span>
                    <span>{{ notUndefined(author) ? author.join(' / ') : 'Неизвестно' }}</span>
                </li>
                <li>
                    <span>Жанр: </span>
                    <span>{{ notUndefined(author) ? category : 'Не определена' }}</span>
                </li>
                <li>
                    <span>Год: </span>
                    <span>{{ notUndefined(year) ? year : 'Неизвестно' }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MoreInfo',
    props: ['title', 'descr', 'author', 'category', 'year', 'leftPos', 'rigthPos']
}
</script>

<style>
    .info-wrap {
        position: absolute;
        top: 0;
        width: 360px;
        border-radius: 3px;
        background-color: #fff;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
        padding: 15px;
        z-index: 100;
        font-size: 12px;
        cursor: auto;
    }
    .rigth {
        left: 100%;
    }
    .left {
        right: 25px;
    }
    .info-title {
        color: #333;
        font-size: 20px;
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .info-descr {
        height: 100px;
        font-size: 13px;
        line-height: 20px;
        overflow: hidden;
        color: #444;
    }
    .info-add {
        background-color: #f2f2f2;
        margin: 15px -15px -15px -15px;
        padding: 15px;
    }
    .info-add ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .info-add ul li {
        color: #333;
        padding: 0 0 15px 100px;
        line-height: 20px;
    }
    .info-add ul li > span:first-child {
        display: inline-block;
        width: 90px;
        margin-left: -100px;
        font-weight: bold;
    }
    .info-add ul li:last-child {
        padding: 0 0 0 100px;
    }
</style>