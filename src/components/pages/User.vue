<template>
    <Suspense>
        <template #default>
            <UserDetail />
        </template>
        <template #fallback>
            <div>
                <h2>Loading...</h2>
            </div>
        </template>
    </Suspense>
</template>

<script>
import UserDetail from '../UserDetail.vue';

export default {
    components: {
        UserDetail,
    },
};
</script>
