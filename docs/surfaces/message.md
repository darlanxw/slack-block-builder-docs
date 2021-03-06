# Message

?> **Note:** This document is a reference to the `Message` object in **Block Builder**. For information on the business logic for the **Message** in the context of the Slack Block Kit framework, visit [the Message docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;messaging&#x2F;attachments) on Slack's doc site.

### Creating an Instance 

The method to create an instance of `Message` is a top-level import:

```javascript
import { Message } from 'slack-block-builder';

const myObj = Message();
```


The `Message` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
Message(params?)
```

#### Params

`channel` – *String*

`postAt` – *String*

`text` – *String*

`threadTs` – *String*

`ts` – *String*

#### Returns

A new `Message` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `Message` on which it is called.

```javascript
Message.asUser()
```

Sets this option to `true`, which means the message will be sent from your app as a user or bot user.
```javascript
Message.attachments([Attachment1[, ...[, AttachmentN]])
```

Appends Attachments to the Message. Can be called multiple times.
```javascript
Message.blocks([Block1[, ...[, BlockN]])
```

Appends Blocks to a Surface. Can be called multiple times.
```javascript
Message.channel(string)
```

Sets the channel to which the message will be sent.
```javascript
Message.deleteOriginal()
```

Sets this option to `true`, which means when sent, this message will delete the message that is the origin of the interaction payload. Used when working with response URLs.
```javascript
Message.ephemeral()
```

Sets the response type to be `ephemeral`, which makes the message only visible to the user to which it is sent. Used when sending a message to a channel or conversation with multiple users present.
```javascript
Message.inChannel()
```

Sets the response type to be `in_channel`, which makes the message only visible everyone in the channel or conversation to which it is sent.
```javascript
Message.postAt(string)
```

Sets a timestamp for a time in the future, at which the message will be sent. Used for scheduling messages.
```javascript
Message.replaceOriginal()
```

Sets this option to `true`, which means when sent, this message will replace the message that is the origin of the interaction payload. Used when working with response URLs.
```javascript
Message.text(string)
```

Sets the text to be displayed in the block
```javascript
Message.threadTs(string)
```

Sets the timestamp of the message to which the current message will be sent, as a message in its thread.
```javascript
Message.ts(string)
```

Sets the timestamp of a message to update.


### Other Methods

The `Message` object also has other methods available:

```javascript
Message.buildToJSON()
```

Builds the object and returns a JSON string compatible with the Slack API.
```javascript
Message.buildToObject()
```

Builds the object and returns an object compatible with the Slack API (after stringifying it).
```javascript
Message.getAttachments()
```

Builds the object and returns an array with the (built) Attachments.
```javascript
Message.getBlocks()
```

Builds the object and returns an array with the (built) Blocks.
```javascript
Message.printPreviewUrl()
```

Builds the object and prints a preview URL to Slack's Block Kit Builder website to the console.

