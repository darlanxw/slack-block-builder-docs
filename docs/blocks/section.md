# Section

?> **Note:** This document is a reference to the `Section` object in **Block Builder**. For information on the business logic for the **Section** in the context of the Slack Block Kit framework, visit [the Section docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;blocks#section) on Slack's doc site.

### Creating an Instance 

An instance of `Section` is created through the `Blocks.Section` method:

```javascript
import { Blocks } from 'slack-block-builder';

const myObj = Blocks.Section();
```


The `Section` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
Section(params?)
```

#### Params

`blockId` – *String*

`text` – *String*

#### Returns

A new `Section` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `Section` on which it is called.

```javascript
Section.accessory(Element)
```

Sets an Element to be attached to the section.
```javascript
Section.blockId(string)
```

Sets an ID for the Block to help you identify it in interaction and submission payloads.
```javascript
Section.fields(string1[, ...[, stringN])
```

Appends text fields that are displayed side-by-side. Can be called multiple times.


### Other Methods

The `Section` object also has other methods available:

```javascript
Section.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

