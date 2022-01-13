---
layout: post
excerpt: Blog
title: 'return in C#'
description: 'Discover how to work with return in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, return, post'
date: 2021-12-02
categories: [C#]
---

In this post, you will learn how to work with return so that you can use that same knowledge and thus evolve.

- the return aims to return something from a function so that when calling this function, you have access to the returned value.

```csharp
using System;

namespace Base {
  class Return {
    public void Run() {
      Console.WriteLine($"Addition result: {Addition()}");
    }

    public int Addition() {
      int result = 0;

      for (int value = 1; value <= 10; value++)
        result += value;

      return result;
    }
  }
}

// Addition result: 55
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/-WPMAO60yQ8" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/-WPMAO60yQ8){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211202/return-em-csharp/){:target="\_blank"}.

### _Happy coding!_
