<template lang="pug">
    include Template.pug
</template>

<script>
    import Table from '../../../../blue-admin-vue-components/src/Table/Table/Component.vue'

    export default {
        mixins: [
            Table,
        ]
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>