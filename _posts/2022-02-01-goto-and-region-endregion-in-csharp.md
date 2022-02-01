---
layout: post
excerpt: Blog
title: 'goto and #region/#endregion in C#'
description: 'Discover how to work with goto and #region/#endregion in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, goto, #region, region, #endregion, endregion, post'
date: 2022-02-01
categories: [C#]
---

In this post, you will learn how to work with goto and #region/#endregion so that you can use that same knowledge and thus evolve.

- goto transfers control of our running application directly to a labeled piece of code;
- goto is widely used in switches and deeply nested loops;
- #region allows you to specify a piece of code that can be expanded or collapsed and is often used in large files (in this case, classes) with a lot of code because it has the advantage of concentrating (thus, the programmer's) only on the piece. of code that we are working on because the rest is hidden, that is, collected;
- to close a #region block #endregion is required.

```csharp
#region Libraries
using System;
#endregion

namespace Base {
  class GotoAndRegionEndregion {
    #region Run() method
    public void Run() {
      Console.WriteLine($"TestGoto() method result: {TestGoto()}");
    }
    #endregion

    #region TestGoto() method
    private int TestGoto() {
      var number = 0;

      for (int i = 1; i <= 10; i++) {
        for (int j = i; j <= 10; j++) {
          for (int k = 0; k <= 10; k++) {
            if (j == 5 && k == 5)
              goto FirstLoop;
          }

          number++;
        }

        FirstLoop:
          continue;
      }

      return number;
    }
    #endregion
  }
}

// TestGoto() method result: 25
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/lbgVj7NBFAg" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/lbgVj7NBFAg){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220201/goto-e-region-endregion-em-csharp/){:target="\_blank"}.

### _Happy coding!_
