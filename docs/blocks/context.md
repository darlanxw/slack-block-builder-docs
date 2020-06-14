# Context

Created by using of the `Context` object.

?> **Note:** This document is a reference to the `Context` object in **Block Builder**. For information on the business logic for the **Context** in the context of the Slack Block Kit framework, visit [the Context docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;blocks#context) on Slack's doc site.

### Importing

The `Context` object is accessed through the `Blocks` object:

```javascript
import { Blocks } from 'slack-block-builder';

// An instance of Context can then be created by calling Blocks.Context();
```


### Constructor

The `Context` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
Context(params?)
```

#### Params

`blockId` – *String*

#### Returns

A new `Context` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `Context` on which the method is called.

```javascript
Context.blockId(string)
```

Sets an ID for the Block to help you identify it in interaction and submission payloads.
```javascript
Context.elements(Element1[, ...[, ElementN])
```

Appends elements. Can be called multiple times.


### Other Methods

The `Context` object also has other methods available:

```javascript
Context.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

