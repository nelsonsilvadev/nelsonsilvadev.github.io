---
layout: post
excerpt: Blog
title: 'Methods II in C#'
description: 'Discover how to work with two specific methods (IndexOf() and Trim()) in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, indexof, trim, methods, method, functions, function, post'
date: 2022-01-27
categories: [C#]
---

In this post, you will learn how to work with two specific methods (`IndexOf()` and `Trim()`) so that you can use that same knowledge and thus evolve.

`IndexOf()` | Returns a substring from the first occurrence of a character (or even a set of characters) to the end of the given string
`Trim()` | Eliminates spaces present at the beginning and end of a string, that is, returns a modified copy of the original string

```csharp
using System;

namespace Base {
  class MethodsII {
    private string loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur.";

    public void Run() {
      // IndexOf()
      var index = 0;

      while ((index = loremIpsum.IndexOf('i', index)) != -1) {
        Console.WriteLine(loremIpsum.Substring(index));
        index++;
      }

      // Trim()
      Console.Write("Enter your first name: ");
      var firstName = Console.ReadLine();

      Console.Write("Enter your last name: ");
      var lastName = Console.ReadLine();

      Console.WriteLine($"Name (without using the Trim() method): {firstName} {lastName}");
      Console.WriteLine($"Name (using the Trim() method): {firstName.Trim()} {lastName.Trim()}");
    }
  }
}

/*
  ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur.
  it amet, consectetur adipiscing elit. Vestibulum consectetur.
  ipiscing elit. Vestibulum consectetur.
  iscing elit. Vestibulum consectetur.
  ing elit. Vestibulum consectetur.
  it. Vestibulum consectetur.
  ibulum consectetur.
  Enter your first name:          Nelson
  Enter your last name:    Silva
  Name (without using the Trim() method):          Nelson          Silva
  Name (using the Trim() method): Nelson Silva
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/r9h6UzvoRCE" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/r9h6UzvoRCE){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220127/metodos-ii-em-csharp/){:target="\_blank"}.

### _Happy coding!_
