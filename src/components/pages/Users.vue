<template>
    <Suspense>
        <template #default>
            <UserList />
        </template>
        <template #fallback>
            <div>
                <h2>Loading...</h2>
            </div>
        </template>
    </Suspense>
</template>

<script>
import UserList from '../UserList.vue';

export default {
    components: {
        UserList,
    },
};
</script>
