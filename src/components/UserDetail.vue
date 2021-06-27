<template>
    <div class="user-detail">
        <table>
            <thead>
                <tr>
                    <th colspan="2">Data User</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name :</td>
                    <td>{{ name }}</td>
                </tr>
                <tr>
                    <td>Company :</td>
                    <td>{{ company.name }}</td>
                </tr>
                <tr>
                    <td>Email :</td>
                    <td>{{ email }}</td>
                </tr>
                <tr>
                    <td>Phone :</td>
                    <td>{{ phone }}</td>
                </tr>
                <tr>
                    <td>
                        Address :
                    </td>
                    <td>
                        {{ address.street }} {{ address.suite }},
                        {{ address.city }} -
                        {{ address.zipcode }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useRoute } from 'vue-router';

export default {
    async setup() {
        const data = reactive({
            name: '',
            email: '',
            phone: '',
            address: '',
            company: '',
        });

        const route = useRoute();
        const id = route.params.id;

        const result = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const { name, email, phone, address, company } = await result.json();
        data.name = name;
        data.email = email;
        data.phone = phone;
        data.address = address;
        data.company = company;

        return {
            ...toRefs(data),
        };
    },
};
</script>

<style scoped>
.user-detail {
    text-align: left;
    font-size: 2rem;
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
