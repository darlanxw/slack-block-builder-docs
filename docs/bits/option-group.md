# Option Group

Creating a **Option Group** is done by means of the `OptionGroup` object.

?> **Note:** This document is a reference to the `OptionGroup` object in **Block Builder**. For information on the business logic for the **Option Group** in the context of the Slack Block Kit framework, visit [the Option Group docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;composition-objects#option_group) on Slack's doc site.

### Importing

The `OptionGroup` object is accessed through the `Bits` object:

```javascript
import { Bits } from 'slack-block-builder';

// An instance of OptionGroup can then be created by calling Bits.OptionGroup();
```


### Constructor

The `OptionGroup` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
OptionGroup(params?)
```

#### Params

`label` – *String*

#### Returns

A new `OptionGroup` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `OptionGroup` on which the method is called.

```javascript
OptionGroup.label(string)
```

Sets the label to be displayed above the input Element.
```javascript
OptionGroup.options(Option1[, ...[, OptionN])
```

Appends options. Can be called multiple times.


### Other Methods

The `OptionGroup` object also has other methods available:

```javascript
OptionGroup.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

