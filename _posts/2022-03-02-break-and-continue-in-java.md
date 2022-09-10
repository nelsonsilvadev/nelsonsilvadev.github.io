---
layout: post
excerpt: Blog
title: 'break and continue in Java'
description: 'Discover how to work with break and continue in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, break and continue, break, continue, post'
date: 2022-03-02
categories: [Java]
---

In this post, you will learn how to work with break and continue so that you can use that same knowledge and thus evolve.

- break makes the life of the cycle come to an end, that is, makes it not iterate through anything else;
- continue ignores the entire content of the loop that is following from itself and automatically moves to the next iteration.

```java
package com.caffeinealgorithm.programminginjava;

import java.util.ArrayList;
import java.util.List;

public class BreakAndContinue {
  public void Run() {
    List<String> animals = new ArrayList<>();
    int counter = 0;

    animals.add("Dog");
    animals.add("Cat");
    animals.add("Chicken");
    animals.add("Rabbit");
    animals.add("Lion");

    for (String animal : animals) {
      System.out.printf("Animal: %s\n", animal);

      if (animal == "Chicken")
        break;
    }

    while (counter < 10) {
      counter++;

      if (counter == 5)
        continue;

      System.out.printf("Counter: %d\n", counter);
    }
  }
}

/*
  Animal: Dog
  Animal: Cat
  Animal: Chicken
  Counter: 1
  Counter: 2
  Counter: 3
  Counter: 4
  Counter: 6
  Counter: 7
  Counter: 8
  Counter: 9
  Counter: 10
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/Wbe6-a8go0o" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/Wbe6-a8go0o){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/break-e-continue-em-java/){:target="\_blank"}.

### _Happy coding!_
