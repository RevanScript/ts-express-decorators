---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation UnknowPropertyError class
---
# UnknowPropertyError <Badge text="Class" type="class"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { UnknowPropertyError }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common/converters/errors/UnknowPropertyError"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.30.1/src//common/converters/errors/UnknowPropertyError.ts#L0-L0">/common/converters/errors/UnknowPropertyError.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang "><span class="token keyword">class</span> UnknowPropertyError <span class="token keyword">extends</span> BadRequest <span class="token punctuation">{</span>
  <span class="token keyword">constructor</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span><span class="token punctuation">,</span> propertyName<span class="token punctuation">:</span> <span class="token keyword">string</span> | symbol<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">super</span><span class="token punctuation">(</span>UnknowPropertyError.<span class="token function">buildMessage</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> propertyName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">buildMessage</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span><span class="token punctuation">,</span> propertyName<span class="token punctuation">:</span> <span class="token keyword">string</span> | symbol<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    return `<a href="/api/common/jsonschema/decorators/Property.html"><span class="token">Property</span></a> $<span class="token punctuation">{</span><span class="token function">String</span><span class="token punctuation">(</span>propertyName<span class="token punctuation">)</span><span class="token punctuation">}</span> on <span class="token keyword">class</span> $<span class="token punctuation">{</span><span class="token function">nameOf</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">}</span> is not allowed.`<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>



<!-- Members -->




## Members


::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang "><span class="token keyword">static</span> <span class="token function">buildMessage</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span><span class="token punctuation">,</span> propertyName<span class="token punctuation">:</span> <span class="token keyword">string</span> | symbol<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 return `<a href="/api/common/jsonschema/decorators/Property.html"><span class="token">Property</span></a> $<span class="token punctuation">{</span><span class="token function">String</span><span class="token punctuation">(</span>propertyName<span class="token punctuation">)</span><span class="token punctuation">}</span> on <span class="token keyword">class</span> $<span class="token punctuation">{</span><span class="token function">nameOf</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">}</span> is not allowed.`<span class="token punctuation">;</span>
  <span class="token punctuation">}</span></code></pre>

</div>



:::