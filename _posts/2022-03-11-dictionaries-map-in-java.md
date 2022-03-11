---
layout: post
excerpt: Blog
title: 'Dictionaries (Map) in Java'
description: 'Discover how to work with dictionaries (Map) in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, dictionaries, map, dictionary, post'
date: 2022-03-11
categories: [Java]
---

In this post, you will learn how to work with dictionaries (Map) so that you can use that same knowledge and thus evolve.

- dictionaries (which in Java programming language are created with the Map) are data structures that implement mappings (collection of associations between value pairs);
- the first element of the pair is called the key (identifier) and the other is called the content.

```java
package com.caffeinealgorithm.programminginjava;

import java.util.HashMap;
import java.util.Map;

public class DictionariesMap {
  public void Run() {
    Map<String, Integer> people = new HashMap<>();
    // Map people = new HashMap();

    people.put("Nelson Silva", 25);
    people.put("Larissa Fernandes", 37);
    people.put("Pedro Henrique", 52);
    people.put("Raquel Soares", 68);

    people.replace("Pedro Henrique", 100);
    people.remove("Larissa Fernandes");
    // people.clear();

    System.out.printf("Number of people: %s\n", people.keySet());
    System.out.printf("Age of people: %s", people.values());
  }
}

/*
  Number of people: [Pedro Henrique, Nelson Silva, Raquel Soares]
  Age of people: [100, 25, 68]
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/R-ueRH4ySug" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/R-ueRH4ySug){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220311/dicionarios-map-em-java/){:target="\_blank"}.

### _Happy coding!_
