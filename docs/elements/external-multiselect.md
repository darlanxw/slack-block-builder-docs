# External Multi-Select

?> **Note:** This document is a reference to the `ExternalMultiSelect` object in **Block Builder**. For information on the business logic for the **External Multi-Select** in the context of the Slack Block Kit framework, visit [the External Multi-Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#external_multi_select) on Slack's doc site.

### Creating an Instance 

An instance of `ExternalMultiSelect` is created through the `Elements.ExternalMultiSelect` method:

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.ExternalMultiSelect();
```


The `ExternalMultiSelect` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
ExternalMultiSelect(params?)
```

#### Params

`actionId` – *String*

`maxSelectedItems` – *Int*

`minQueryLength` – *Int*

`placeholder` – *String*

#### Returns

A new `ExternalMultiSelect` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `ExternalMultiSelect` on which it is called.

```javascript
ExternalMultiSelect.actionId(string)
```

Sets an ID for the Element to help you identify it and capture set values in interaction and submission payloads.
```javascript
ExternalMultiSelect.confirm(ConfirmationDialog)
```

Sets a confirmation dialog to be shown upon interaction.
```javascript
ExternalMultiSelect.initialOptions([Option1[, ...[, OptionN]])
```

Appends initial options to be selected by default. Can be called multiple times.
```javascript
ExternalMultiSelect.maxSelectedItems(int)
```

Sets a maximum number of items that can be selected in the menu.
```javascript
ExternalMultiSelect.minQueryLength(int)
```

Sets a minimum number of characters typed before querying your options URL.
```javascript
ExternalMultiSelect.placeholder(string)
```

Sets a placeholder to be displayed for the form input element.


### Other Methods

The `ExternalMultiSelect` object also has other methods available:

```javascript
ExternalMultiSelect.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

