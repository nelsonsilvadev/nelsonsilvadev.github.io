---
layout: post
excerpt: Blog
title: 'Thread Class in Java'
description: 'Discover how to work with the Thread class in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, thread class, thread, class, post'
date: 2022-04-05
categories: [Java]
---

In this post, you will learn how to work with the Thread class so that you can use that same knowledge and thus evolve.

- this class allows the creation/control of a certain process and it is possible to define its priority and obtain its status;
- the thread is basically a task.

`Thread (object).start()` | Initiation determined thread that had been instantiated
`Thread (object).join()` | Blocks the initial thread (the calling thread) until the current thread ends
`Thread.sleep()` | Suspends the current thread for the specified time (time in milliseconds)

```java
package com.caffeinealgorithm.programminginjava;

public class ThreadClass {
  private Thread thread;

  public void Run() {
    thread = new Thread(this::executeThread);
    thread.start();

    for (int index = 1; index <= 5; index++) {
      System.out.printf("Run(): #%d\n", index);

      try {
        Thread.sleep(1000);
      }
      catch (InterruptedException exception) {
        System.out.println(exception);
      }
    }

    System.out.println("The Run() thread terminated.");

    try {
      thread.join();
    }
    catch (InterruptedException exception) {
      System.out.println(exception);
    }

    System.out.println("The executeThread() thread terminated.");
  }

  private void executeThread() {
    for (int index = 1; index <= 10; index++) {
      System.out.printf("executeThread(): #%d\n", index);

      try {
        Thread.sleep(1000);
      }
      catch (InterruptedException exception) {
        System.out.println(exception);
      }
    }
  }
}

/*
  Run(): #1
  executeThread(): #1
  Run(): #2
  executeThread(): #2
  Run(): #3
  executeThread(): #3
  Run(): #4
  executeThread(): #4
  Run(): #5
  executeThread(): #5
  The Run() terminated.
  executeThread(): #6
  executeThread(): #7
  executeThread(): #8
  executeThread(): #9
  executeThread(): #10
  The executeThread() thread terminated.
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Crk467wQmQg" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/Crk467wQmQg){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220405/classe-thread-em-java/){:target="\_blank"}.

### _Happy coding!_
