---
layout: post
excerpt: Blog
title: 'Multidimensional Arrays in C#'
description: 'Discover how to work with multidimensional arrays in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, multidimensional arrays, arrays, multidimensional, array, post'
date: 2021-12-14
categories: [C#]
---

In this post, you will learn how to work with multidimensional arrays so that you can use that same knowledge and thus evolve.

- a multidimensional array (array) is basically a table with rows and columns or it can be much more than a table (depending on the number of values that make up the multidimensional array);
- has a fixed size and is used to store a dataset in a sequential way;
- it is important to remember that it is more useful to think of an array as a set of variables of the same type in which they are placed in memory adjacently;
- these variables are called elements and each one of these is identified by an index, and we have an index to identify a particular column and another index to identify a particular row.

```csharp
using System;

namespace Base {
  class MultidimensionalArrays {
    public void Run() {
      // [number of rows, number of columns]
      int[,] multidimensionalArray = new int[5, 4] {
        { 1, 2, 3, 4 },
        { 1, 1, 1, 1 },
        { 2, 2, 2, 2 },
        { 3, 3, 3, 3 },
        { 4, 4, 4, 4 }
      };

      for (int i = 0; i < multidimensionalArray.GetLength(0); i++) {
        for (int j = 0; j < multidimensionalArray.GetLength(1); j++) {
          Console.Write($"{multidimensionalArray[i, j]}\t");
        }

        Console.WriteLine();
      }
    }
  }
}

/*
  1  2  3  4
  1  1  1  1
  2  2  2  2
  3  3  3  3
  4  4  4  4
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/iv2-0xW8DpU" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/iv2-0xW8DpU){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211214/arrays-multidimensionais-em-csharp/){:target="\_blank"}.

### _Happy coding!_
