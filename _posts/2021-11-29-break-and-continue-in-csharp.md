---
layout: post
excerpt: Blog
title: 'break and continue in C#'
description: 'Discover how to work with break and continue in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, break and continue, break, continue, post'
date: 2021-11-29
categories: [C#]
---

In this post, you will learn how to work with break and continue so that you can use that same knowledge and thus evolve.

- break makes the life of the cycle come to an end, that is, makes it not iterate through anything else;
- continue ignores the entire content of the loop that is following from itself and automatically moves to the next iteration.

```csharp
using System;
using System.Collections.Generic;

namespace Base {
  class BreakAndContinue {
    public void Run() {
      int counter = 0;
      List<string> animals = new List<string>() {
        "Dog",
        "Cat",
        "Chicken",
        "Rabbit",
        "Lion"
      };

      foreach (string animal in animals) {
        Console.WriteLine($"Animal: {animal}");

        if (animal == "Chicken")
          break;
      }

      while (counter < 10) {
        counter++;

        if (counter == 5)
          continue;

        Console.WriteLine($"Counter: {counter}");
      }
    }
  }
}

/*
  Animal: Dog
  Animal: Cat
  Animal: Chicken
  Counter: 1
  Counter: 2
  Counter: 3
  Counter: 4
  Counter: 6
  Counter: 7
  Counter: 8
  Counter: 9
  Counter: 10
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/b4bLQ0qf5gY" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/b4bLQ0qf5gY){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211129/break-e-continue-em-csharp/){:target="\_blank"}.

### _Happy coding!_
