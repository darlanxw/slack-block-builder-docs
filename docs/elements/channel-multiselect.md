# Channel Multi-Select

Created by using the `ChannelMultiSelect` object.

?> **Note:** This document is a reference to the `ChannelMultiSelect` object in **Block Builder**. For information on the business logic for the **Channel Multi-Select** in the context of the Slack Block Kit framework, visit [the Channel Multi-Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#channel_multi_select) on Slack's doc site.

### Importing

The `ChannelMultiSelect` object is accessed through the `Elements` object:

```javascript
import { Elements } from 'slack-block-builder';

// An instance of ChannelMultiSelect can then be created by calling Elements.ChannelMultiSelect();
```


### Constructor

The `ChannelMultiSelect` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
ChannelMultiSelect(params?)
```

#### Params

`actionId` – *String*

`maxSelectedItems` – *Int*

`placeholder` – *String*

#### Returns

A new `ChannelMultiSelect` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `ChannelMultiSelect` on which the method is called.

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

