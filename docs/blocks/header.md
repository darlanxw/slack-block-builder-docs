# Header

?> **Note:** This document is a reference to the `Header` object in **Block Builder**. For information on the business logic for the **Header** in the context of the Slack Block Kit framework, visit [the Header docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;blocks#header) on Slack's doc site.

### Creating an Instance 

An instance of `Header` is created through the `Blocks.Header` method:

```javascript
import { Blocks } from 'slack-block-builder';

const myObj = Blocks.Header();
```


The `Header` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
Header(params?)
```

#### Params

`blockId` – *String*

`text` – *String*

#### Returns

A new `Header` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `Header` on which it is called.

```javascript
Header.blockId(string)
```

Sets an ID for the Block to help you identify it in interaction and submission payloads.
```javascript
Header.text(string)
```

Sets the text to be displayed in the block


### Other Methods

The `Header` object also has other methods available:

```javascript
Header.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

