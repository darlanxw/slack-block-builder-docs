# Option

Creating a **Option** is done by means of the `Option` object.

?> **Note:** This document is a reference to the `Option` object in **Block Builder**. For information on the business logic for the **Option** in the context of the Slack Block Kit framework, visit [the Option docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;composition-objects#option) on Slack's doc site.

### Importing

The `Option` object is accessed through the `Bits` object:

```javascript
import { Bits } from 'slack-block-builder';

// An instance of Option can then be created by calling Bits.Option();
```


### Constructor

The `Option` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

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

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `Option` on which the method is called.

```javascript
Option.description(string)
```

Sets a description to be shown next to the radio button.
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

