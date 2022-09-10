---
layout: post
excerpt: Blog
title: 'for Loop in Java'
description: 'Discover how to work with the for loop in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, for loop, for, loop, loops, post'
date: 2022-02-25
categories: [Java]
---

In this post, you will learn how to work with the for loop so that you can use that same knowledge and thus evolve.

- a cycle allows executing an instruction or a set of instructions several times;
- the for cycle goes around (iterates) according to a certain range.

```java
package com.caffeinealgorithm.programminginjava;

public class ForLoop {
  public void Run() {
    String[] schoolSupplies = new String[] {
        "Backpack",
        "Case",
        "Pencil",
        "Eraser",
        "Sharpen",
        "Scissors"
    };

    /*
      System.out.println(schoolSupplies[0]);
      System.out.println(schoolSupplies[1]);
    */

    for (int index = 0; index < schoolSupplies.length; index++)
      System.out.printf("schoolSupplies[%d]: %s\n", index, schoolSupplies[index]);
  }
}

/*
  schoolSupplies[0]: Backpack
  schoolSupplies[1]: Case
  schoolSupplies[2]: Pencil
  schoolSupplies[3]: Eraser
  schoolSupplies[4]: Sharpen
  schoolSupplies[5]: Scissors
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/aKgPE8bar_Y" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/aKgPE8bar_Y){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/ciclo-for-em-java/){:target="\_blank"}.

### _Happy coding!_
