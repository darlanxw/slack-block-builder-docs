# Image

?> **Note:** This document is a reference to the `Img` object in **Block Builder**. For information on the business logic for the **Image** in the context of the Slack Block Kit framework, visit [the Image docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;block-elements#image) on Slack's doc site.

### Creating an Instance 

An instance of `Img` is created through the `Elements.Img` method:

```javascript
import { Elements } from 'slack-block-builder';

const myObj = Elements.Img();
```


The `Img` object has chainable setter methods for the object's properties. However, properties with primitive values can also be passed to the instantiating function, should you prefer:

```javascript
Img(params?)
```

#### Params

`altText` – *String*

`imageUrl` – *String*

#### Returns

A new `Img` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding setter method below.

### Setter Methods

All setter methods return `this`, the instance of `Img` on which it is called.

```javascript
Img.altText(string)
```

Sets the alt text for the image.
```javascript
Img.imageUrl(string)
```

Sets the source URL of the image.


### Other Methods

The `Img` object also has other methods available:

```javascript
Img.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

