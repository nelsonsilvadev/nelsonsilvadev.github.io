---
layout: post
excerpt: Blog
title: 'Methods I in C#'
description: 'Discover how to work with two specific methods (Substring() and Split()) in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, substring, split, methods, method, functions, function, post'
date: 2022-01-26
categories: [C#]
---

In this post, you will learn how to work with two specific methods (`Substring()` and `Split()`) so that you can use that same knowledge and thus evolve.

`Substring()` | Returns a substring (a new string with characters from a certain range) according to the start index and length, the length being optional
`Split()` | Divides a set of characters (according to a given parameter/argument) and returns it into subsets of characters, that is, returns an array of strings (Class Regex refers to the use of regular expressions)

```csharp
using System;
using System.Text.RegularExpressions;

namespace Base {
  class MethodsI {
    private string oneTwoThree = "OneTwoThree", name = "Nelson Gomes da Silva";

    public void Run() {
      // Substring()
      Console.WriteLine($"1: {oneTwoThree.Substring(0, 2)}");
      Console.WriteLine($"2: {oneTwoThree.Substring(2, 4)}");
      Console.WriteLine($"3: {oneTwoThree.Substring(6)}");

      // Split()
      var words = name.Split(' ');

      foreach (var word in words)
        Console.WriteLine($"Word: {word}");

      var _words = Regex.Split(name, " Gomes da ");
      Console.WriteLine($"Name: {_words[0]} {_words[1]}");
    }
  }
}

/*
  1: One
  2: Two
  3: Three
  Word: Nelson
  Word: Gomes
  Word: da
  Word: Silva
  Name: Nelson Silva
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/nLboEkX1VNI" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/nLboEkX1VNI){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/metodos-i-em-csharp/){:target="\_blank"}.

### _Happy coding!_
