---
layout: post
excerpt: Blog
title: 'Inheritance in C#'
description: 'Discover how to work with inheritance in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, inheritance, post'
date: 2021-12-27
categories: [C#]
---

In this post, you will learn how to work with inheritance so that you can use that same knowledge and thus evolve.

- inheritance is a mechanism by which a class (subclass) can extend another class (superclass) to take advantage of its possible variables (attributes) and its behavior (methods);
- a class can only inherit from only one class;
- protected boils down to the possibility of access only within the class itself or within a class derived from it.

```csharp
using System;

namespace Base {
  class Inheritance {
    public void Run() {
      var person = new Son();
      person.Information();
      person.FavoriteFood();

      /*
        Name: Nelson Silva
        Age: 25
        My favorite food is seafood rice.
      */
    }
  }

  class Dad {
    protected string lastName = "Silva";

    public void FavoriteFood() {
      Console.WriteLine("My favorite food is seafood rice.");
    }
  }

  class Son : Dad {
    private string firstName = "Nelson";
    private int age = 25;

    public void Information() {
      Console.WriteLine($"Name: {firstName} {lastName}");
      Console.WriteLine($"Age: {age}");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/kDKbnI-opqE" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/kDKbnI-opqE){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/heranca-em-csharp/){:target="\_blank"}.

### _Happy coding!_
