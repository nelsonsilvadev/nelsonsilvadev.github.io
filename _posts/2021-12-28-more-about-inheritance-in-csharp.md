---
layout: post
excerpt: Blog
title: 'More about Inheritance in C#'
description: 'Discover how to work with more about inheritance in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, inheritance, post'
date: 2021-12-28
categories: [C#]
---

In this post, you will learn how to work with more about inheritance so that you can use that same knowledge and thus evolve.

- inheritance is a mechanism by which a class (subclass) can extend another class (superclass) to take advantage of its possible variables (attributes) and its behavior (methods);
- a class can only inherit from only one class;
- new is for creating something new, that is, a new object, a new array, a new list, a new dictionary and so on.
- the virtual is used to modify a declaration of a certain method, property or event and allows that same to be substituted in a derived class;
- the override makes it possible to extend or modify the implementation of an inherited method, property or abstract event (we'll talk about the abstract in the next video) or virtual.

```csharp
using System;

namespace Base {
  class MoreAboutInheritance {
    public void Run() {
      var person = new Son();
      person.Information();
      person.FavoriteFood();

      /*
        Name: Nelson Silva
        Age: 25
        My favorite food is lasagna.
      */
    }
  }

  class Dad {
    protected string lastName = "Silva";

    public virtual void FavoriteFood() {
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

    public override void FavoriteFood() {
      Console.WriteLine("My favorite food is lasagna.");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/bGmyHB0Acvw" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/bGmyHB0Acvw){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211228/mais-sobre-a-heranca-em-csharp/){:target="\_blank"}.

### _Happy coding!_
