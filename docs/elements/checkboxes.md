# Checkboxes

Created by using of the `Checkboxes` object.

?> **Note:** This document is a reference to the `Checkboxes` object in **Block Builder**. For information on the business logic for the **Checkboxes** in the context of the Slack Block Kit framework, visit [the Checkboxes docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#checkboxes) on Slack's doc site.

### Importing

The `Checkboxes` object is accessed through the `Elements` object:

```javascript
import { Elements } from 'slack-block-builder';

// An instance of Checkboxes can then be created by calling Elements.Checkboxes();
```


### Constructor

The `Checkboxes` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
Checkboxes(params?)
```

#### Params

`actionId` – *String*

#### Returns

A new `Checkboxes` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `Checkboxes` on which the method is called.

```javascript
Checkboxes.actionId(string)
```

Sets an ID for the Element to help you identify it and capture set values in interaction and submission payloads.
```javascript
Checkboxes.confirm(ConfirmationDialog)
```

Sets a confirmation dialog to be shown upon interaction.
```javascript
Checkboxes.initialOptions(Option1[, ...[, OptionN])
```

Appends initial options to be selected by default. Can be called multiple times.
```javascript
Checkboxes.options(Option1[, ...[, OptionN])
```

Appends options. Can be called multiple times.


### Other Methods

The `Checkboxes` object also has other methods available:

```javascript
Checkboxes.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

