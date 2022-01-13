---
layout: post
excerpt: Blog
title: 'is and as in C#'
description: 'Discover how to work with is and as in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, is and as, is, as, post'
date: 2022-01-05
categories: [C#]
---

In this post, you will learn how to work with is and as so that you can use that same knowledge and thus evolve.

- is serves to check if a certain object is compatible with a certain type;
- a as works as if it were a conversion operation and if such a conversion is not possible, null is returned.

```csharp
using System;

namespace Base {
  class IsAndAs {
    private string organization = "Caffeine Algorithm", name = string.Empty;
    private object _name = "Nelson Silva";

    public void Run() {
      if (organization is string)
        Console.WriteLine("The attribute \"organization\" is of type string.");
      else
        Console.WriteLine("The attribute \"organization\" is not of type string.");

      name = _name as string;

      if (name is string)
        Console.WriteLine($"Name: {name}");
    }
  }
}

/*
  The attribute "organization" is of type string.
  Name: Nelson Silva
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/2kgNJVpXB40" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/2kgNJVpXB40){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220105/is-e-as-em-csharp/){:target="\_blank"}.

### _Happy coding!_
