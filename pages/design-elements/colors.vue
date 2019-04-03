<template>
  <div class="colors">
    <section>
      <h4 class="title">
        COLORS
      </h4>
      <div class="type">
        <span class="class" @click="changeType('hex')">Hex</span>
        <span class="class" @click="changeType('rgb')">RGB</span>
        <span class="class" @click="changeType('hsl')">HSL</span>
      </div>
      <ul class="simple">
        <li>
          <div class="pantone black">
            <span>{{ colors['main-black'][colorsType] }}</span>
          </div>
          <span class="info">$main-black</span>
        </li>
        <li>
          <div class="pantone pink">
            <span>{{ colors['pink'][colorsType] }}</span>
          </div>
          <span class="info">$pink</span>
        </li>
        <li>
          <div class="pantone secondary-grey">
            <span>{{ colors['secondary-grey'][colorsType] }}</span>
          </div>
          <span class="info">$secondary-grey</span>
        </li>
        <li>
          <div class="pantone light-grey">
            <span>{{ colors['light-grey'][colorsType] }}</span>
          </div>
          <span class="info">$light-grey</span>
        </li>
        <li>
          <div class="pantone very-light-grey">
            <span>{{ colors['very-light-grey'][colorsType] }}</span>
          </div>
          <span class="info">$very-light-grey</span>
        </li>
        <li>
          <div class="pantone white">
            <span>{{ colors['white'][colorsType] }}</span>
          </div>
          <span class="info">$white</span>
        </li>
      </ul>
      <ul class="double">
        <li>
          <div class="pantone green">
            <div class="color1">
              <span>{{ colors['success-green'][colorsType] }}</span>
            </div>
            <div class="color2">
              <span>{{ colors['success-light-green'][colorsType] }}</span>
            </div>
          </div>
          <span class="info">$sucess-green</span>
          <span class="info">$sucess-light-green</span>
        </li>
        <li>
          <div class="pantone yellow">
            <div class="color1">
              <span>{{ colors['warning-yellow'][colorsType] }}</span>
            </div>
            <div class="color2">
              <span>{{ colors['warning-light-yellow'][colorsType] }}</span>
            </div>
          </div>
          <span class="info">$warning-yellow</span>
          <span class="info">$warning-light-yellow</span>
        </li>
        <li>
          <div class="pantone red">
            <div class="color1">
              <span>{{ colors['promo-red'][colorsType] }}</span>
            </div>
            <div class="color2">
              <span>{{ colors['promo-light-red'][colorsType] }}</span>
            </div>
          </div>
          <span class="info">$promo-red</span>
          <span class="info">$promo-light-red</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'design-elements',
  data() {
    return {
      colorsType: 'hex',
      colors: {
        'main-black': {
          hex: '#141414',
          rgb: 'rgb(20,20,20)',
          hsl: 'hsl(0,0,7.8)'
        },
        pink: {
          hex: '#F7968E',
          rgb: 'rgb(247,150,142)',
          hsl: 'hsl(5,86.8,76.3)'
        },
        'secondary-grey': {
          hex: '#A7A7A7',
          rgb: 'rgb(167,167,167)',
          hsl: 'hsl(0,0,65.5)'
        },
        'light-grey': {
          hex: '#EFEFEF',
          rgb: 'rgb(239,239,239)',
          hsl: 'hsl(0,0,93.7)'
        },
        'very-light-grey': {
          hex: '#F8F8F8',
          rgb: 'rgb(248,248,248)',
          hsl: 'hsl(0,0,97.3)'
        },
        white: {
          hex: '#FFFFFF',
          rgb: 'rgb(255,255,255)',
          hsl: 'hsl(0,0,100)'
        },
        'success-green': {
          hex: '#63AF78',
          rgb: 'rgb(99,175,120)',
          hsl: 'hsl(137,32.2,53.7)'
        },
        'success-light-green': {
          hex: '#E5F8E5',
          rgb: 'rgb(229,248,229)',
          hsl: 'hsl(120,57.6,93.5)'
        },
        'warning-yellow': {
          hex: '#F2BC66',
          rgb: 'rgb(242,188,102)',
          hsl: 'hsl(37,84.3,67.5)'
        },
        'warning-light-yellow': {
          hex: '#FAF6E0',
          rgb: 'rgb(250,246,224)',
          hsl: 'hsl(51,72.2,92.9)'
        },
        'promo-red': {
          hex: '#C74141',
          rgb: 'rgb(199,65,65)',
          hsl: 'hsl(0,54.5,51.8)'
        },
        'promo-light-red': {
          hex: '#FADFDF',
          rgb: 'rgb(250,223,223)',
          hsl: 'hsl(0,73,92.7)'
        }
      }
    }
  },
  methods: {
    changeType(type) {
      this.colorsType = type
    }
  }
}
</script>
