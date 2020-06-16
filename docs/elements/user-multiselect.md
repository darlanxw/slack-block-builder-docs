# User Multi-Select

?> **Note:** This document is a reference to the `UserMultiSelect` object in **Block Builder**. For information on the business logic for the **User Multi-Select** in the context of the Slack Block Kit framework, visit [the User Multi-Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#users_multi_select) on Slack's doc site.

### Creating an Instance 

An instance of `UserMultiSelect` is created through the `Elements.UserMultiSelect` method:

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.UserMultiSelect();
```


The `UserMultiSelect` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
UserMultiSelect(params?)
```

#### Params

`actionId` – *String*

`maxSelectedItems` – *Int*

`placeholder` – *String*

#### Returns

A new `UserMultiSelect` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `UserMultiSelect` on which it is called.

```javascript
UserMultiSelect.actionId(string)
```

Sets an ID for the Element to help you identify it and capture set values in interaction and submission payloads.
```javascript
UserMultiSelect.confirm(ConfirmationDialog)
```

Sets a confirmation dialog to be shown upon interaction.
```javascript
UserMultiSelect.initialUsers(string1[, ...[, stringN])
```

Sets the users selected by default in the menu.
```javascript
UserMultiSelect.maxSelectedItems(int)
```

Sets a maximum number of items that can be selected in the menu.
```javascript
UserMultiSelect.placeholder(string)
```

Sets a placeholder to be displayed for the form input element.


### Other Methods

The `UserMultiSelect` object also has other methods available:

```javascript
UserMultiSelect.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

