# Radio Buttons

Created by using the `RadioButtons` object.

?> **Note:** This document is a reference to the `RadioButtons` object in **Block Builder**. For information on the business logic for the **Radio Buttons** in the context of the Slack Block Kit framework, visit [the Radio Buttons docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#radio) on Slack's doc site.

### Importing

The `RadioButtons` object is accessed through the `Elements` object:

```javascript
import { Elements } from 'slack-block-builder';

// An instance of RadioButtons can then be created by calling Elements.RadioButtons();
```


### Constructor

The `RadioButtons` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
RadioButtons(params?)
```

#### Params

`actionId` – *String*

#### Returns

A new `RadioButtons` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `RadioButtons` on which the method is called.

```javascript
RadioButtons.actionId(string)
```

Sets an ID for the Element to help you identify it and capture set values in interaction and submission payloads.
```javascript
RadioButtons.confirm(ConfirmationDialog)
```

Sets a confirmation dialog to be shown upon interaction.
```javascript
RadioButtons.initialOption(Option)
```

Sets the option that is selected by default upon loading.
```javascript
RadioButtons.options(Option1[, ...[, OptionN])
```

Appends options. Can be called multiple times.


### Other Methods

The `RadioButtons` object also has other methods available:

```javascript
RadioButtons.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

