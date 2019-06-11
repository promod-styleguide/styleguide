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
        <li>
          <div class="flex">
            <span class="info">Checkbox Field</span>
            <div class="checkbox">
              <label class="control control-checkbox">
                <input type="checkbox" name="checkbox">
                <div class="control-indicator" />
                <span>Active</span>
              </label>
              <label class="control control-checkbox">
                <input type="checkbox" name="checkbox" checked="checked">
                <div class="control-indicator" />
                <span>Selected</span>
              </label>
              <label class="control control-checkbox">
                <input type="checkbox" name="checkbox" disabled>
                <div class="control-indicator" />
                <span>Inactive</span>
              </label>
              <label class="control control-checkbox">
                <input type="checkbox" name="checkbox" checked="checked" disabled>
                <div class="control-indicator" />
                <span>Inactive selected</span>
              </label>
            </div>
          </div>
          <div class="code">
            <span class="punctuation">&lt;</span><span class="element">label </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"control control-checkbox"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"checkbox" </span><span class="attr-name">name</span><span class="punctuation">=</span><span class="attr-value">"checkbox"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"control-indicator"</span><span class="punctuation">&gt;</span><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">span</span><span class="punctuation">&gt;</span><span class="value">Active</span><span class="punctuation">&lt;/</span><span class="element">span</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">label</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;</span><span class="element">label </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"control control-checkbox"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"checkbox" </span><span class="attr-name">name</span><span class="punctuation">=</span><span class="attr-value">"checkbox" <span class="attr-name">checked</span><span class="punctuation">=</span><span class="attr-value">"checked"</span></span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"control-indicator"</span><span class="punctuation">&gt;</span><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">span</span><span class="punctuation">&gt;</span><span class="value">Selected</span><span class="punctuation">&lt;/</span><span class="element">span</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">label</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;</span><span class="element">label </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"control control-checkbox"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"checkbox" </span><span class="attr-name">name</span><span class="punctuation">=</span><span class="attr-value">"checkbox" </span><span class="attr-name">disabled</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"control-indicator"</span><span class="punctuation">&gt;</span><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">span</span><span class="punctuation">&gt;</span><span class="value">Inactive</span><span class="punctuation">&lt;/</span><span class="element">span</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">label</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;</span><span class="element">label </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"control control-checkbox"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"checkbox" </span><span class="attr-name">name</span><span class="punctuation">=</span><span class="attr-value">"checkbox" </span><span class="attr-name">checked</span><span class="punctuation">=</span><span class="attr-value">"checked" </span><span class="attr-name">disabled</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"control-indicator"</span><span class="punctuation">&gt;</span><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">span</span><span class="punctuation">&gt;</span><span class="value">Inactive selected</span><span class="punctuation">&lt;/</span><span class="element">span</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">label</span><span class="punctuation">&gt;</span>
          </div>
        </li>
        <li>
          <div class="flex">
            <span class="info">Radio Buttons Field</span>
            <div class="radio">
              <label class="control control-radio">
                <input type="radio" name="radio">
                <div class="control-indicator" />
                <span>Active</span>
              </label>
              <label class="control control-radio">
                <input type="radio" name="radio" checked="checked">
                <div class="control-indicator" />
                <span>Selected</span>
              </label>
              <label class="control control-radio">
                <input type="radio" name="radio" disabled>
                <div class="control-indicator" />
                <span>Inactive</span>
              </label>
              <label class="control control-radio">
                <input type="radio" name="radio2" checked="checked" disabled>
                <div class="control-indicator" />
                <span>Inactive selected</span>
              </label>
            </div>
          </div>
          <div class="code">
            <span class="punctuation">&lt;</span><span class="element">label </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"control control-radio"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"radio" </span><span class="attr-name">name</span><span class="punctuation">=</span><span class="attr-value">"radio"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"control-indicator"</span><span class="punctuation">&gt;</span><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">span</span><span class="punctuation">&gt;</span><span class="value">Active</span><span class="punctuation">&lt;/</span><span class="element">span</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">label</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;</span><span class="element">label </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"control control-radio"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"radio" </span><span class="attr-name">name</span><span class="punctuation">=</span><span class="attr-value">"radio" <span class="attr-name">checked</span><span class="punctuation">=</span><span class="attr-value">"checked"</span></span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"control-indicator"</span><span class="punctuation">&gt;</span><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">span</span><span class="punctuation">&gt;</span><span class="value">Selected</span><span class="punctuation">&lt;/</span><span class="element">span</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">label</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;</span><span class="element">label </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"control control-radio"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"radio" </span><span class="attr-name">name</span><span class="punctuation">=</span><span class="attr-value">"radio" </span><span class="attr-name">disabled</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"control-indicator"</span><span class="punctuation">&gt;</span><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">span</span><span class="punctuation">&gt;</span><span class="value">Inactive</span><span class="punctuation">&lt;/</span><span class="element">span</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">label</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;</span><span class="element">label </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"control control-radio"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"radio" </span><span class="attr-name">name</span><span class="punctuation">=</span><span class="attr-value">"radio2" </span><span class="attr-name">checked</span><span class="punctuation">=</span><span class="attr-value">"checked" </span><span class="attr-name">disabled</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"control-indicator"</span><span class="punctuation">&gt;</span><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">span</span><span class="punctuation">&gt;</span><span class="value">Inactive selected</span><span class="punctuation">&lt;/</span><span class="element">span</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">label</span><span class="punctuation">&gt;</span>
          </div>
        </li>
        <li>
          <div class="flex">
            <span class="info">Toggle buttons</span>
            <div class="toggle-container">
              <div class="toggle">
                <input id="toggle1" type="checkbox" class="toggle">
                <label for="toggle1" />
                <span>Active</span>
              </div> 
              <div class="toggle">
                <input id="toggle2" type="checkbox" class="toggle" checked="checked">
                <label for="toggle2" />
                <span>Selected</span>
              </div>
              <div class="toggle">
                <input id="toggle3" type="checkbox" class="toggle" disabled>
                <label for="toggle3" />
                <span>Inactive</span>
              </div>
              <div class="toggle">
                <input id="toggle4" type="checkbox" class="toggle" checked="checked" disabled>
                <label for="toggle4" />
                <span>Inactive selected</span>
              </div>
            </div>
          </div>
          <div class="code">
            <span class="punctuation">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"toggle"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"checkbox" </span><span class="attr-name">id</span><span class="punctuation">=</span><span class="attr-value">"toggle1" </span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">label </span><span class="attr-name">for</span><span class="punctuation">=</span><span class="attr-value">"toggle1"</span><span class="punctuation">&gt;</span><span class="punctuation">&lt;/</span><span class="element">label</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">span</span><span class="punctuation">&gt;</span><span class="value">Active</span><span class="punctuation">&lt;/</span><span class="element">span</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"toggle"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"checkbox" </span><span class="attr-name">id</span><span class="punctuation">=</span><span class="attr-value">"toggle2" </span><span class="attr-name">checked</span><span class="punctuation">=</span><span class="attr-value">"checked"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">label </span><span class="attr-name">for</span><span class="punctuation">=</span><span class="attr-value">"toggle2"</span><span class="punctuation">&gt;</span><span class="punctuation">&lt;/</span><span class="element">label</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">span</span><span class="punctuation">&gt;</span><span class="value">Selected</span><span class="punctuation">&lt;/</span><span class="element">span</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"toggle"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"checkbox" </span><span class="attr-name">id</span><span class="punctuation">=</span><span class="attr-value">"toggle3" </span><span class="attr-name">disabled</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">label </span><span class="attr-name">for</span><span class="punctuation">=</span><span class="attr-value">"toggle3"</span><span class="punctuation">&gt;</span><span class="punctuation">&lt;/</span><span class="element">label</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">span</span><span class="punctuation">&gt;</span><span class="value">Inactive</span><span class="punctuation">&lt;/</span><span class="element">span</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;</span><span class="element">div </span><span class="attr-name">class</span><span class="punctuation">=</span><span class="attr-value">"toggle"</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">input </span><span class="attr-name">type</span><span class="punctuation">=</span><span class="attr-value">"checkbox" </span><span class="attr-name">id</span><span class="punctuation">=</span><span class="attr-value">"toggle4" </span><span class="attr-name">checked</span><span class="punctuation">=</span><span class="attr-value">"checked" </span><span class="attr-name">disabled</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">label </span><span class="attr-name">for</span><span class="punctuation">=</span><span class="attr-value">"toggle4"</span><span class="punctuation">&gt;</span><span class="punctuation">&lt;/</span><span class="element">label</span><span class="punctuation">&gt;</span></br><span class="punctuation tab">&lt;</span><span class="element">span</span><span class="punctuation">&gt;</span><span class="value">Inactive selected</span><span class="punctuation">&lt;/</span><span class="element">span</span><span class="punctuation">&gt;</span></br><span class="punctuation">&lt;/</span><span class="element">div</span><span class="punctuation">&gt;</span>
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
