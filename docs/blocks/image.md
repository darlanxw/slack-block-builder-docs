# Image

Created by using the `Image` object.

?> **Note:** This document is a reference to the `Image` object in **Block Builder**. For information on the business logic for the **Image** in the context of the Slack Block Kit framework, visit [the Image docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;block-kit&#x2F;blocks#image) on Slack's doc site.

### Importing

The `Image` object is accessed through the `Blocks` object:

```javascript
import { Blocks } from 'slack-block-builder';

// An instance of Image can then be created by calling Blocks.Image();
```


### Constructor

The `Image` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
Image(params?)
```

#### Params

`altText` – *String*

`blockId` – *String*

`imageUrl` – *String*

`title` – *String*

#### Returns

A new `Image` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `Image` on which the method is called.

```javascript
Image.altText(string)
```

Sets the alt text for the image.
```javascript
Image.blockId(string)
```

Sets an ID for the Block to help you identify it in interaction and submission payloads.
```javascript
Image.imageUrl(string)
```

Sets the source URL of the image.
```javascript
Image.title(string)
```

Sets the title displayed to the user in the dialog.


### Other Methods

The `Image` object also has other methods available:

```javascript
Image.end()
```

Does not perform any manipulations on the object. This is simply used to simulate a closing tag should you prefer it.

