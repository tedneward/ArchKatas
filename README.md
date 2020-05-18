# ArchKatas
This is a collection of Architectural Katas, in JSON format, for use as a database in Kata-driven apps.

## Wait, where's the actual site?
Go to [the official website](http://www.architecturalkatas.com) if you want to run one and ended up here by accident.

### What about that Heroku app?
That was created by somebody else who forked the code a while ago, and uploaded it to Heroku. Apparently they have better SEO than I do, which of course makes me laugh quite heartily. :-) I don't control that code, unfortunately, and I have no idea if they're going to update it to reflect this new approach. Before too long, when BitBucket shuts down Mercurial support, that old code will break, but I'll keep mine up and running. Sorry.

## Wait, there's no code here?!?
Nope. This is deliberate--this way this repository will only ever hold katas, and could potentially serve as a shared source of katas for other people who want to build their own front-ends. (Mobile app, fancier web app, whatever.) For an example, consider the [Architectural Katas CLI](https://github.com/tedneward/ArchKatasCLI) sister project to this one, or my [Architectural Katas Website](https://github.com/tedneward/ArchKatasCode) site that uses jQuery. Both use the Github REST API to query the root of this project for files ending in ".json" and use that as the list of katas from which to choose.

## How do I add a kata to the list?
Before, you had to email me. Bleah. Now, submit a PR!

## What's your plan going forward?
In a lot of ways, the system is "done", as in functional, but there's a couple of things I'd like to think about adding:

* **Parameterization.** There's some embedded-systems-only katas in here, and it would be nice to have the JSON reflect that somewhere in its structure, so people could filter out (or in) based on tags.

* **Customization.** There's probably some way to think about the website or CLI being able to pull from other repos that follow the same structure as this one. Much to think about there, because that would allow people to create their own (NDA-friendly) katas for use inside their company.

* **Complication!** Right now each of the katas has complications built directly into the kata--might be interesting to have some sort of "random complication factor" get added somehow to each kata, although doing so would probably require moving away from this GitHub-based (rather simple) approach to storing/using the katas.

And, of course, I remain open to suggestions from the audience.
