# Motivations

Today's world is all about **simplicity**. Sweeping away the mudane and maximizing focus on things that actually *matter*. The things that produce the most impact, whether it be in our personal lives or our professional ones.

In the professional world, [Slack](https://slack.com) has come to rescue by providing a single centralized place for really just about everything. A huge part of that magic is their developer platform for creating Slack apps. It provides companies with great, simple tools to automate repetitive tasks, engage employees, and make communication more effective.

I've been a fan of the platform for quite some time, having written multiple apps for [MacPaw](https://macpaw.com), where I work as a Product Manager. 

But when [COVID-19](https://en.wikipedia.org/wiki/COVID-19_pandemic) took the world by surprise, a lot of companies were faced with new challenges. And judging by the available statistics and my own personal experience, apps became an ever more central part of the workplace. 

I found myself writing more Slack apps, and before long, there was an entire Slack app backlog at work, as well as of ideas for personal projects.

But the one issue with Slack's wonderful platform is how UIs are composed. The [Slack Block Kit](https://api.slack.com/block-kit) framework is super powerful, but when it comes to code maintainability, it's a place where there's room for growth.

As such, I set out to create **Block Builder**, in hopes to make the code for building Slack apps: 

* A tons more maintainable.
* A lot more reusable.
* A little more testable.

I spend a good amount of time around macOS and iOS developers, so I knew a bit about how UIs are composed in Swift, with the [SwiftUI](https://developer.apple.com/documentation/swiftui), and found it extremely straightforward and declarative.

So I set out to find a way to compose Slack app UI in a similar way. So others and myself can create awesome experiences without having to memorize the format of the JSON payloads for the Slack API.

Enjoy!