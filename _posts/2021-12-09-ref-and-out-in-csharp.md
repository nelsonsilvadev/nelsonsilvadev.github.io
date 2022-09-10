---
layout: post
excerpt: Blog
title: 'ref and out in C#'
description: 'Discover how to work with ref and out in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, ref and out, ref, out, post'
date: 2021-12-09
categories: [C#]
---

In this post, you will learn how to work with ref and out so that you can use that same knowledge and thus evolve.

- the ref and the out do pretty much the same thing (they create a link with the argument sent to the given function);
- if the content of that same argument changes, both change (inside and outside the function);
- the only difference that exists between ref and out is just for the compiler, the ref transmits to the compiler that the argument was initialized before entering the function while the out transmits that the argument will be initialized inside the function.

```csharp
using System;

namespace Base {
  class RefAndOut {
    public void Run() {
      int number = 0;

      Console.WriteLine($"Number before function: {number}");
      Out(out number);
      Console.WriteLine($"Number after function: {number}");
    }

    public void Normal(int number) {
      number = 1;
    }

    public void Ref(ref int number) {
      number = 2;
    }

    public void Out(out int number) {
      number = 3;
    }
  }
}

/*
  Number before function: 0
  Number after function: 3
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/IOUI--CFDFs" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/IOUI--CFDFs){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/ref-e-out-em-csharp/){:target="\_blank"}.

### _Happy coding!_
