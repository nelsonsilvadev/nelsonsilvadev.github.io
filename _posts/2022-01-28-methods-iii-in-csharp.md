---
layout: post
excerpt: Blog
title: 'Methods III in C#'
description: 'Discover how to work with two specific methods (Remove() and Replace()) in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, remove, replace, methods, method, functions, function, post'
date: 2022-01-28
categories: [C#]
---

In this post, you will learn how to work with two specific methods (`Remove()` and `Replace()`) so that you can use that same knowledge and thus evolve.

`Remove()` | Returns a new set of characters, where that same set starts from the index and goes up to the given length (the length part is completely optional)
`Replace()` | Returns a new string, in which all occurrences of a given string are replaced by another specified string

```csharp
using System;

namespace Base {
  class MethodsIII {
    private string alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", name = "Nelson | Silva";

    public void Run() {
      // Remove()
      Console.WriteLine($"Alphabet up to the letter N: {alphabet.Remove(14)}");

      var indexX = name.IndexOf(' ');
      var indexY = name.IndexOf(' ', indexX + 1);
      Console.WriteLine($"Name: {name.Remove(indexX, indexY - indexX)}");

      // Replace()
      var favProgLanguage = "My favorite programming language was once C#.";
      Console.WriteLine(favProgLanguage.Replace("was once", "is"));
    }
  }
}

/*
  Alphabet up to the letter N: ABCDEFGHIJKLMN
  Name: Nelson Silva
  My favorite programming language is C#.
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/x1sAO_ePZdI" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/x1sAO_ePZdI){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/metodos-iii-em-csharp/){:target="\_blank"}.

### _Happy coding!_
