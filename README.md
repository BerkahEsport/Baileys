# Baileys Warp

If you install this repo as a module you can use it just like you would regular Baileys. make sure your package.json does not include Baileys because the following code will install Baileys itself and then modify it.

---

# Modifications Made

| Function                              | Status |
|---------------------------------------|--------|
| Newsletter Metadata                   | ✅     |
| Newsletter getprofile                 | ❌     |
| Newsletter getVerified                | ✅     |
| Newsletter ID                         | ✅     |
| Create a Newsletter                   | ✅     |
| to get subscribed Newsletter          | ✅     |
| follow newsletter                     | ✅     |
| unfollow newsletter                   | ✅     |
| react message from Newsletter         | ✅     |
| mute newsletter                       | ✅     |
| update the Default Disappearing Mode  | ✅     |
| update the Read Receipts privacy      | ✅     |
| update the Groups Add privacy         | ✅     |
| Button WhatsApp                       | ✅     |
| others                                |        |

---

# What has been modified?

Some functions to support buttons and fix metadata that output null causing out of control errors, all of which have been fixed.

# How to install?

- Using npm:
  ```bash
  npm install github:@Azrefta/Baileys
  ```

- Using yarn:
  ```bash
  yarn add github:@Azrefta/Baileys
  ```

- Example of dependencies content:
  ```json
  {
    "dependencies": {
      "Baileys": "github:@Azrefta/Baileys"
    }
  }
  ```

---
