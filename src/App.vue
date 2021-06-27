<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/users">Data Users</router-link>
    </div>
    <router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #2c3e50;
    padding: 20px 60px;
    text-align: center;
}

#nav {
    padding: 30px;
}

a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
}

ul li {
    list-style: none;
}

a.router-link-exact-active {
    color: #42b983;
}
</style>
