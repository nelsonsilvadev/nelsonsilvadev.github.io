---
layout: post
excerpt: Blog
title: 'Arrays in Java'
description: 'Discover how to work with arrays in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, arrays, array, post'
date: 2022-02-17
categories: [Java]
---

In this post, you will learn how to work with arrays so that you can use that same knowledge and thus evolve.

- an array (vector) has a fixed size and is used to store a set of data in a sequential way;
- it is more useful to think of an array as a set of variables of the same type in which they are adjacently placed in memory;
- these variables are called elements and each of these is identified by an index.

```java
package com.caffeinealgorithm.programminginjava;

public class Arrays {
  public void Run() {
    /*
      String[] colors = new String[5];

      colors[0] = "Blue";
      colors[1] = "Green";
      colors[2] = "Yellow";
      colors[3] = "Red";
      colors[4] = "Orange";
    */

    String[] colors = new String[] {
      "Blue",
      "Green",
      "Yellow",
      "Red",
      "Orange"
    };

    System.out.printf("Number of colors: %d\n", colors.length); // Number of colors: 5
    System.out.printf("First color: %s\n", colors[0]); // First color: Blue
    System.out.printf("Last color: %s", colors[colors.length - 1]); // Last color: Orange
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/aD7U69fw9hQ" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/aD7U69fw9hQ){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220217/arrays-em-java/){:target="\_blank"}.

### _Happy coding!_
