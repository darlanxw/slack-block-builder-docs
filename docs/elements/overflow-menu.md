# Overflow Menu

Creating a **Overflow Menu** is done by means of the `OverflowMenu` object.

?> **Note:** This document is a reference to the `OverflowMenu` object in **Block Builder**. For information on the business logic for the **Overflow Menu** in the context of the Slack Block Kit framework, visit [the Overflow Menu docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#overflow) on Slack's doc site.

### Importing

The `OverflowMenu` object is accessed through the `Elements` object:

```javascript
import { Elements } from 'slack-block-builder';

// An instance of OverflowMenu can then be created by calling Elements.OverflowMenu();
```


### Constructor

The `OverflowMenu` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
OverflowMenu(params?)
```

#### Params

`actionId` – *String*

#### Returns

A new `OverflowMenu` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `OverflowMenu` on which the method is called.

```javascript
OverflowMenu.actionId(string)
```

Sets an ID for the Element to help you identify it and capture set values in interaction and submission payloads.
```javascript
OverflowMenu.confirm(ConfirmationDialog)
```

Sets a confirmation dialog to be shown upon interaction.
```javascript
OverflowMenu.options(Option1[, ...[, OptionN])
```

Appends options. Can be called multiple times.


### Other Methods

The `OverflowMenu` object also has other methods available:

```javascript
OverflowMenu.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

