# Section

Created by using of the `Section` object.

?> **Note:** This document is a reference to the `Section` object in **Block Builder**. For information on the business logic for the **Section** in the context of the Slack Block Kit framework, visit [the Section docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;blocks#section) on Slack's doc site.

### Importing

The `Section` object is accessed through the `Blocks` object:

```javascript
import { Blocks } from 'slack-block-builder';

// An instance of Section can then be created by calling Blocks.Section();
```


### Constructor

The `Section` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
Section(params?)
```

#### Params

`blockId` – *String*

`text` – *String*

#### Returns

A new `Section` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `Section` on which the method is called.

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

