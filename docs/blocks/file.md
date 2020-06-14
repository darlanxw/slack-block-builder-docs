# File

Created by using of the `File` object.

?> **Note:** This document is a reference to the `File` object in **Block Builder**. For information on the business logic for the **File** in the context of the Slack Block Kit framework, visit [the File docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;blocks#file) on Slack's doc site.

### Importing

The `File` object is accessed through the `Blocks` object:

```javascript
import { Blocks } from 'slack-block-builder';

// An instance of File can then be created by calling Blocks.File();
```


### Constructor

The `File` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
File(params?)
```

#### Params

`blockId` – *String*

`externalId` – *String*

#### Returns

A new `File` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `File` on which the method is called.

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

