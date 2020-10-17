# Overflow Menu

?> **Note:** This document is a reference to the `OverflowMenu` object in **Block Builder**. For information on the business logic for the **Overflow Menu** in the context of the Slack Block Kit framework, visit [the Overflow Menu docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#overflow) on Slack's doc site.

### Creating an Instance 

An instance of `OverflowMenu` is created through the `Elements.OverflowMenu` method:

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.OverflowMenu();
```


The `OverflowMenu` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
OverflowMenu(params?)
```

#### Params

`actionId` – *String*

#### Returns

A new `OverflowMenu` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `OverflowMenu` on which it is called.

```javascript
OverflowMenu.actionId(string)
```

Sets an ID for the Element to help you identify it and capture set values in interaction and submission payloads.
```javascript
OverflowMenu.confirm(ConfirmationDialog)
```

Sets a confirmation dialog to be shown upon interaction.
```javascript
OverflowMenu.options([Option1[, ...[, OptionN]])
```

Appends options. Can be called multiple times.


### Other Methods

The `OverflowMenu` object also has other methods available:

```javascript
OverflowMenu.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

