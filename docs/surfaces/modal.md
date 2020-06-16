# Modal

?> **Note:** This document is a reference to the `Modal` object in **Block Builder**. For information on the business logic for the **Modal** in the context of the Slack Block Kit framework, visit [the Modal docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;surfaces&#x2F;views) on Slack's doc site.

### Creating an Instance 

The method to create an instance of `Modal` is a top-level import:

```javascript
import { Modal } from 'slack-block-builder';

const myObj = Modal();
```


The `Modal` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
Modal(params?)
```

#### Params

`callbackId` – *String*

`close` – *String*

`externalId` – *String*

`privateMetaData` – *String*

`submit` – *String*

`title` – *String*

#### Returns

A new `Modal` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `Modal` on which it is called.

```javascript
Modal.blocks(Block1[, ...[, BlockN])
```

Appends Blocks to a Surface. Can be called multiple times.
```javascript
Modal.callbackId(string)
```

Sets a string to be returned back to your application with interaction and submission payloads. Typically used to persist data between views or provide context for an interaction. Is considered legacy, according to Slack&#39;s documentation. It is recommended to use &#x60;privateMetaData()&#x60; instead.
```javascript
Modal.clearOnClose()
```

Sets this option to `true`, meaning all open modals (for example, modals lower in the stack) will be cleared up closing it.
```javascript
Modal.close(string)
```

Sets the text of the close button in the modal.
```javascript
Modal.externalId(string)
```

Sets the Slack-provided ID for Slack to identify the object.
```javascript
Modal.notifyOnClose()
```

Sets this option to `true`, meaning your application will receive an interaction payload when the modal is closed.
```javascript
Modal.privateMetaData(string)
```

Sets a string to be returned back to your application with interaction and submission payloads. Typically used to persist data between views or provide context for an interaction.
```javascript
Modal.submit(string)
```

Sets the text of the submit button in the modal.
```javascript
Modal.title(string)
```

Sets the title displayed to the user in the dialog.


### Other Methods

The `Modal` object also has other methods available:

```javascript
Modal.buildToJSON()
```

Builds the object and returns a JSON string compatible with the Slack API.
```javascript
Modal.buildToObject()
```

Builds the object and returns an object compatible with the Slack API (after stringifying it).
```javascript
Modal.printPreviewUrl()
```

Builds the object and prints a preview URL to Slack's Block Kit Builder website to the console.

