<template>
    <div id="app">
        <header>
            <h1>Vue Scrolling Card List</h1>
            <a href="https://github.com/arnellebalane/vue-scrolling-card-list" target="_blank" rel="noopener noreferrer">github.com/arnellebalane/vue-scrolling-card-list</a>
        </header>

        <div class="card-list">
            <img src="./images/01.jpg" class="card-item" v-intersect="{callback: onIntersect, threshold}">
            <img src="./images/02.jpg" class="card-item" v-intersect="{callback: onIntersect, threshold}">
            <img src="./images/03.jpg" class="card-item" v-intersect="{callback: onIntersect, threshold}">
            <img src="./images/04.jpg" class="card-item" v-intersect="{callback: onIntersect, threshold}">
            <img src="./images/05.jpg" class="card-item" v-intersect="{callback: onIntersect, threshold}">
            <img src="./images/06.jpg" class="card-item" v-intersect="{callback: onIntersect, threshold}">
            <img src="./images/07.jpg" class="card-item" v-intersect="{callback: onIntersect, threshold}">
            <img src="./images/08.jpg" class="card-item" v-intersect="{callback: onIntersect, threshold}">
            <img src="./images/09.jpg" class="card-item" v-intersect="{callback: onIntersect, threshold}">
            <img src="./images/10.jpg" class="card-item" v-intersect="{callback: onIntersect, threshold}">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',

        data() {
            const threshold = [];
            for (let i = 0; i <= 20; i++) {
                threshold.push(0.05 * i);
            }

            return { threshold };
        },

        methods: {
            onIntersect({target, intersectionRatio}) {
                if (intersectionRatio >= 1) {
                    target.removeAttribute('style');
                } else {
                    // Clips the ratio within 0.75 - 1.0 range
                    const ratio = intersectionRatio * 0.25 + 0.75;
                    target.style.opacity = ratio;
                    target.style.transform = `scale(${ratio})`;
                }
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
        box-shadow:
            0 15px 35px rgba(40, 40, 40, 0.25),
            0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .card-item::before {
        content: "";
        display: block;
        padding-top: calc(100% / 16 * 9);
    }

    .card-item:not(:first-child) {
        margin-top: 20px;
    }

    .card-item:not(:last-child) {
        margin-bottom: 20px;
    }
</style>
