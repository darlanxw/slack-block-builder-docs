# Time Picker

?> **Note:** This document is a reference to the `TimePicker` object in **Block Builder**. For information on the business logic for the **Time Picker** in the context of the Slack Block Kit framework, visit [the Time Picker docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#timepicker) on Slack's doc site.

### Creating an Instance 

An instance of `TimePicker` is created through the `Elements.TimePicker` method:

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.TimePicker();
```


The `TimePicker` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
TimePicker(params?)
```

#### Params

`actionId` – *String*

`initialTime` – *String*

`placeholder` – *String*

#### Returns

A new `TimePicker` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `TimePicker` on which it is called.

```javascript
TimePicker.actionId(string)
```

Sets an ID for the Element to help you identify it and capture set values in interaction and submission payloads.
```javascript
TimePicker.confirm(ConfirmationDialog)
```

Sets a confirmation dialog to be shown upon interaction.
```javascript
TimePicker.initialTime(string)
```

Sets the default selected time in the menu. Note that this method accepts a string in the HH:mm format, in which HH is for hours, in the 24-hour format, and mm is minutes, with a leading zero.
```javascript
TimePicker.placeholder(string)
```

Sets a placeholder to be displayed for the form input element.


### Other Methods

The `TimePicker` object also has other methods available:

```javascript
TimePicker.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

