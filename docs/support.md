# Supported Components

At the time of writing this doc, **Slack Builder** supports every component provided by the [Slack Block Kit](https://api.slack.com/block-kit) framework.

Below is a list of supported objects and how to access them in **Block Builder**. 

?> **Note:** A few of the [composition objects](https://api.slack.com/reference/block-kit/composition-objects), such as the Plain-Text and Markdown objects are not mentioned here, as they are built in the background, as part of a more UI-focus component. 

| **Name**             | **Type**           | **Support**    | **Accessed Via**                  | **Docs**    
|----------------------|--------------------|----------------|-----------------------------------|--------------
| Home Tab             | Surface            | ✅             | `HomeTab()`                       | [View Docs](surfaces/home-tab.md)
| Message              | Surface            | ✅             | `Message()`                       | [View Docs](surfaces/message.md)
| Modal                | Surface            | ✅             | `Modal()`                         | [View Docs](surfaces/modal.md)
| Actions              | Block              | ✅             | `Blocks.Actions()`                | [View Docs](blocks/actions.md)
| Context              | Block              | ✅             | `Blocks.Context()`                | [View Docs](blocks/context.md)
| Divider              | Block              | ✅             | `Blocks.Divider()`                | [View Docs](blocks/divider.md)
| File                 | Block              | ✅             | `Blocks.File()`                   | [View Docs](blocks/file.md)
| Image                | Block              | ✅             | `Blocks.Image()`                  | [View Docs](blocks/image.md)
| Input                | Block              | ✅             | `Blocks.Input()`                  | [View Docs](blocks/input.md)
| Section              | Block              | ✅             | `Blocks.Section()`                | [View Docs](blocks/section.md)
| Button               | Element            | ✅️             | `Elements.Button()`               | [View Docs](elements/button.md)
| Checkboxes           | Element            | ✅             | `Elements.Checkboxes()`           | [View Docs](elements/checkboxes.md)
| Date Picker          | Element            | ✅             | `Elements.DatePicker()`           | [View Docs](elements/datepicker.md)
| Image                | Element            | ✅             | `Elements.Img()`                  | [View Docs](elements/img.md)
| Overflow Menu        | Element            | ✅             | `Elements.OverflowMenu()`         | [View Docs](elements/overflow-menu.md)
| Radio Buttons        | Element            | ✅             | `Elements.RadioButtons()`         | [View Docs](elements/radio-buttons.md)
| Plain-Text Input     | Element            | ✅             | `Elements.TextInput()`            | [View Docs](elements/text-input.md)
| Select Menus         | Element            | ✅             | `Elements.[Type]Select()`         | 
| Multi-Select Menus   | Element            | ✅             | `Elements.[Type]MultiSelect()`    | 
| Option               | Composition Object | ✅             | `Bits.Option()`                   | [View Docs](bits/option.md)
| Confirm Dialog       | Composition Object | ✅             | `Bits.ConfirmationDialog()`       | [View Docs](bits/confirmation-dialog.md)
| Option Group         | Composition Object | ✅             | `Bits.OptionGroup()`              | [View Docs](bits/option-group.md)