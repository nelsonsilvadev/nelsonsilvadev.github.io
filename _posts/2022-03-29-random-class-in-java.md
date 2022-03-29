---
layout: post
excerpt: Blog
title: 'Random Class in Java'
description: 'Discover how to work with the Random class in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, random class, random, class, post'
date: 2022-03-29
categories: [Java]
---

In this post, you will learn how to work with the Random class so that you can use that same knowledge and thus evolve.

- this class represents a pseudorandom number generator and it produces a sequence of numbers that meet certain statistical requirements of randomness.

`Random (object).next<Type>` | Returns a random number and, depending on your signature, is also able to return a random number within a specified range

```java
package com.caffeinealgorithm.programminginjava;

import java.util.Random;

public class RandomClass {
  private Random random = new Random();

  public void Run() {
    System.out.printf("Random number up to 20: %d\n", random.nextInt(21));
    System.out.printf("Random number (double): %.2f\n", random.nextDouble());

    for (int index = 1; index <= 10; index++)
      System.out.printf("Random number #%d: %d\n", index, random.nextInt());
  }
}

/*
  Random number up to 20: 16
  Random number (double): 1.00
  Random number #1: -1738953879
  Random number #2: 52710053
  Random number #3: 1938113879
  Random number #4: 1805001211
  Random number #5: -129242103
  Random number #6: 1301444521
  Random number #7: 65079567
  Random number #8: 110790254
  Random number #9: -701484339
  Random number #10: -1921592597
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/-ka_3iD3V4Q" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/-ka_3iD3V4Q){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220329/classe-random-em-java/){:target="\_blank"}.

### _Happy coding!_
