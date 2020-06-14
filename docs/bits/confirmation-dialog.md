# Confirmation Dialog

Created by using of the `ConfirmationDialog` object.

?> **Note:** This document is a reference to the `ConfirmationDialog` object in **Block Builder**. For information on the business logic for the **Confirmation Dialog** in the context of the Slack Block Kit framework, visit [the Confirmation Dialog docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;composition-objects#confirm) on Slack's doc site.

### Importing

The `ConfirmationDialog` object is accessed through the `Bits` object:

```javascript
import { Bits } from 'slack-block-builder';

// An instance of ConfirmationDialog can then be created by calling Bits.ConfirmationDialog();
```


### Constructor

The `ConfirmationDialog` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
ConfirmationDialog(params?)
```

#### Params

`confirm` – *String*

`deny` – *String*

`text` – *String*

`title` – *String*

#### Returns

A new `ConfirmationDialog` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `ConfirmationDialog` on which the method is called.

```javascript
ConfirmationDialog.confirm(ConfirmationDialog)
```

Sets a confirmation dialog to be shown upon interaction.
```javascript
ConfirmationDialog.danger()
```

Sets the style of the button, making it red.
```javascript
ConfirmationDialog.deny(string)
```

Sets the text of the button that cancels the interaction.
```javascript
ConfirmationDialog.primary()
```

Sets the style of the button, making it green.
```javascript
ConfirmationDialog.title(string)
```

Sets the title displayed to the user in the dialog.


### Other Methods

The `ConfirmationDialog` object also has other methods available:

```javascript
ConfirmationDialog.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

