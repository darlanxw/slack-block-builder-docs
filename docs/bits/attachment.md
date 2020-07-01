# Attachment

?> **Note:** This document is a reference to the `Attachment` object in **Block Builder**. For information on the business logic for the **Attachment** in the context of the Slack Block Kit framework, visit [the Attachment docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;messaging&#x2F;attachments) on Slack's doc site.

### Creating an Instance 

An instance of `Attachment` is created through the `Bits.Attachment` method:

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.Attachment();
```


The `Attachment` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
Attachment(params?)
```

#### Params

`color` – *String*

#### Returns

A new `Attachment` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `Attachment` on which it is called.

```javascript
Attachment.blocks(Block1[, ...[, BlockN])
```

Appends Blocks to a Surface. Can be called multiple times.
```javascript
Attachment.color(string)
```

Sets the color of the border to the left of the message attachment.


### Other Methods

The `Attachment` object also has other methods available:

```javascript
Attachment.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

