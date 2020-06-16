# Channel Multi-Select

?> **Note:** This document is a reference to the `ChannelMultiSelect` object in **Block Builder**. For information on the business logic for the **Channel Multi-Select** in the context of the Slack Block Kit framework, visit [the Channel Multi-Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#channel_multi_select) on Slack's doc site.

### Creating an Instance 

An instance of `ChannelMultiSelect` is created through the `Elements.ChannelMultiSelect` method:

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.ChannelMultiSelect();
```


The `ChannelMultiSelect` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
ChannelMultiSelect(params?)
```

#### Params

`actionId` – *String*

`maxSelectedItems` – *Int*

`placeholder` – *String*

#### Returns

A new `ChannelMultiSelect` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `ChannelMultiSelect` on which it is called.

```javascript
ChannelMultiSelect.actionId(string)
```

Sets an ID for the Element to help you identify it and capture set values in interaction and submission payloads.
```javascript
ChannelMultiSelect.confirm(ConfirmationDialog)
```

Sets a confirmation dialog to be shown upon interaction.
```javascript
ChannelMultiSelect.initialChannels(string1[, ...[, stringN])
```

Appends channels selected at load. Can be called multiple times.
```javascript
ChannelMultiSelect.maxSelectedItems(int)
```

Sets a maximum number of items that can be selected in the menu.
```javascript
ChannelMultiSelect.placeholder(string)
```

Sets a placeholder to be displayed for the form input element.


### Other Methods

The `ChannelMultiSelect` object also has other methods available:

```javascript
ChannelMultiSelect.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

