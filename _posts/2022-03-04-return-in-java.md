---
layout: post
excerpt: Blog
title: 'return in Java'
description: 'Discover how to work with return in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, return, post'
date: 2022-03-04
categories: [Java]
---

In this post, you will learn how to work with return so that you can use that same knowledge and thus evolve.

- the return aims to return something from a function so that when calling this function, you have access to the returned value.

```java
package com.caffeinealgorithm.programminginjava;

public class Return {
  public void Run() {
    System.out.printf("Addition result: %d", addition());
  }

  public int addition() {
    int result = 0;

    for (int value = 1; value <= 10; value++)
      result += value;

    return result;
  }
}

// Addition result: 55
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/hnoGygkv9fw" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/hnoGygkv9fw){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/return-em-java/){:target="\_blank"}.

### _Happy coding!_
