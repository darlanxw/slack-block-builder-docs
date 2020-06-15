# Message

Created by using the `Message` object.

?> **Note:** This document is a reference to the `Message` object in **Block Builder**. For information on the business logic for the **Message** in the context of the Slack Block Kit framework, visit [the Message docs](https:&#x2F;&#x2F;api.slack.com&#x2F;messaging&#x2F;composing) on Slack's doc site.

### Importing

The `Message` object is a top-level import:

```javascript
import { Message } from 'slack-block-builder';
```


### Constructor

The `Message` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
Message(params?)
```

#### Params

`channel` – *String*

`postAt` – *Timestamp*

`text` – *String*

`threadTs` – *Timestamp*

#### Returns

A new `Message` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `Message` on which the method is called.

```javascript
Message.asUser()
```

Sets this option to &#x60;true&#x60;, which means the message will be sent from your app as a user or bot user.
```javascript
Message.blocks(Block1[, ...[, BlockN])
```

Appends Blocks to a Surface. Can be called multiple times.
```javascript
Message.channel(string)
```

Sets the channel to which the message will be sent.
```javascript
Message.deleteOriginal()
```

Sets this option to &#x60;true&#x60;, which means when sent, this message will delete the message that is the origin of the interaction payload. Used when working with response URLs.
```javascript
Message.ephemeral()
```

Sets the response type to be &#x60;ephemeral&#x60;, which makes the message only visible to the user to which it is sent. Used when sending a message to a channel or conversation with multiple users present.
```javascript
Message.inChannel()
```

Sets the response type to be &#x60;in_channel&#x60;, which makes the message only visible everyone in the channel or conversation to which it is sent.
```javascript
Message.postAt(timestamp)
```

Sets a timestamp for a time in the future, at which the message will be sent. Used for scheduling messages.
```javascript
Message.replaceOriginal()
```

Sets this option to &#x60;true&#x60;, which means when sent, this message will replace the message that is the origin of the interaction payload. Used when working with response URLs.
```javascript
Message.threadTs(timestamp)
```

Sets the timestamp of the message to which the current message will be sent, as a message in its thread.


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
Message.getBlocks()
```

Builds the object and returns an array with the (built) Blocks.
```javascript
Message.printPreviewUrl()
```

Builds the object and prints a preview URL to Slack&#39;s Block Kit Builder website to the console.

