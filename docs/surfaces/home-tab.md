# Home Tab

Creating a **Home Tab** is done by means of the `HomeTab` object.

?> **Note:** This document is a reference to the `HomeTab` object in **Block Builder**. For information on the business logic for the **Home Tab** in the context of the Slack Block Kit framework, visit [the Home Tab docs](https:&#x2F;&#x2F;api.slack.com&#x2F;reference&#x2F;surfaces&#x2F;views) on Slack's doc site.

### Importing

The `HomeTab` object is a top-level import:

```javascript
import { HomeTab } from 'slack-block-builder';
```


### Constructor

The `HomeTab` object provides a builder interface, so all properties can be set through the object’s methods. But certain properties can also be passed to the constructor, should you prefer:

```javascript
HomeTab(params?)
```

#### Params

`callbackId` – *String*

`externalId` – *String*

`privateMetaData` – *String*

#### Returns

A new `HomeTab` object.

?> **Note:** For an explanation of any one of the parameters, see its corresponding builder method below.

### Builder Methods

All builder methods return `this`, the instance of `HomeTab` on which the method is called.

```javascript
HomeTab.blocks(Block1[, ...[, BlockN])
```

Appends Blocks to a Surface. Can be called multiple times.
```javascript
HomeTab.callbackId(string)
```

Sets a string to be returned back to your application with interaction and submission payloads. Typically used to persist data between views or provide context for an interaction. Is considered legacy, according to Slack&#39;s documentation. It is recommended to use &#x60;privateMetaData()&#x60; instead.
```javascript
HomeTab.externalId(string)
```

Sets the Slack-provided ID for Slack to identify the object.
```javascript
HomeTab.privateMetaData(string)
```

Sets a string to be returned back to your application with interaction and submission payloads. Typically used to persist data between views or provide context for an interaction.


### Other Methods

The `HomeTab` object also has other methods available:

```javascript
HomeTab.buildToJSON()
```

Builds the object and returns a JSON string compatible with the Slack API.
```javascript
HomeTab.buildToObject()
```

Builds the object and returns an object compatible with the Slack API (after stringifying it).
```javascript
HomeTab.printPreviewUrl()
```

Builds the object and prints a preview URL to Slack&#39;s Block Kit Builder website to the console.

