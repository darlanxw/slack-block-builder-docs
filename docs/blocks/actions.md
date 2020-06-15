# Actions

Created by using the `Actions` object.

?> **Note:** This document is a reference to the `Actions` object in **Block Builder**. For information on the business logic for the **Actions** in the context of the Slack Block Kit framework, visit [the Actions docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;blocks#actions) on Slack's doc site.

### Importing

The `Actions` object is accessed through the `Blocks` object:

```javascript
import { Blocks } from 'slack-block-builder';

// An instance of Actions can then be created by calling Blocks.Actions();
```


### Constructor

The `Actions` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
Actions(params?)
```

#### Params

`blockId` – *String*

#### Returns

A new `Actions` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `Actions` on which the method is called.

```javascript
Actions.blockId(string)
```

Sets an ID for the Block to help you identify it in interaction and submission payloads.
```javascript
Actions.elements(Element1[, ...[, ElementN])
```

Appends elements. Can be called multiple times.


### Other Methods

The `Actions` object also has other methods available:

```javascript
Actions.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

