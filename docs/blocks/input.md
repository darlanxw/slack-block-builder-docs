# Input

Created by using the `Input` object.

?> **Note:** This document is a reference to the `Input` object in **Block Builder**. For information on the business logic for the **Input** in the context of the Slack Block Kit framework, visit [the Input docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;blocks#input) on Slack's doc site.

### Importing

The `Input` object is accessed through the `Blocks` object:

```javascript
import { Blocks } from 'slack-block-builder';

// An instance of Input can then be created by calling Blocks.Input();
```


### Constructor

The `Input` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
Input(params?)
```

#### Params

`blockId` – *String*

`hint` – *String*

`label` – *String*

#### Returns

A new `Input` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `Input` on which the method is called.

```javascript
Input.blockId(string)
```

Sets an ID for the Block to help you identify it in interaction and submission payloads.
```javascript
Input.element(Element)
```

Sets an element to be attached.
```javascript
Input.hint(string)
```

Sets a hint to be displayed below the input.
```javascript
Input.label(string)
```

Sets the label to be displayed above the input Element.
```javascript
Input.optional()
```

Sets the input to being an optional field in the form. By default, form elements are required for successful form submission.


### Other Methods

The `Input` object also has other methods available:

```javascript
Input.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

