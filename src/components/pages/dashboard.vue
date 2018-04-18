<template>
    <div id="dashboard" style="background-color:#000">
<svg width="100" height="86.6" xmlns="http://www.w3.org/2000/svg">
 <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
 <g stroke="null">
  <title>background</title>
  <rect stroke="null" fill="none" id="canvas_background" height="16.43333" width="18.66667" y="-1" x="-1"/>
  <g stroke="null" display="none" id="canvasGrid">
   <rect stroke="null" fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%" id="svg_1"/>
  </g>
 </g>
 <g stroke="null">
  <title>Layer 1</title>
  <polygon stroke="#409EFF" id="svg_2" points="27.500001907348633,4.8649948090314865 72.5,4.8649948090314865 95,42.43239288032055 72.5,81.73500518500805 27.500001907348633,81.73500518500805 5,42.43239288032055 " stroke-width="10" fill="none"/>
  <circle cx="62" cy="26" r="6" stroke="#ff4500" stroke-width="4" fill="none" id="svg_3"/>
  <circle cx="33" cy="62" r="6" stroke="#ff4500" stroke-width="4" fill="#ff4500" id="svg_4"/>
  <circle cx="26" cy="43.3" r="5" stroke="#ff4500" fill="#ff4500" id="svg_5"/>
  <circle cx="74" cy="43.3" r="5" stroke="#ff4500" fill="#ff4500" id="svg_6"/>
  <line fill="none" stroke="#ff4500" stroke-width="3" stroke-opacity="null" x1="33" y1="62" x2="26" y2="43.3" id="svg_7" stroke-linejoin="null" stroke-linecap="null"/>
  <line fill="none" stroke="#ff4500" stroke-width="3" stroke-opacity="null" x1="64.75" y1="30" x2="74" y2="43.3" id="svg_10" stroke-linejoin="null" stroke-linecap="null"/>
  <line fill="none" stroke="#ff4500" stroke-width="5" stroke-opacity="null" y2="62" x2="33" y1="29.5" x1="59.5" id="svg_9" stroke-linejoin="null" stroke-linecap="null"/>
 </g>
</svg>
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