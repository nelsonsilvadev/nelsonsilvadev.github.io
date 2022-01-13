---
layout: post
excerpt: Blog
title: 'delegate in C#'
description: 'Discover how to work with delegate in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, delegate, post'
date: 2022-01-04
categories: [C#]
---

In this post, you will learn how to work with delegate so that you can use that same knowledge and thus evolve.

- the delegate is a type that represents references to methods with a parameter list and a return type;
- in short, when a delegate is instantiated, a given instance can be associated with any method with a compatible signature and return type;
- it's important to know that the delegate allows multiple methods to be called via a single event.

```csharp
using System;

namespace Base {
  class Delegate {
    private delegate void SetOfMethods(string name);

    public void Run() {
      Console.Write("Enter your first and last name: ");
      var name = Console.ReadLine();

      var setOfMethods = new SetOfMethods(PrintName);
      setOfMethods += PrintNameInUppercase;
      setOfMethods += PrintNameInLowercase;
      setOfMethods(name);
    }

    public void PrintName(string name) {
      Console.WriteLine($"Name: {name}");
    }

    public void PrintNameInUppercase(string name) {
      Console.WriteLine($"Name in uppercase: {name.ToUpper()}");
    }

    public void PrintNameInLowercase(string name) {
      Console.WriteLine($"Name in lowercase: {name.ToLower()}");
    }
  }
}

/*
  Name: Nelson Silva
  Name in uppercase: NELSON SILVA
  Name in lowercase: nelson silva
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/bbXsVSa952Y" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/bbXsVSa952Y){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220104/delegate-em-csharp/){:target="\_blank"}.

### _Happy coding!_
