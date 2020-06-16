# Plain-Text Input

?> **Note:** This document is a reference to the `TextInput` object in **Block Builder**. For information on the business logic for the **Plain-Text Input** in the context of the Slack Block Kit framework, visit [the Plain-Text Input docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#input) on Slack's doc site.

### Creating an Instance 

An instance of `TextInput` is created through the `Elements.TextInput` method:

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.TextInput();
```


The `TextInput` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
TextInput(params?)
```

#### Params

`actionId` – *String*

`initialValue` – *String*

`maxLength` – *Int*

`minLength` – *Int*

`placeholder` – *String*

#### Returns

A new `TextInput` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `TextInput` on which it is called.

```javascript
TextInput.actionId(string)
```

Sets an ID for the Element to help you identify it and capture set values in interaction and submission payloads.
```javascript
TextInput.initialValue(string)
```

Sets the value set by default upon loading.
```javascript
TextInput.maxLength(int)
```

Sets a maximum character count in order for the user to submit the form.
```javascript
TextInput.minLength(int)
```

Sets a minimum character count in order for the user to submit the form.
```javascript
TextInput.multiline()
```

Sets this option to `true`, making the text input field larger, for paragraph text.
```javascript
TextInput.placeholder(string)
```

Sets a placeholder to be displayed for the form input element.


### Other Methods

The `TextInput` object also has other methods available:

```javascript
TextInput.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

