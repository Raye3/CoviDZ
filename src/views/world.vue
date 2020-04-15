<template>
    <div>
        <v-container grid-list-xs>
            <world />
        </v-container>
    </div>
</template>

<script>
import world from '../components/world'
export default {
    name : 'worldView',
    components : {
        world
    },
    data() {
        return {
            
        }
    },
}
</script>

<style>

</style>