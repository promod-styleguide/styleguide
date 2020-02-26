<template>
  <div class="icons other">
    <section>
      <h4 class="title">
        OTHER
      </h4>
      <div class="content">
        <div class="code">
          <span class="punctuation">&lt;</span><span class="element">svg </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"icon-svg"</span><span class="punctuation">&gt;</span><span class="punctuation">&lt;</span><span class="element">use </span><span class="attr-name">xlink:href</span><span class="punctuation">=</span><span class="attr-value">"#icon-promod"</span><span class="punctuation">&gt;&lt;/</span><span class="element">use</span><span class="punctuation">&gt;&lt;/</span><span class="element">svg</span><span class="punctuation">&gt;</span>
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
            <svg class="icon-svg" style="width: 75%"><use xlink:href="#icon-promod" /></svg>
            <span class="class">#icon-promod</span>
          </li>
          <li>
            <svg class="icon-svg" style="width: 75%"><use xlink:href="#icon-promod-rose" /></svg>
            <span class="class">#icon-promod-rose</span>
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
