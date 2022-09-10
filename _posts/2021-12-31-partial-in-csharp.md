---
layout: post
excerpt: Blog
title: 'partial in C#'
description: 'Discover how to work with partial in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, partial, post'
date: 2021-12-31
categories: [C#]
---

In this post, you will learn how to work with partial so that you can use that same knowledge and thus evolve.

- the partial is used to inform the compiler that the given class exists in another file (or much more than one);
- in short, using the partial we can have the same class in several files;
- it is important to know that the partial is used a lot when working in a team and that the methods can also use the partial;
- you cannot use access modifiers in partial methods.

```csharp
using System;

namespace Base {
  class Partial {
    public void Run() {
      var person = new Person();
      person.Information();

      /*
        Name: Nelson Silva
        Age: 25
      */
    }
  }

  partial class Person {
    private string firstName = "Nelson";
    partial void _Information();

    public void Information() {
      _Information();
    }
  }

  partial class Person {
    private string lastName = "Silva";
    private int age = 25;

    partial void _Information() {
      Console.WriteLine($"Name: {firstName} {lastName}");
      Console.WriteLine($"Age: {age}");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/xwk4Xx5-zO0" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/xwk4Xx5-zO0){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/partial-em-csharp/){:target="\_blank"}.

### _Happy coding!_
