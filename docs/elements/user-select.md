# User Select

Created by using of the `UserSelect` object.

?> **Note:** This document is a reference to the `UserSelect` object in **Block Builder**. For information on the business logic for the **User Select** in the context of the Slack Block Kit framework, visit [the User Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#users_select) on Slack's doc site.

### Importing

The `UserSelect` object is accessed through the `Elements` object:

```javascript
import { Elements } from 'slack-block-builder';

// An instance of UserSelect can then be created by calling Elements.UserSelect();
```


### Constructor

The `UserSelect` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
UserSelect(params?)
```

#### Params

`actionId` – *String*

`initialUser` – *String*

`placeholder` – *String*

#### Returns

A new `UserSelect` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `UserSelect` on which the method is called.

```javascript
UserSelect.actionId(string)
```

Sets an ID for the Element to help you identify it and capture set values in interaction and submission payloads.
```javascript
UserSelect.confirm(ConfirmationDialog)
```

Sets a confirmation dialog to be shown upon interaction.
```javascript
UserSelect.initialUser(string)
```

Sets the user selected by default in the menu.
```javascript
UserSelect.placeholder(string)
```

Sets a placeholder to be displayed for the form input element.


### Other Methods

The `UserSelect` object also has other methods available:

```javascript
UserSelect.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

