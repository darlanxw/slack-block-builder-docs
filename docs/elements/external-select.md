# External Select

?> **Note:** This document is a reference to the `ExternalSelect` object in **Block Builder**. For information on the business logic for the **External Select** in the context of the Slack Block Kit framework, visit [the External Select docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#external_select) on Slack's doc site.

### Creating an Instance 

An instance of `ExternalSelect` is created through the `Elements.ExternalSelect` method:

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.ExternalSelect();
```


The `ExternalSelect` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
ExternalSelect(params?)
```

#### Params

`actionId` – *String*

`minQueryLength` – *Int*

`placeholder` – *String*

#### Returns

A new `ExternalSelect` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `ExternalSelect` on which it is called.

```javascript
ExternalSelect.actionId(string)
```

Sets an ID for the Element to help you identify it and capture set values in interaction and submission payloads.
```javascript
ExternalSelect.confirm(ConfirmationDialog)
```

Sets a confirmation dialog to be shown upon interaction.
```javascript
ExternalSelect.initialOption(Option)
```

Sets the option that is selected by default upon loading.
```javascript
ExternalSelect.minQueryLength(int)
```

Sets a minimum number of characters typed before querying your options URL.
```javascript
ExternalSelect.placeholder(string)
```

Sets a placeholder to be displayed for the form input element.


### Other Methods

The `ExternalSelect` object also has other methods available:

```javascript
ExternalSelect.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

