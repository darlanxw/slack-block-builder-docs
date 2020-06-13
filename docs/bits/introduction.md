# Bits

This is the one category of objects that differs from those laid out in the [Slack Block Kit](https://api.slack.com/block-kit) documentation.     

The `Bits` object in **Slack Builder** contains methods to create certain objects that are referred to in the Block Kit reference as [composition objects](https://api.slack.com/reference/block-kit/composition-objects). More specifically, **Options**, **Option Groups**, and **Confirmation Dialogs**.

Unlike other composition objects, such as the Filter object or Plain-Text object, these are less concerned with data structure, and more based around UI and user experience. As such, it felt like they really deserved to be their own entity. And so came about the `Bits` object.    

### Accessing Bits in Block Builder

All of the composition objects provided by the [Slack Block Kit](https://api.slack.com/block-kit) framework are supported in **Block Builder** and most are accessed through the `Bits` object, which is a top-level import. The others (Markdown, Plain-Text, Filter) are created in the background when a view is compiled.

```javascript
// Import a Surface, Blocks, the encompassing Elements, then the Bits object

import { Message, Blocks, Elements, Bits } from 'slack-block-builder';
```

Once the `Bits` object has been imported, you create one of the included composition object using its methods, such as by calling `Bits.Option()` to create an `Option` object for a select menu.   

For more detailed information, see their individual reference docs.
