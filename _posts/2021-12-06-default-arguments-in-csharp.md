---
layout: post
excerpt: Blog
title: 'Default Arguments in C#'
description: 'Discover how to work with default arguments in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, default arguments, default, arguments, argument, post'
date: 2021-12-06
categories: [C#]
---

In this post, you will learn how to work with default arguments so that you can use that same knowledge and thus evolve.

- default arguments are intended to use their default value when the user does not send any value for that argument.

```csharp
using System;

namespace Base {
  class DefaultArguments {
    public void Run() {
      DoorState(false);
    }

    public void DoorState(bool state = true) {
      if (state)
        Console.WriteLine("The door is opened.");
      else {
        Console.WriteLine("The door is closed.");
      }
    }
  }
}

// The door is closed.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/9Dv8IR1Hy5U" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/9Dv8IR1Hy5U){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211206/argumentos-padrao-em-csharp/){:target="\_blank"}.

### _Happy coding!_
