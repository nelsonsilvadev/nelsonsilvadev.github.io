---
layout: post
excerpt: Blog
title: 'Debug Class in C#'
description: 'Discover how to work with the Debug class in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, debug class, debug, class, post'
date: 2022-01-19
categories: [C#]
---

In this post, you will learn how to work with the Debug class so that you can use that same knowledge and thus evolve.

- this class (belonging to the System.Diagnostics library) provides a set of methods and properties that help debug the code

`Write()` | Prints all of its content in the "Diagnostic Tools" window without changing the line
`WriteLine()` | Prints all its content in the "Diagnostic Tools" window and changes the line
`Print()` | Does the exact same thing

```csharp
using System.Diagnostics;

namespace Base {
  class DebugClass {
    private string[] colors = new string[] {
      "Blue",
      "Green",
      "Yellow",
      "Red",
      "Orange"
    };

    public void Run() {
      for (int index = 0; index < colors.Length; index++)
        Debug.WriteLine($"colors[{index}]: {colors[index]}");
    }
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/DU1TJ_QGS_s" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/DU1TJ_QGS_s){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/classe-debug-em-csharp/){:target="\_blank"}.

### _Happy coding!_
