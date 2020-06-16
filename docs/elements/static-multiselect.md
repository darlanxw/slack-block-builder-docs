# Static Multi-Select

?> **Note:** This document is a reference to the `StaticMultiSelect` object in **Block Builder**. For information on the business logic for the **Static Multi-Select** in the context of the Slack Block Kit framework, visit [the Static Multi-Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#static_multi_select) on Slack's doc site.

### Creating an Instance 

An instance of `StaticMultiSelect` is created through the `Elements.StaticMultiSelect` method:

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.StaticMultiSelect();
```


The `StaticMultiSelect` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
StaticMultiSelect(params?)
```

#### Params

`actionId` – *String*

`maxSelectedItems` – *Int*

`placeholder` – *String*

#### Returns

A new `StaticMultiSelect` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `StaticMultiSelect` on which it is called.

```javascript
StaticMultiSelect.actionId(string)
```

Sets an ID for the Element to help you identify it and capture set values in interaction and submission payloads.
```javascript
StaticMultiSelect.confirm(ConfirmationDialog)
```

Sets a confirmation dialog to be shown upon interaction.
```javascript
StaticMultiSelect.initialOptions(Option1[, ...[, OptionN])
```

Appends initial options to be selected by default. Can be called multiple times.
```javascript
StaticMultiSelect.maxSelectedItems(int)
```

Sets a maximum number of items that can be selected in the menu.
```javascript
StaticMultiSelect.optionGroups(OptionGroup1[, ...[, OptionGroupN])
```

Appends groups of options for the select menu. Can be called multiple times.
```javascript
StaticMultiSelect.options(Option1[, ...[, OptionN])
```

Appends options. Can be called multiple times.
```javascript
StaticMultiSelect.placeholder(string)
```

Sets a placeholder to be displayed for the form input element.


### Other Methods

The `StaticMultiSelect` object also has other methods available:

```javascript
StaticMultiSelect.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

