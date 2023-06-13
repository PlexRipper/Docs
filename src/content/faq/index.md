---
title: Frequently Asked Questions
---

# Frequently Asked Questions

## How can I help?

Check the [Contributing page](/contributing/overview) to see what you can do to help!

## How can I show my appreciation?

The rising number of GitHub stars, docker pulls and users going out of their way to make bug reports and give feedback
is already the biggest honor for me.

- You can give a star on the GitHub pages for [PlexRipper](https://github.com/PlexRipper/PlexRipper)
  and [Docs](https://github.com/PlexRipper/Docs).
- You can give a star on the Docker page for [PlexRipper](https://hub.docker.com/r/plexripper/plexripper/).

## Is PlexRipper detectable by Plex server owners?

Yes and no.

Yes, in the sense that they can always cross-reference the IP connecting to the server which is using a lot
of bandwidth with a PlexAccount that has access to their server.

No, in the sense that programs such as Tautalli, etc. will not trigger.

Take this with a grain of salt, as this might change at any moment and please make an issue if you are aware of some
vulnerability in PlexRipper.

## Will Plex ban my account for the use of PlexRipper?

Most likely not, but I do not own Plex, so I can't give guarantees. If you want to be extra safe then make a dummy
account, and then use that account to request access to various Plex servers. Your real account will then never be
exposed to a Plex server its downloading from.

## How is PlexRipper spelled?

Ah yes, the main question in life. Even I, as its almighty creator, am not too sure. But in my infinite, most likely
misspelling, wisdom have settled on "PlexRipper". Even though the capital R in a single word doesn't make too much
sense.

## What is the difference between PlexRipper stable and dev?

The dev branch contains all the latest under development changes.

## Which browsers are supported by PlexRipper?

Officially, all chromium based browsers such as [Google Chrome](https://www.google.com/chrome/)
and [Ungoogled Chromium](https://github.com/ungoogled-software/ungoogled-chromium).

[Brave](https://brave.com/) works as well, just disable the Brave shields functionality on PlexRipper. See
this [issue](https://github.com/brave/brave-browser/issues/19037#issuecomment-1287769602).

It "should" however work with all browsers, except ancient ones like Internet
Explorer and trash ones like Safari. Don't expect support for either of those.

## I tried to use my username to setup my Plex account in PlexRipper but it's not working?

Make sure that the "Allow username to be used when signing in" is checked.

1. Go to [plex.tv](https://www.plex.tv/) and sign-in
2. Go to Settings -> Account
3. Click on the username and the below option will appear
4. Make sure it's checked and then click "Save Changes"

![](/img/faq/username-plex-question.png){.responsive-img}

## The background of PlexRipper is dark gray, is that normal?

No it should be the almost the same background you see on this website. Make sure you're not running an extensions such as [Dark Reader](https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopoojfekhnkhdbieeh?hl=en) that makes the websites you visit dark

## Is this project dead? Why no updates? Can you hurry up?

Check the [homepage](/) for what is currently happening.

## I'm impressed with your work, can I hire you?

Yes, I ([JasonLandbridge](https://github.com/JasonLandbridge)) work as a freelance Vue.js/.NET developer, and I'm
always looking forward to the next awesome project. But if you're secretly hoping for more updates on PlexRipper, then
you might not want to hire me ;-)
