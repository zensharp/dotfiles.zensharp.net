---
title: Windows Configuration
description: Configuration on Windows.
---

If you are coming from a fresh re-installation of Windows, delete previous versions of Windows in [Settings > Storage Management > Cleanup Recommendations](ms-settings:storagerecommendations)

## Windows
### Setup Accounts
:::tip[Pretty Home Directory Folder Name Hack]
For whatever reason, Windows forces the first user to login with a Microsoft account. In addition, Windows uses an (ugly) truncated version of the associated email address. For the best experience, follow the steps below.
:::

1. Create the first user with a Microsoft account.
1. Create a second user in [Settings](ms-settings:otherusers). Change the type to "Administrator" account.
1. Restart.
1. Log in as the second user.
1. Delete the first user in [Settings](ms-settings:otherusers).
1. Optional: [Sign in with Microsoft Account](ms-settings:yourinfo)

---

### Install Software
Run the provided Powershell script to install essential software.

1. `winget install -e --id Git.Git --accept-source-agreements`
1. Open a PowerShell as administrator.
1. `git clone https://github.com/zensharp/dotfiles ~/dotfiles`.
1. `cd ~/dotfiles/templates/windows`
1. `set-executionpolicy Unsigned`
1. `./setup.ps1`
1. Invert scroll direction ([jamie-pate/flipflop-windows-wheel](https://github.com/jamie-pate/flipflop-windows-wheel))

### Set Windows Settings
| Path | Name | Value |
| --- | --- | --- |
| [Time & Language > Language & Region > Regional format](ms-settings:regionformatting) | Short date | 2017-04-05 |
| [Time & Language > Language & Region > Regional format](ms-settings:regionformatting) | Short time | 09:40 |
| [Time & Language > Language & Region > Regional format](ms-settings:regionformatting) | Long time | 09:40:07 |
| [Accessibility > Visual Effects]( 	ms-settings:easeofaccess-visualeffects) | Always show scrollbars | On |
| [System > Multitasking](ms-settings:multitasking) > Snap windows | When I snap a window, show what I can snap next to it | false |
| [System > Multitasking](ms-settings:multitasking) > Alt + Tab | Open windows only | false |
| [Bluetooth & devices > Touchpad](ms-settings:devices-touchpad) > Taps | Touchpad sensitivity | Most sensitive |
| [Bluetooth & devices > Touchpad](ms-settings:devices-touchpad) > Taps | Press the lower right corner of the touchpad to right-click | false |
| [Bluetooth & devices > Mouse](ms-settings:easeofaccess-mousepointer) > Related settings | Additional mouse settings |  |
| [System > Display > Related settings > Advanced display](ms-settings:display-advanced) | Choose a refresh rate | <match your monitors refresh rate> |
| Control Panel\Hardware and Sound\Power Options\System Settings | When I press the power button: | Sleep |
| [Personalization > Taskbar](ms-settings:taskbar) > Taskbar items | Search | Off |
| [Personalization > Taskbar](ms-settings:taskbar) > Taskbar items | Widgets| Off |
| [Personalization > Taskbar](ms-settings:taskbar) > Taskbar items | Chat | Off |
| [Personalization > Colors](ms-settings:personalization-colors) | Accent color | Manual (#5679a4) |
| Apps > Advanced app settings > App execution aliases | Terminal | Off |
| Apps > Advanced app settings > App execution aliases | Terminal Preview | On |

## Windows Subsystem for Linux
### Enable WSL
1. Apps > Optional Features > More Windows features > Enable "Windows Subsystem for Linux".
1. Apps > Optional Features > More Windows features > Enable "Virtual Machine Platform".
1. Restart (?).
1. Open an Administrator PowerShell. Run `wsl --set-default-version 1` and `wsl --set-version Ubuntu 1`.
1. Restart.
1. `wsl --install -d Ubuntu`

:::tip
You can uninstall distributions with the following:
```shell
wsl --unregister Ubuntu
```
:::

:::tip
When installing xdg-open-wsl, you may need to use the `--break-system-packages` flag.
```shell
pip3 install --user --upgrade pip --break-system-packages
pip install --user git+https://github.com/cpbotha/xdg-open-wsl.git
```
:::

---

## Next Steps
1. Login to accounts.
1. Load Windows-specific dotfiles.

## References
* [Windows Settings URLs](https://docs.microsoft.com/en-us/windows/uwp/launch-resume/launch-settings-app)
* [xdg-open-wsl](https://github.com/cpbotha/xdg-open-wsl)
* [wsl-sudo](https://github.com/Chronial/wsl-sudo)