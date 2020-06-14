# Supported Components

At the time of writing this doc, **Slack Builder** supports every component provided by the [Slack Block Kit](https://api.slack.com/block-kit) framework.

Below is a list of supported objects and how to access them in **Block Builder**. 

?> **Note:** A few of the [composition objects](https://api.slack.com/reference/block-kit/composition-objects), such as the Plain-Text and Markdown objects are not mentioned here, as they are built in the background, as part of a more UI-focus component. 

### Surfaces

| **Type**             | **Name**           | **Support**    | **Accessed Via**                  | **Docs**    
|----------------------|--------------------|----------------|-----------------------------------|--------------
| App Home             | Surface            | ✅             | `AppHome()`                       | [View Docs](home.md)
| Message              | Surface            | ✅             | `Message()`                       | [View Docs](home.md)
| Modal                | Surface            | ✅             | `Modal()`                         | [View Docs](home.md)
| Actions              | Block              | ✅             | `Blocks.Actions()`                | [View Docs](home.md)
| Context              | Block              | ✅             | `Blocks.Context()`                | [View Docs](home.md)
| Divider              | Block              | ✅             | `Blocks.Divider()`                | [View Docs](home.md)
| File                 | Block              | ✅             | `Blocks.File()`                   | [View Docs](home.md)
| Image                | Block              | ✅             | `Blocks.Image()`                  | [View Docs](home.md)
| Input                | Block              | ✅             | `Blocks.Input()`                  | [View Docs](home.md)
| Section              | Block              | ✅             | `Blocks.Section()`                | [View Docs](home.md)
| Button               | Element            | ✅️             | `Elements.Button()`               | [View Docs](home.md)
| Checkboxes           | Element            | ✅             | `Elements.Checkboxes()`           | [View Docs](home.md)
| Date Picker          | Element            | ✅             | `Elements.DatePicker()`           | [View Docs](home.md)
| Image                | Element            | ✅             | `Elements.Img()`                  | [View Docs](home.md)
| Overflow Menu        | Element            | ✅             | `Elements.OverflowMenu()`         | [View Docs](home.md)
| Radio Buttons        | Element            | ✅             | `Elements.RadioButtons()`         | [View Docs](home.md)
| Plain Text Input     | Element            | ✅             | `Elements.TextInput()`            | [View Docs](home.md)
| Select Menus         | Element            | ✅             | `Elements.[Type]Select()`         | [View Docs](home.md)
| Multi-Select Menus   | Element            | ✅             | `Elements.[Type]MultiSelect()`    | [View Docs](home.md)
| Option               | Composition Object | ✅             | `Bits.Option()`                   | [View Docs](home.md)
| Confirm Dialog       | Composition Object | ✅             | `Bits.ConfirmationDialog()`       | [View Docs](home.md)
| Option Group         | Composition Object | ✅             | `Bits.OptionGroup()`              | [View Docs](home.md)