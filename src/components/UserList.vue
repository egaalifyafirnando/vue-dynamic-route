<template>
    <div class="user-list">
        <table>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in list" :key="index">
                    <td>
                        <router-link :to="`/users/${item.id}`">
                            <p>{{ item.id }}</p>
                        </router-link>
                    </td>
                    <td>
                        <router-link :to="`/users/${item.id}`">
                            <p>{{ item.name }}</p>
                        </router-link>
                    </td>
                    <td>
                        <router-link :to="`/users/${item.id}`">
                            <p>{{ item.email }}</p>
                        </router-link>
                    </td>
                    <td>
                        <router-link :to="`/users/${item.id}`">
                            <p>{{ item.phone }}</p>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- <ul v-for="(item, index) in list" :key="index">
            <li>
                <router-link :to="`/users/${item.id}`">
                    <p>{{ item.name }}</p>
                </router-link>
            </li>
        </ul> -->
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
    async setup() {
        const data = reactive({
            list: [],
        });

        const result = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        data.list = await result.json();

        return {
            ...toRefs(data),
        };
    },
};
</script>

<style scoped>
.user-list {
    text-align: center;
}

table {
    border-collapse: collapse;
}

table,
td {
    border: 1px solid #333;
}

thead,
tfoot {
    background-color: #333;
    color: #fff;
}

table thead th,
table tbody td {
    padding: 10px 20px;
}
</style>
