# Channel Select

Created by using the `ChannelSelect` object.

?> **Note:** This document is a reference to the `ChannelSelect` object in **Block Builder**. For information on the business logic for the **Channel Select** in the context of the Slack Block Kit framework, visit [the Channel Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#channel_select) on Slack's doc site.

### Importing

The `ChannelSelect` object is accessed through the `Elements` object:

```javascript
import { Elements } from 'slack-block-builder';

// An instance of ChannelSelect can then be created by calling Elements.ChannelSelect();
```


### Constructor

The `ChannelSelect` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
ChannelSelect(params?)
```

#### Params

`actionId` – *String*

`initialChannel` – *String*

`placeholder` – *String*

#### Returns

A new `ChannelSelect` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `ChannelSelect` on which the method is called.

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

Sets this option to &#x60;true&#x60;. By doing so, a response URL will be supplied with payloads to your application upon interaction.


### Other Methods

The `ChannelSelect` object also has other methods available:

```javascript
ChannelSelect.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

