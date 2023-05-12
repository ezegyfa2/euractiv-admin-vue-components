<script>
    import TableWithEditButtons from '../../../../helper-vue-components/src/Tables/TableWithEditButtons/Component.vue'

    export default {
        mixins: [
            TableWithEditButtons,
        ],
        props: {
            edit_icon_link_type: {
                type: String,
                default: 'euractiv-admin-edit-icon-link'
            },
            delete_icon_link_type: {
                type: String,
                default: 'delete-icon-link'
            }
        }
    }
</script>


<style lang="scss" scoped>
    @import "Style.scss";
</style>
