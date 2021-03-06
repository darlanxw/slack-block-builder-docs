# Conversation Multi-Select

?> **Note:** This document is a reference to the `ConversationMultiSelect` object in **Block Builder**. For information on the business logic for the **Conversation Multi-Select** in the context of the Slack Block Kit framework, visit [the Conversation Multi-Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#conversation_multi_select) on Slack's doc site.

### Creating an Instance 

An instance of `ConversationMultiSelect` is created through the `Elements.ConversationMultiSelect` method:

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.ConversationMultiSelect();
```


The `ConversationMultiSelect` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
ConversationMultiSelect(params?)
```

#### Params

`actionId` – *String*

`maxSelectedItems` – *Int*

`placeholder` – *String*

#### Returns

A new `ConversationMultiSelect` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `ConversationMultiSelect` on which it is called.

```javascript
ConversationMultiSelect.actionId(string)
```

Sets an ID for the Element to help you identify it and capture set values in interaction and submission payloads.
```javascript
ConversationMultiSelect.confirm(ConfirmationDialog)
```

Sets a confirmation dialog to be shown upon interaction.
```javascript
ConversationMultiSelect.defaultToCurrentConversation()
```

Sets this option to true, making the default selected conversation the one currently open for the user.
```javascript
ConversationMultiSelect.excludeBotUsers()
```

Sets this option to `true`, excluding bot users from the menu.
```javascript
ConversationMultiSelect.excludeExternalSharedChannels()
```

Sets this option to `true`, excluding externally shared conversations from the menu.
```javascript
ConversationMultiSelect.filter(string1[, ...[, stringN])
```

Appends a filter to filter out which conversations should be included in the list. Possible values are *im*, *impm*, *private*, and *public*. Can be called multiple times.
```javascript
ConversationMultiSelect.initialConversations([string1[, ...[, stringN]])
```

Appends conversations to be selected by default. Can be called multiple times.
```javascript
ConversationMultiSelect.maxSelectedItems(int)
```

Sets a maximum number of items that can be selected in the menu.
```javascript
ConversationMultiSelect.placeholder(string)
```

Sets a placeholder to be displayed for the form input element.


### Other Methods

The `ConversationMultiSelect` object also has other methods available:

```javascript
ConversationMultiSelect.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

