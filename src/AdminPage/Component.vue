<script>
    import AdminPage from '../../../blue-admin-vue-components/src/AdminPage/Component.vue'
    import SessionMessages from './../../../helper-vue-components/src/SessionMessages/SessionMessages.vue'

    export default {
        mixins: [
            AdminPage,
            SessionMessages,
        ],
    }
</script>

<style lang="scss" scoped>
    @import "Style.scss";
</style>