---
layout: post
excerpt: Blog
title: 'Convert Class in C#'
description: 'Discover how to work with the Convert class in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, convert class, convert, class, post'
date: 2022-01-06
categories: [C#]
---

In this post, you will learn how to work with the Convert class so that you can use that same knowledge and thus evolve.

- this class is intended to help (through its methods) in converting a base data type to another base data type.

```csharp
using System;

namespace Base {
  class ConvertClass {
    private string letter = "N", currentYear = "2021";
    private char _letter = ' ';
    private int _currentYear = 0;

    public void Run() {
      try {
        _letter = Convert.ToChar(letter);
        _currentYear = Convert.ToInt32(currentYear);
      }
      catch (Exception exception) {
        Console.WriteLine(exception);
      }
      finally {
        if (_letter != ' ')
          Console.WriteLine($"Letter: {_letter}");

        if (_currentYear != 0)
          Console.WriteLine($"Current year: {_currentYear}");
      }
    }
  }
}

/*
  Letter: N
  Current year: 2021
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/7nJbm-CN2XY" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/7nJbm-CN2XY){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/classe-convert-em-csharp/){:target="\_blank"}.

### _Happy coding!_
