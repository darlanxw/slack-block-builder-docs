# Blocks

In the [Slack Block Kit](https://api.slack.com/block-kit) framework, a Block is an object or component used to manipulate a Surface's layout.  

If a Surface is to [Block Kit](https://api.slack.com/block-kit) what the `<body>` tag is to an HTML file, a Block is the `<div>` tag. It dictates the informational structure of the UI.

### Working With Blocks in Block Builder

All of the Blocks provided by the [Slack Block Kit](https://api.slack.com/block-kit) framework are supported in **Block Builder**. They are all accessed through the `Blocks` object that is exposed at the top-level of the library:

```javascript
// Import a Message object as our Surface, and import the Blocks object

import { Message, Blocks } from 'slack-block-builder';
```

Each Block is described and documented separately in this section of the documentation, but the table here provides a quick overview as to which blocks are available, with which Surfaces they are compatible, and how you can access them using the **Block Builder** `Blocks` object:

| **Slack's Block Name**  | **Messages**    | **Modals**  | **Home Tabs**    | **Accessed Via**
|-------------------------|-----------------|-------------|------------------|------------------
| **Actions**             | ✅              | ✅           | ✅               | `Blocks.Actions`
| **Context**             | ✅              | ✅           | ✅               | `Blocks.Context`
| **Divider**             | ✅              | ✅           | ✅               | `Blocks.Divider`
| **File**                | ✅              | ❌           | ❌               | `Blocks.File`
| **Image**               | ✅              | ✅           | ✅               | `Blocks.Image`
| **Input**               | ❌              | ✅           | ❌               | `Blocks.Input`
| **Section**             | ✅              | ✅           | ✅               | `Blocks.Section`
