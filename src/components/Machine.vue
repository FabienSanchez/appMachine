<template>
    <div>
        <h1>{{ name }}</h1>
        <div v-bind:class="[status ? 'text-success' : 'text-danger']">
            Status :
            <span v-html="status ? 'OK' : 'KO'"></span>
        </div>
        <br/>
        <p>Last time checked : {{ checkedAt }} </p>
    </div>
</template>

<script>
    export default {
        name: "machine",
        data() {
            return {
                name: 'What else ?',
                status: true,
                checkedAt: new Date(),
            }
        }
    }
</script>

<style scoped>

</style>