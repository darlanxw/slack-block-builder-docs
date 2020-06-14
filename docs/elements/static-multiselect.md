# Static Multi-Select

Created by using of the `StaticMultiSelect` object.

?> **Note:** This document is a reference to the `StaticMultiSelect` object in **Block Builder**. For information on the business logic for the **Static Multi-Select** in the context of the Slack Block Kit framework, visit [the Static Multi-Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#static_multi_select) on Slack's doc site.

### Importing

The `StaticMultiSelect` object is accessed through the `Elements` object:

```javascript
import { Elements } from 'slack-block-builder';

// An instance of StaticMultiSelect can then be created by calling Elements.StaticMultiSelect();
```


### Constructor

The `StaticMultiSelect` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
StaticMultiSelect(params?)
```

#### Params

`actionId` – *String*

`maxSelectedItems` – *Int*

`placeholder` – *String*

#### Returns

A new `StaticMultiSelect` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `StaticMultiSelect` on which the method is called.

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

