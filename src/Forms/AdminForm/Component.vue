<template lang="pug">
    include Template.pug
</template>

<script>
    import BootstrapForm from '../Form/Component.vue'

    export default {
        mixins: [
            BootstrapForm
        ],
        props: {
            title: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>