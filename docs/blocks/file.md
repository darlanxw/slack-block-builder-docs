# File

?> **Note:** This document is a reference to the `File` object in **Block Builder**. For information on the business logic for the **File** in the context of the Slack Block Kit framework, visit [the File docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;blocks#file) on Slack's doc site.

### Creating an Instance 

An instance of `File` is created through the `Blocks.File` method:

```javascript
import { Blocks } from 'slack-block-builder';

const myObj = Blocks.File();
```


The `File` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
File(params?)
```

#### Params

`blockId` – *String*

`externalId` – *String*

#### Returns

A new `File` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `File` on which it is called.

```javascript
File.blockId(string)
```

Sets an ID for the Block to help you identify it in interaction and submission payloads.
```javascript
File.externalId(string)
```

Sets the Slack-provided ID for Slack to identify the object.


### Other Methods

The `File` object also has other methods available:

```javascript
File.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

