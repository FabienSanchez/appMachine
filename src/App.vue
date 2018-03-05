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
                            <a class="nav-link active" @click="onListClick">Liste</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" @click="onMapClick">Carte</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <List></List>
                    <Map></Map>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './components/MachinesList.vue'
    import Map from './components/MachinesMap.vue'

    export default {
        name: 'app',
        data() {
            return {
                msg: 'Coffee Machine Vader'
            }
        },
        methods: {
            onListClick: function () {
                alert('Vous avez cliqué sur liste')
            },
            onMapClick: function () {
                alert('Vous avez cliqué sur map');
            }
        },
        components: {
            List,
            Map
        }
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

    h1, h2 {
        font-weight: normal;
        margin-bottom: 15px;
        margin-top: 15px;
    }

    h1 {
        color: #53240f;
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

    a {
        color: #42b983;
    }
</style>
