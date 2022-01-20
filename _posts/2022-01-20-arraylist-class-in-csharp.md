---
layout: post
excerpt: Blog
title: 'ArrayList Class in C#'
description: 'Discover how to work with the ArrayList class in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, arraylist class, arraylist, class, arrays, array, post'
date: 2022-01-20
categories: [C#]
---

In this post, you will learn how to work with the ArrayList class so that you can use that same knowledge and thus evolve.

- this class (belonging to the System.Collections library) is an ordered set of values (of type object) that dynamically resizes and its capacity increases according to the number of values that are added (only if space is needed);
- those values that make up an ArrayList are called elements.

```csharp
using System;
using System.Collections;

namespace Base {
  class ArrayListClass {
    private ArrayList schoolSupplies = new ArrayList() {
      "Backpack",
      "Case",
      "Pencil",
      "Eraser"
    };

    public void Run() {
      schoolSupplies.Add("Sharpen");
      schoolSupplies.Add("Scissors");

      schoolSupplies.Remove("Backpack");
      schoolSupplies.Reverse();
      // schoolSupplies.Clear();

      Console.WriteLine($"Number of school supplies: {schoolSupplies.Count}");

      foreach (var schoolSupply in schoolSupplies)
        Console.WriteLine($"School supply: {schoolSupply}");
    }
  }
}

/*
  Number of school supplies: 5
  School supply: Scissors
  School supply: Sharpen
  School supply: Eraser
  School supply: Pencil
  School supply: Case
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/BKogMn09eBo" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/BKogMn09eBo){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220120/classe-arraylist-em-csharp/){:target="\_blank"}.

### _Happy coding!_
