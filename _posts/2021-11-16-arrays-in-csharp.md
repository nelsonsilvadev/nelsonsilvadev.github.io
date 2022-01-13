---
layout: post
excerpt: Blog
title: 'Arrays in C#'
description: 'Discover how to work with arrays in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, arrays, array, post'
date: 2021-11-16
categories: [C#]
---

In this post, you will learn how to work with arrays so that you can use that same knowledge and thus evolve.

- an array (vector) has a fixed size and is used to store a set of data in a sequential way;
- it is more useful to think of an array as a set of variables of the same type in which they are adjacently placed in memory;
- these variables are called elements and each of these is identified by an index.

```csharp
using System;

namespace Base {
  class Arrays {
    public void Run() {
      /*
        string[] colors = new string[5];

        colors[0] = "Blue";
        colors[1] = "Green";
        colors[2] = "Yellow";
        colors[3] = "Red";
        colors[4] = "Orange";
      */

      string[] colors = new string[] {
        "Blue",
        "Green",
        "Yellow",
        "Red",
        "Orange"
      };

      Console.WriteLine($"Number of colors: {colors.Length}"); // Number of colors: 5
      Console.WriteLine($"First color: {colors[0]}"); // First color: Blue
      Console.WriteLine($"Last color: {colors[colors.Length - 1]}"); // Last color: Orange
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Us3VJyBFbbY" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/Us3VJyBFbbY){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211116/arrays-em-csharp/){:target="\_blank"}.

### _Happy coding!_
