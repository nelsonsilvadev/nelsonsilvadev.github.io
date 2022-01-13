---
layout: post
excerpt: Blog
title: 'Key Arguments in C#'
description: 'Discover how to work with key arguments in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, key arguments, arguments, key, argument, post'
date: 2021-12-07
categories: [C#]
---

In this post, you will learn how to work with key arguments so that you can use that same knowledge and thus evolve.

- the key arguments are intended to make it unnecessary to call the function arguments in an orderly fashion.

```csharp
using System;

namespace Base {
  class KeyArguments {
    public void Run() {
      PrintABC(c: 1, a: 2, b: 3);
    }

    public void PrintABC(int a, int b, int c) {
      Console.WriteLine($"a value: {a}");
      Console.WriteLine($"b value: {b}");
      Console.WriteLine($"c value: {c}");
    }
  }
}

/*
  a value: 2
  b value: 3
  c value: 1
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/yXu3nkuCn1I" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/yXu3nkuCn1I){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211207/argumentos-chave-em-csharp/){:target="\_blank"}.

### _Happy coding!_
