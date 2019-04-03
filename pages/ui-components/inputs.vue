<template>
  <div class="inputs">
    <section>
      <h4 class="title">
        INPUTS
      </h4>
      <ul>
        <li>
          <div class="flex">
            <span class="info">Text inputs</span>
            <div class="text-input-block">
              <label>Input label</label>
              <input type="text" placeholder="Placeholder">
            </div>
          </div>
          <div class="code">
            <span class="punctuation">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"text-input-block"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">label</span><span class="punctuation">&gt;</span><span class="value">Input label</span><span class="punctuation">&lt;/</span><span class="element">label</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"text" </span><span class="attr-name">placeholder</span><span class="punctuation">=</span><span class="attr-value">"Placeholder"</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span>
          </div>
        </li>
        <li>
          <div class="flex">
            <span class="info">Text inputs with icons</span>
            <div class="text-input-block">
              <label>Input label</label>
              <div class="input-icon">
                <input type="text" placeholder="Placeholder">
                <svg class="icon-svg"><use xlink:href="#icon-geo" /></svg>
              </div>
            </div>
          </div>
          <div class="code">
            <span class="punctuation">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"text-input-block"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">label</span><span class="punctuation">&gt;</span><span class="value">Input label</span><span class="punctuation">&lt;/</span><span class="element">label</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"input-icon"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab2">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"text" </span><span class="attr-name">placeholder</span><span class="punctuation">=</span><span class="attr-value">"Placeholder"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab2">&lt;</span><span class="element">svg </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"icon-svg"</span><span class="punctuation">&gt;</span><span class="punctuation">&lt;</span><span class="element">use </span><span class="attr-name">xlink:href</span><span class="punctuation">=</span><span class="attr-value">"#icon-geo"</span><span class="punctuation">&gt;&lt;/</span><span class="element">use</span><span class="punctuation">&gt;&lt;/</span><span class="element">svg</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span>
          </div>
        </li>
        <li>
          <div class="flex">
            <span class="info">Text inputs with buttons</span>
            <div class="text-input-block">
              <label>Input label</label>
              <div class="input-button">
                <input type="text" placeholder="Placeholder">
                <button type="button">
                  OK
                </button>
              </div>
            </div>
          </div>
          <div class="code">
            <span class="punctuation">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"text-input-block"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">label</span><span class="punctuation">&gt;</span><span class="value">Input label</span><span class="punctuation">&lt;/</span><span class="element">label</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"input-button"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab2">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"text" </span><span class="attr-name">placeholder</span><span class="punctuation">=</span><span class="attr-value">"Placeholder"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab2">&lt;</span><span class="element">button </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"button"</span><span class="punctuation">&gt;</span><span class="value">OK</span><span class="punctuation">&lt;/</span><span class="element">button</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span>
          </div>
        </li>
        <li>
          <div class="flex">
            <span class="info">Text inputs Info</span>
            <div class="text-input-block">
              <label>Input label</label>
              <input type="text" placeholder="Placeholder">
              <div class="message">
                Champ obligatoire
              </div>
            </div>
          </div>
          <div class="code">
            <span class="punctuation">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"text-input-block"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">label</span><span class="punctuation">&gt;</span><span class="value">Input label</span><span class="punctuation">&lt;/</span><span class="element">label</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"text" </span><span class="attr-name">placeholder</span><span class="punctuation">=</span><span class="attr-value">"Placeholder"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"message"</span><span class="punctuation">&gt;</span><span class="value">Champ obligatoire</span><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span>
          </div>
        </li>
        <li>
          <div class="flex">
            <span class="info">Text inputs error</span>
            <div class="text-input-block">
              <div class="input-icon">
                <input type="text" class="error" placeholder="Placeholder">
                <svg class="icon-svg"><use xlink:href="#icon-geo" /></svg>
              </div>
              <div class="message error">
                Champ obligatoire
              </div>
            </div>
          </div>
          <div class="code">
            <span class="punctuation">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"text-input-block"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"input-icon"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab2">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"text" </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"error" </span><span class="attr-name">placeholder</span><span class="punctuation">=</span><span class="attr-value">"Placeholder"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab2">&lt;</span><span class="element">svg </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"icon-svg"</span><span class="punctuation">&gt;</span><span class="punctuation">&lt;</span><span class="element">use </span><span class="attr-name">xlink:href</span><span class="punctuation">=</span><span class="attr-value">"#icon-geo"</span><span class="punctuation">&gt;&lt;/</span><span class="element">use</span><span class="punctuation">&gt;&lt;/</span><span class="element">svg</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"message error"</span><span class="punctuation">&gt;</span><span class="value">Champ obligatoire</span><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span>
          </div>
        </li>
        <li>
          <div class="flex">
            <span class="info">Text inputs success</span>
            <div class="text-input-block">
              <div class="input-button">
                <input type="text" class="success" placeholder="Placeholder">
                <button type="button">
                  OK
                </button>
              </div>
            </div>
          </div>
          <div class="code">
            <span class="punctuation">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"text-input-block"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"input-button"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab2">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"text" </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"success" </span><span class="attr-name">placeholder</span><span class="punctuation">=</span><span class="attr-value">"Placeholder"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab2">&lt;</span><span class="element">button </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"button"</span><span class="punctuation">&gt;</span><span class="value">OK</span><span class="punctuation">&lt;/</span><span class="element">button</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span>
          </div>
        </li>
        <li>
          <div class="flex">
            <span class="info">Text inputs disabled</span>
            <div class="text-input-block">
              <div class="input-button">
                <input type="text" placeholder="Placeholder" disabled>
                <button type="button" disabled>
                  OK
                </button>
              </div>
            </div>
          </div>
          <div class="code">
            <span class="punctuation">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"text-input-block"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"input-button"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab2">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"text" </span><span class="attr-name">placeholder</span><span class="punctuation">=</span><span class="attr-value">"Placeholder" </span><span class="attr-name">disabled</span><span class="punctuation">&gt;</span></br><span class="punctuation tab2">&lt;</span><span class="element">button </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"button" </span><span class="attr-name">disabled</span><span class="punctuation">&gt;</span><span class="value">OK</span><span class="punctuation">&lt;/</span><span class="element">button</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'ui-components'
}
</script>
