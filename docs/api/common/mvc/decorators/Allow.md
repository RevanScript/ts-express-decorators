---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation Allow decorator
---
# Allow <Badge text="Decorator" type="decorator"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { Allow }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v5.0.2/packages/common/src/mvc/decorators/allow.ts#L0-L0">/packages/common/src/mvc/decorators/allow.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang ">function <span class="token function">Allow</span><span class="token punctuation">(</span>...allowedRequiredValues<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">;</span></code></pre>



<!-- Description -->
## Description

::: v-pre

Add allowed values when the property or parameters is required.

#### Example on parameter:

```typescript
@Post("/")
async method(@Required() @Allow("") @BodyParams("field") field: string) {}
```
> Required will throw a BadRequest when the given value is `null` or `undefined` but not for an empty string.

#### Example on model:

```typescript
class Model {
  @JsonProperty()
  @Required()
  @Allow("")
  field: string;
}
```


:::