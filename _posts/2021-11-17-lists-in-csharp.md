---
layout: post
excerpt: Blog
title: 'Lists in C#'
description: 'Discover how to work with lists in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, lists, list, post'
date: 2021-11-17
categories: [C#]
---

In this post, you will learn how to work with lists so that you can use that same knowledge and thus evolve.

- a list is an ordered set of values and is much easier to manipulate than an array;
- the values that make up a list are called elements (just like in arrays).

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

namespace Base {
  class Lists {
    public void Run() {
      List<string> colors = new List<string>();

      colors.Add("Blue");
      colors.Add("Green");
      colors.Add("Yellow");
      colors.Add("Red");
      colors.Add("Orange");

      colors.Remove("Orange");
      colors.Reverse();
      colors.Sort();
      // colors.Clear();

      Console.WriteLine($"Number of colors: {colors.Count}"); // Number of colors: 4
      Console.WriteLine($"First color: {colors.First()}"); // First color: Yellow
      Console.WriteLine($"Last color: {colors.Last()}"); // Last color: Red
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Eov-gcwg9zc" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/Eov-gcwg9zc){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/listas-em-csharp/){:target="\_blank"}.

### _Happy coding!_
