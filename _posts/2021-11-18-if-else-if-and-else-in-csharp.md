---
layout: post
excerpt: Blog
title: 'if, else if and else in C#'
description: 'Discover how to work with decisions (if, else if and else) in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, if, else if, else, conditions, condition, post'
date: 2021-11-18
categories: [C#]
---

In this post, you will learn how to work with decisions (if, else if and else) so that you can use that same knowledge and thus evolve.

```csharp
using System;

namespace Base {
  class IfElseIfAndElse {
    /*
      (if - if) condition is true {
        the code inside the if is executed
      }
      (else if - otherwise if) condition is true (else if only occurs if if condition is false) {
        code inside else if is executed
      }
      (else - if not) no condition (only occurs if condition of if and else if are false) {
        the code inside the else is executed
      }
    */

    public void Run() {
      int x = 30;

      if (x == 10) {
        Console.WriteLine("The value of x is equal to 10.");
      }
      else if (x == 20) {
        Console.WriteLine("The value of x is equal to 20.");
      }
      else {
        Console.WriteLine("The value of x is different from 10 and 20.");
      }
    }
  }
}

// The value of x is different from 10 and 20.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/x7FJnvDzVtg" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/x7FJnvDzVtg){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/if-else-if-e-else-em-csharp/){:target="\_blank"}.

### _Happy coding!_
