# Static Select

?> **Note:** This document is a reference to the `StaticSelect` object in **Block Builder**. For information on the business logic for the **Static Select** in the context of the Slack Block Kit framework, visit [the Static Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#static_select) on Slack's doc site.

### Creating an Instance 

An instance of `StaticSelect` is created through the `Elements.StaticSelect` method:

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.StaticSelect();
```


The `StaticSelect` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
StaticSelect(params?)
```

#### Params

`actionId` – *String*

`placeholder` – *String*

#### Returns

A new `StaticSelect` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `StaticSelect` on which it is called.

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
StaticSelect.optionGroups([OptionGroup1[, ...[, OptionGroupN]])
```

Appends groups of options for the select menu. Can be called multiple times.
```javascript
StaticSelect.options([Option1[, ...[, OptionN]])
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

