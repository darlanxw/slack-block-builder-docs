# Static Select

Creating a **Static Select** is done by means of the `StaticSelect` object.

?> **Note:** This document is a reference to the `StaticSelect` object in **Block Builder**. For information on the business logic for the **Static Select** in the context of the Slack Block Kit framework, visit [the Static Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#static_select) on Slack's doc site.

### Importing

The `StaticSelect` object is accessed through the `Elements` object:

```javascript
import { Elements } from 'slack-block-builder';

// An instance of StaticSelect can then be created by calling Elements.StaticSelect();
```


### Constructor

The `StaticSelect` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
StaticSelect(params?)
```

#### Params

`actionId` – *String*

`placeholder` – *String*

#### Returns

A new `StaticSelect` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `StaticSelect` on which the method is called.

```javascript
StaticSelect.actionId(string)
```

Sets an ID for the Element to help you identify it and capture set values in interaction and submission payloads.
```javascript
StaticSelect.confirm(ConfirmationDialog)
```

Sets a confirmation dialog to be shown upon interaction.
```javascript
StaticSelect.initialOption(Option)
```

Sets the option that is selected by default upon loading.
```javascript
StaticSelect.optionGroups(OptionGroup1[, ...[, OptionGroupN])
```

Appends groups of options for the select menu. Can be called multiple times.
```javascript
StaticSelect.options(Option1[, ...[, OptionN])
```

Appends options. Can be called multiple times.
```javascript
StaticSelect.placeholder(string)
```

Sets a placeholder to be displayed for the form input element.


### Other Methods

The `StaticSelect` object also has other methods available:

```javascript
StaticSelect.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

