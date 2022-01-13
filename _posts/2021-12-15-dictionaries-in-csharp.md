---
layout: post
excerpt: Blog
title: 'Dictionaries in C#'
description: 'Discover how to work with dictionaries in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, dictionaries, dictionary, post'
date: 2021-12-15
categories: [C#]
---

In this post, you will learn how to work with dictionaries so that you can use that same knowledge and thus evolve.

- dictionaries are data structures that implement mappings (collection of associations between value pairs);
- the first element of the pair is called the key (identifier) and the other is called the content.

```csharp
using System;
using System.Collections.Generic;

namespace Base {
  class Dictionaries {
    public void Run() {
      Dictionary<string, int> people = new Dictionary<string, int>() {
        { "Nelson Silva", 25 },
        { "Larissa Fernandes", 37 }
      };

      people.Add("Pedro Henrique", 52);
      people.Add("Raquel Soares", 68);
      people["Pedro Henrique"] = 100;
      people.Remove("Larissa Fernandes");
      // people.Clear();

      Console.WriteLine($"Number of people: {people.Count}\n");

      foreach (KeyValuePair<string, int> person in people) {
        Console.WriteLine($"Name: {person.Key}");
        Console.WriteLine($"Age: {person.Value}");
      }
    }
  }
}

/*
  Number of people: 3

  Name: Nelson Silva
  Age: 25
  Name: Pedro Henrique
  Age: 100
  Name: Raquel Soares
  Age: 68
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/8q8-qNsEZGs" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/8q8-qNsEZGs){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211215/dicionarios-em-csharp/){:target="\_blank"}.

### _Happy coding!_
