<template>
  <div class="colors">
    <section>
      <h4 class="title">
        COLORS
      </h4>
      <ul class="simple">
        <li>
          <div class="pantone black">
            <span>#141414</span>
          </div>
          <span class="info">$main-black</span>
        </li>
        <li>
          <div class="pantone pink">
            <span>#F7968E</span>
          </div>
          <span class="info">$pink</span>
        </li>
        <li>
          <div class="pantone secondary-grey">
            <span>#A7A7A7</span>
          </div>
          <span class="info">$secondary-grey</span>
        </li>
        <li>
          <div class="pantone light-grey">
            <span>#EFEFEF</span>
          </div>
          <span class="info">$light-grey</span>
        </li>
        <li>
          <div class="pantone very-light-grey">
            <span>#F8F8F8</span>
          </div>
          <span class="info">$very-light-grey</span>
        </li>
        <li>
          <div class="pantone white">
            <span>#FFFFFF</span>
          </div>
          <span class="info">$white</span>
        </li>
      </ul>
      <ul class="double">
        <li>
          <div class="pantone green">
            <div class="color1">
              <span>#63AF78</span>
            </div>
            <div class="color2">
              <span>#E5F8E5</span>
            </div>
          </div>
          <span class="info">$sucess-green</span>
          <span class="info">$sucess-light-green</span>
        </li>
        <li>
          <div class="pantone yellow">
            <div class="color1">
              <span>#F2BC66</span>
            </div>
            <div class="color2">
              <span>#FAF6E0</span>
            </div>
          </div>
          <span class="info">$warning-yellow</span>
          <span class="info">$warning-light-yellow</span>
        </li>
        <li>
          <div class="pantone red">
            <div class="color1">
              <span>#C74141</span>
            </div>
            <div class="color2">
              <span>#FADFDF</span>
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
  transition: {
    name: 'test',
    mode: 'out-in'
  }
}
</script>
