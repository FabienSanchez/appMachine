<template>
    <div id="app">
        <img src="/src/assets/coffe-cup.jpg">
        <h1>{{ msg }}</h1>
        <h2>que faire ?</h2>

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <ul class="nav nav-tabs nav-fill">
                        <li class="nav-item">
                            <router-link to="/machines" class="nav-link">Liste</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/map" class="nav-link">Map</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <router-view class="tabs-container"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Coffee Machine Vader',
                isActive: {
                    list: false,
                    map: false
                }
            }
        },
        methods: {
            active: function (link) {
                console.log(link)
            }
        },
    }
</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    img {
        width: 200px;
        height: 200px;
    }
    .tabs-container {
        border-bottom-left-radius: .25rem;
        border-bottom-right-radius: .25rem;
        border: 1px solid transparent;
        border-color: transparent #dee2e6 #dee2e6 #dee2e6;
    }


    h1, h2 {
        font-weight: normal;
        margin-bottom: 15px;
        margin-top: 15px;
    }

    h1 {
        color: #53240f;
    }

    a {
        color: chocolate;
    }

    h2 {
        color: chocolate;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }
</style>
