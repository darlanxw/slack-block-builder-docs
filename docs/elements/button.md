# Button

Creating a **Button** is done by means of the `Button` object.

?> **Note:** This document is a reference to the `Button` object in **Block Builder**. For information on the business logic for the **Button** in the context of the Slack Block Kit framework, visit [the Button docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#button) on Slack's doc site.

### Importing

The `Button` object is accessed through the `Elements` object:

```javascript
import { Elements } from 'slack-block-builder';

// An instance of Button can then be created by calling Elements.Button();
```


### Constructor

The `Button` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
Button(params?)
```

#### Params

`actionId` – *String*

`text` – *String*

`url` – *String*

`value` – *String*

#### Returns

A new `Button` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `Button` on which the method is called.

```javascript
Button.actionId(string)
```

Sets an ID for the Element to help you identify it and capture set values in interaction and submission payloads.
```javascript
Button.confirm(ConfirmationDialog)
```

Sets a confirmation dialog to be shown upon interaction.
```javascript
Button.danger()
```

Sets the style of the button, making it red.
```javascript
Button.primary()
```

Sets the style of the button, making it green.
```javascript
Button.url(string)
```

Sets the URL to which the user will be redirected upon clicking the action.
```javascript
Button.value(string)
```

Sets the value, which will be returned to your application as an identifier of the action taken by the user.


### Other Methods

The `Button` object also has other methods available:

```javascript
Button.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.
