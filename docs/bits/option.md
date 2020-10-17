# Option

?> **Note:** This document is a reference to the `Option` object in **Block Builder**. For information on the business logic for the **Option** in the context of the Slack Block Kit framework, visit [the Option docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;composition-objects#option) on Slack's doc site.

### Creating an Instance 

An instance of `Option` is created through the `Bits.Option` method:

```javascript
import { Bits } from 'slack-block-builder';

const myObj = Bits.Option();
```


The `Option` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
Option(params?)
```

#### Params

`description` – *String*

`text` – *String*

`url` – *String*

`value` – *String*

#### Returns

A new `Option` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `Option` on which it is called.

```javascript
Option.description(string)
```

Sets a description to be shown next to the radio button.
```javascript
Option.text(string)
```

Sets the text to be displayed in the block
```javascript
Option.url(string)
```

Sets the URL to which the user will be redirected upon clicking the action.
```javascript
Option.value(string)
```

Sets the value, which will be returned to your application as an identifier of the action taken by the user.


### Other Methods

The `Option` object also has other methods available:

```javascript
Option.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

