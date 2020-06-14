# Divider

Creating a **Divider** is done by means of the `Divider` object.

?> **Note:** This document is a reference to the `Divider` object in **Block Builder**. For information on the business logic for the **Divider** in the context of the Slack Block Kit framework, visit [the Divider docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;blocks#divider) on Slack's doc site.

### Importing

The `Divider` object is accessed through the `Blocks` object:

```javascript
import { Blocks } from 'slack-block-builder';

// An instance of Divider can then be created by calling Blocks.Divider();
```


### Constructor

The `Divider` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
Divider(params?)
```

#### Params

`blockId` – *String*

#### Returns

A new `Divider` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `Divider` on which the method is called.

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

