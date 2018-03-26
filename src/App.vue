
<template>
    <div class="app">
        <hua-nav></hua-nav>
        <keep-alive>
        <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
import nav from './components/nav'
import home from './components/home'
import discover from './components/discover'
export default {
    components: {
        'hua-nav': nav,
        home,
        discover,
    }
}
</script>

<style>
.app{
    font-size: 12px;

}
</style>
