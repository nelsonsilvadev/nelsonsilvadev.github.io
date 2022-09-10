---
layout: post
excerpt: Blog
title: 'Queue Class in C#'
description: 'Discover how to work with the Queue class in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, queue class, queue, class, post'
date: 2022-01-25
categories: [C#]
---

In this post, you will learn how to work with the Queue class so that you can use that same knowledge and thus evolve.

- this class is basically a queue (due to the way it works) and represents a FIFO (First In - First Out) type collection, that is, the first value entered will always be the first one to leave;
- these values that make up a queue are called elements.

`Queue (object).Enqueue()` | Adds an object at the bottom of the queue
`Queue (object).Dequeue()` | Remove and return the object at the top of the queue
`Queue (object).Peek()` | Return the object at the top of the queue without removing it

```csharp
using System;
using System.Collections.Generic;

namespace Base {
  class QueueClass {
    private Queue<int> queue = new Queue<int>();
    private const int Multiplier = 10;
    private int number = 1;

    public void Run() {
      for (int index = 1; index <= 5; index++) {
        queue.Enqueue(number);
        number *= Multiplier;
      }

      PrintQueue();

      Console.WriteLine($"\nRemoving the number {queue.Dequeue()} from the queue with the Dequeue() method.\n");

      PrintQueue();

      Console.WriteLine($"\nThe number at the top of the queue is {queue.Peek()}.");
    }

    private void PrintQueue() {
      foreach (var number in queue)
        Console.WriteLine(number);
    }
  }
}

/*
  1
  10
  100
  1000
  10000

  Removing number 1 from the queue with the Dequeue() method.

  10
  100
  1000
  10000

  The number at the top of the queue is 10.
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/9RrewsVO_ws" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/9RrewsVO_ws){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/classe-queue-em-csharp/){:target="\_blank"}.

### _Happy coding!_
