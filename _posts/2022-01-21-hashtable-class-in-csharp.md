---
layout: post
excerpt: Blog
title: 'Hashtable Class in C#'
description: 'Discover how to work with the Hashtable class in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, hashtable class, hashtable, class, hash, post'
date: 2022-01-21
categories: [C#]
---

In this post, you will learn how to work with the Hashtable class so that you can use that same knowledge and thus evolve.

- this class (belonging to the System.Collections library) represents a collection of associations between value pairs;
- the first element of the pair is called the key (identifier) and the other is called the content;
- the collection of value pair associations are organized according to the hash code of the key.

```csharp
using System;
using System.Collections;

namespace Base {
  class HashtableClass {
    private Hashtable people = new Hashtable() {
      { "Nelson Silva", 25 },
      { "Larissa Fernandes", 37 }
    };

    public void Run() {
      people.Add("Pedro Henrique", 52);
      people.Add("Raquel Soares", 68);

      people["Pedro Henrique"] = 100;
      people.Remove("Larissa Fernandes");
      people.Clear();

      Console.WriteLine($"Number of people: {people.Count}");

      foreach (DictionaryEntry person in people) {
        Console.WriteLine($"Name: {person.Key}");
        Console.WriteLine($"Age: {person.Value}");
      }
    }
  }
}

/*
  Number of people: 3
  Name: Raquel Soares
  Age: 68
  Name: Nelson Silva
  Age: 25
  Name: Pedro Henrique
  Age: 100
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/QnhCVLqYcJM" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/QnhCVLqYcJM){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220121/classe-hashtable-em-csharp/){:target="\_blank"}.

### _Happy coding!_
