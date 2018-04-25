<template>
    <div id="dashboard">
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
    </div>
</template>

<script>
    export default {
        name: 'dashboard',
        data() {
            return {
                points: ''
            }
        },
        mounted() {
            // this.drawSVG()
        },
        methods: {
            drawSVG() {
                let dashboard = document.getElementById('dashboard');
                let SVG_NS = 'http://www.w3.org/2000/svg';
                let svg = document.createElementNS(SVG_NS, 'svg');
                svg.setAttribute('width', '100%');
                svg.setAttribute('height', '100%');
                dashboard.appendChild(svg);
                return svg;
            }
        }
    }
</script>

<style scoped>

</style>