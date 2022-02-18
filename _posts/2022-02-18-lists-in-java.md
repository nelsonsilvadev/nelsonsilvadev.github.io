---
layout: post
excerpt: Blog
title: 'Lists in Java'
description: 'Discover how to work with lists in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, lists, list, post'
date: 2022-02-18
categories: [Java]
---

In this post, you will learn how to work with lists so that you can use that same knowledge and thus evolve.

- a list is an ordered set of values and is much easier to manipulate than an array;
- the values that make up a list are called elements (just like in arrays).

```java
package com.caffeinealgorithm.programminginjava;

import java.util.ArrayList;
import java.util.List;

public class Lists {
  public void Run() {
    List<String> colors = new ArrayList<>();

    colors.add("Blue");
    colors.add("Green");
    colors.add("Yellow");
    colors.add("Red");
    colors.add("Orange");

    colors.remove("Orange");
    // colors.clear();

    System.out.printf("Number of colors: %d\n", colors.size()); // Number of colors: 4
    System.out.printf("First color: %s\n", colors.get(0)); // First color: Blue
    System.out.printf("Last color: %s", colors.get(colors.size() - 1)); // Last color: Red
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/VFwjISUooB4" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/VFwjISUooB4){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220218/listas-em-java/){:target="\_blank"}.

### _Happy coding!_
