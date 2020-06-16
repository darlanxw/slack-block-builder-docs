# Channel Select

?> **Note:** This document is a reference to the `ChannelSelect` object in **Block Builder**. For information on the business logic for the **Channel Select** in the context of the Slack Block Kit framework, visit [the Channel Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#channel_select) on Slack's doc site.

### Creating an Instance 

An instance of `ChannelSelect` is created through the `Elements.ChannelSelect` method:

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.ChannelSelect();
```


The `ChannelSelect` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
ChannelSelect(params?)
```

#### Params

`actionId` – *String*

`initialChannel` – *String*

`placeholder` – *String*

#### Returns

A new `ChannelSelect` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `ChannelSelect` on which it is called.

```javascript
ChannelSelect.actionId(string)
```

Sets an ID for the Element to help you identify it and capture set values in interaction and submission payloads.
```javascript
ChannelSelect.confirm(ConfirmationDialog)
```

Sets a confirmation dialog to be shown upon interaction.
```javascript
ChannelSelect.initialChannel(string)
```

Sets the channel to be selected by default.
```javascript
ChannelSelect.placeholder(string)
```

Sets a placeholder to be displayed for the form input element.
```javascript
ChannelSelect.responseUrlEnabled()
```

Sets this option to `true`. By doing so, a response URL will be supplied with payloads to your application upon interaction.


### Other Methods

The `ChannelSelect` object also has other methods available:

```javascript
ChannelSelect.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

