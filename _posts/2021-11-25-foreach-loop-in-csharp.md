---
layout: post
excerpt: Blog
title: 'foreach Loop in C#'
description: 'Discover how to work with foreach loop in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, foreach loop, foreach, loop, loops, post'
date: 2021-11-25
categories: [C#]
---

In this post, you will learn how to work with foreach loop so that you can use that same knowledge and thus evolve.

- a cycle allows executing an instruction or a set of instructions several times;
- the foreach loop loops (iterates) depending on the items in a sequence.

```csharp
using System;
using System.Collections.Generic;

namespace Base {
  class ForeachLoop {
    public void Run() {
      string community = "Caffeine Algorithm";
      List<string> countries = new List<string>() {
        "Portugal",
        "Brazil",
        "Spain",
        "France",
        "Italy",
        "Australia",
        "India"
      };

      /*
        foreach (char character in community) {
          Console.WriteLine($"Character: {character}");
        }
      */

      foreach (string country in countries) {
        Console.WriteLine($"Country: {country}");
      }
    }
  }
}

/*
  Country: Portugal
  Country: Brazil
  Country: Spain
  Country: France
  Country: Italy
  Country: Australia
  Country: India
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/seMBMqxe8KA" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/seMBMqxe8KA){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/ciclo-foreach-em-csharp/){:target="\_blank"}.

### _Happy coding!_
