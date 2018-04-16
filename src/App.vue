<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
* {
    padding: 0;
    border: 0;
    margin: 0;
	word-break: normal;
}
body, html{
    width: 100%;
}
a {
    text-decoration: none;
}
#app {
    width: 100%;
}
::-webkit-scrollbar {
        width: 5px;
        height: 1px;
}
::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background: #DCDFE6;
}
::-webkit-scrollbar-track {
        border-radius: 5px;
        background: #FFFFFF;
}
</style>
