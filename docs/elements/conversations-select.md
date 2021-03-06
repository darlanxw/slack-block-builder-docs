# Conversation Select

?> **Note:** This document is a reference to the `ConversationSelect` object in **Block Builder**. For information on the business logic for the **Conversation Select** in the context of the Slack Block Kit framework, visit [the Conversation Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#conversation_select) on Slack's doc site.

### Creating an Instance 

An instance of `ConversationSelect` is created through the `Elements.ConversationSelect` method:

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.ConversationSelect();
```


The `ConversationSelect` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
ConversationSelect(params?)
```

#### Params

`actionId` – *String*

`initialConversation` – *String*

`placeholder` – *String*

#### Returns

A new `ConversationSelect` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `ConversationSelect` on which it is called.

```javascript
ConversationSelect.actionId(string)
```

Sets an ID for the Element to help you identify it and capture set values in interaction and submission payloads.
```javascript
ConversationSelect.confirm(ConfirmationDialog)
```

Sets a confirmation dialog to be shown upon interaction.
```javascript
ConversationSelect.defaultToCurrentConversation()
```

Sets this option to true, making the default selected conversation the one currently open for the user.
```javascript
ConversationSelect.excludeBotUsers()
```

Sets this option to `true`, excluding bot users from the menu.
```javascript
ConversationSelect.excludeExternalSharedChannels()
```

Sets this option to `true`, excluding externally shared conversations from the menu.
```javascript
ConversationSelect.filter(string1[, ...[, stringN])
```

Appends a filter to filter out which conversations should be included in the list. Possible values are *im*, *impm*, *private*, and *public*. Can be called multiple times.
```javascript
ConversationSelect.initialConversation(string)
```

Sets the conversation selected by default in the menu.
```javascript
ConversationSelect.placeholder(string)
```

Sets a placeholder to be displayed for the form input element.
```javascript
ConversationSelect.responseUrlEnabled()
```

Sets this option to `true`. By doing so, a response URL will be supplied with payloads to your application upon interaction.


### Other Methods

The `ConversationSelect` object also has other methods available:

```javascript
ConversationSelect.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

