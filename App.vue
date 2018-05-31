<template>
    <div id="app">
        <header>
            <h1>Vue Scrolling Card List</h1>
            <a href="https://github.com/arnellebalane/vue-scrolling-card-list" target="_blank" rel="noopener noreferrer">github.com/arnellebalane/vue-scrolling-card-list</a>
        </header>

        <ul class="card-list">
            <li class="card-item" v-intersect="onIntersect"></li>
            <li class="card-item" v-intersect="onIntersect"></li>
            <li class="card-item" v-intersect="onIntersect"></li>
            <li class="card-item" v-intersect="onIntersect"></li>
            <li class="card-item" v-intersect="onIntersect"></li>
            <li class="card-item" v-intersect="onIntersect"></li>
            <li class="card-item" v-intersect="onIntersect"></li>
            <li class="card-item" v-intersect="onIntersect"></li>
            <li class="card-item" v-intersect="onIntersect"></li>
            <li class="card-item" v-intersect="onIntersect"></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'App',

        methods: {
            onIntersect(e) {
                return {
                    opacity: e.intersectionRatio / 2 + 0.5,
                    transform: `scale(${e.intersectionRatio / 2 + 0.5})`
                };
            }
        }
    };
</script>

<style scoped>
    header {
        margin-bottom: 50px;
        text-align: center;
    }

    h1 {
        font-size: 16px;
        font-weight: 600;
    }

    a {
        font-size: 14px;
    }

    .card-list {
        width: 100%;
        max-width: 400px;
        padding: 0;
        margin: 0 auto;
        list-style: none;
    }

    .card-item {
        width: 100%;
        border-radius: 5px;
        background-color: #673AB7;
    }

    .card-item::before {
        content: "";
        display: block;
        padding-top: calc(100% / 16 * 9);
    }

    .card-item:not(:first-child) {
        margin-top: 30px;
    }

    .card-item:not(:last-child) {
        margin-bottom: 30px;
    }
</style>
