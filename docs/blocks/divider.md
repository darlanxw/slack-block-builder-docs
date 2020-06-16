# Divider

?> **Note:** This document is a reference to the `Divider` object in **Block Builder**. For information on the business logic for the **Divider** in the context of the Slack Block Kit framework, visit [the Divider docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;blocks#divider) on Slack's doc site.

### Creating an Instance 

An instance of `Divider` is created through the `Blocks.Divider` method:

```javascript
import { Blocks } from 'slack-block-builder';

const myObj = Blocks.Divider();
```


The `Divider` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
Divider(params?)
```

#### Params

`blockId` – *String*

#### Returns

A new `Divider` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `Divider` on which it is called.

```javascript
Divider.blockId(string)
```

Sets an ID for the Block to help you identify it in interaction and submission payloads.


### Other Methods

The `Divider` object also has other methods available:

```javascript
Divider.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

