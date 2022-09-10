---
layout: post
excerpt: Blog
title: 'foreach Loop in Java'
description: 'Discover how to work with foreach loop in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, foreach loop, foreach, loop, loops, post'
date: 2022-02-28
categories: [Java]
---

In this post, you will learn how to work with foreach loop so that you can use that same knowledge and thus evolve.

- a cycle allows executing an instruction or a set of instructions several times;
- the foreach loop loops (iterates) depending on the items in a sequence.

```java
package com.caffeinealgorithm.programminginjava;

import java.util.ArrayList;
import java.util.List;

public class ForeachLoop {
  public void Run() {
    List<String> countries = new ArrayList<>();

    countries.add("Portugal");
    countries.add("Brazil");
    countries.add("Spain");
    countries.add("France");
    countries.add("Italy");
    countries.add("Australia");
    countries.add("India");

    for (String country : countries)
      System.out.printf("Country: %s\n", country);
  }
}

/*
  Country: Portugal
  Country: Brazil
  Country: Spain
  Country: France
  Country: Italy
  Country: Australia
  Country: India
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/X8hVHwqEiKI" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/X8hVHwqEiKI){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/ciclo-foreach-em-java/){:target="\_blank"}.

### _Happy coding!_
