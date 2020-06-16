# Date Picker

?> **Note:** This document is a reference to the `DatePicker` object in **Block Builder**. For information on the business logic for the **Date Picker** in the context of the Slack Block Kit framework, visit [the Date Picker docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#datepicker) on Slack's doc site.

### Creating an Instance 

An instance of `DatePicker` is created through the `Elements.DatePicker` method:

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.DatePicker();
```


The `DatePicker` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
DatePicker(params?)
```

#### Params

`actionId` – *String*

`initialDate` – *Date*

`placeholder` – *String*

#### Returns

A new `DatePicker` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `DatePicker` on which it is called.

```javascript
DatePicker.actionId(string)
```

Sets an ID for the Element to help you identify it and capture set values in interaction and submission payloads.
```javascript
DatePicker.confirm(ConfirmationDialog)
```

Sets a confirmation dialog to be shown upon interaction.
```javascript
DatePicker.initialDate(Date)
```

Sets a date to be selected by default in the datepicker.
```javascript
DatePicker.placeholder(string)
```

Sets a placeholder to be displayed for the form input element.


### Other Methods

The `DatePicker` object also has other methods available:

```javascript
DatePicker.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

