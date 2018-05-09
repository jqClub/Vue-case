<template>
    <div id="app">
        <img src="./assets/logo.png">
        {{total}}
        <!--<transition name="fade">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </transition>-->
        <apple  v-on:increment="incrementTotal" :key="111"></apple>
        <!--<router-view :to="{path: apple }">to apple</router-view>-->
        <!--<router-link to="apple" tag="li">to apple</router-link>
        <router-link :to="{path: '/apple' }">to apple</router-link>
        <router-link :to="{path: 'balan', param: {color: 'black'} }">to banla</router-link>
        <router-link :to="{path: '/apple/red' }">to apple red</router-link>-->
    </div>
</template>

<script>
        import apple from './components/apple'
        
    export default {
        name: 'App',
        data: {
            total: 0,
        },
        components: {
            apple: apple,
        },
        methods: {
            incrementTotal: function() {
                console.log('incrementTotal')
                this.total += 1
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>