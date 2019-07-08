<template>
    <div>
        <div class="header">
            {{dapaiData}}
            <img :src="dapaiData.specialImg" alt="">
            <h2></h2>
        </div>
        <div class=""></div>
        <div class="list"></div>
    </div>
</template>
<script>
export default {
    props:["dapaiData"]
}
</script>
<style lang="scss" scoped>


</style>
