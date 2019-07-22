<template>
  <div class="icons rating">
    <section>
      <h4 class="title">
        RATING
      </h4>
      <div class="content">
        <div class="code">
          <span class="punctuation">&lt;</span><span class="element">svg </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"icon-svg"</span><span class="punctuation">&gt;</span><span class="punctuation">&lt;</span><span class="element">use </span><span class="attr-name">xlink:href</span><span class="punctuation">=</span><span class="attr-value">"#icon-stars-empty"</span><span class="punctuation">&gt;&lt;/</span><span class="element">use</span><span class="punctuation">&gt;&lt;/</span><span class="element">svg</span><span class="punctuation">&gt;</span>
        </div>
        <div class="download">
          <svg class="icon-svg"><use xlink:href="#icon-arrow" /></svg>
          <a download="sprite.svg" href="/styleguide/img/icons/sprite.svg">Download sprite.svg</a>
        </div>
        <div class="download">
          <svg class="icon-svg"><use xlink:href="#icon-arrow" /></svg>
          <a download="icons.zip" href="/styleguide/img/icons/sources/icons.zip">Download icons.zip</a>
        </div>
        <ul>
          <li>
            <svg class="icon-svg"><use xlink:href="#icon-stars-empty" /></svg>
            <span class="class">#icon-stars-empty</span>
          </li>
          <li>
            <svg class="icon-svg"><use xlink:href="#icon-stars-full" /></svg>
            <span class="class">#icon-stars-full</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'design-elements'
}
</script>
