---
layout: post
excerpt: Blog
title: 'Thread Class in C#'
description: 'Discover how to work with the Thread class in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, thread class, thread, class, post'
date: 2022-01-18
categories: [C#]
---

In this post, you will learn how to work with the Thread class so that you can use that same knowledge and thus evolve.

- this class (belonging to the System.Threading library) allows the creation/control of a certain process and it is possible to define its priority and obtain its status;
- the thread is basically a task.

`Thread (object).Start()` | Starts the particular thread that was instantiated
`Thread (object).Join()` | Block the starting (calling) thread until the current thread ends
`Sleep()` | Suspend the current thread for the specified time (time in milliseconds)

```csharp
using System;
using System.Threading;

namespace Base {
  class ThreadClass {
    private Thread thread;

    public void Run() {
      thread = new Thread(ExecuteThread);
      thread.Start();

      for (int index = 1; index <= 5; index++) {
        Console.WriteLine($"Run() #{index}");
        Thread.Sleep(1000);
      }

      Console.WriteLine("The Run() thread terminated.");

      thread.Join();

      Console.WriteLine("The ExecuteThread() thread terminated.");
    }

    private void ExecuteThread() {
      for (int index = 1; index <= 10; index++) {
        Console.WriteLine($"ExecuteThread() #{index}");
        Thread.Sleep(1000);
      }
    }
  }
}

/*
  Run() #1
  ExecuteThread() #1
  Run() #2
  ExecuteThread() #2
  Run() #3
  ExecuteThread() #3
  Run() #4
  ExecuteThread() #4
  Run() #5
  ExecuteThread() #5
  The Run() thread terminated.
  ExecuteThread() #6
  ExecuteThread() #7
  ExecuteThread() #8
  ExecuteThread() #9
  ExecuteThread() #10
  The ExecuteThread() thread terminated.
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/N1ZSoxB80B0" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/N1ZSoxB80B0){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220118/classe-thread-em-csharp/){:target="\_blank"}.

### _Happy coding!_
