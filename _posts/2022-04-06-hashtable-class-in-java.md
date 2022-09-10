---
layout: post
excerpt: Blog
title: 'Hashtable Class in Java'
description: 'Discover how to work with the Hashtable class in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, hashtable class, hashtable, class, hash, post'
date: 2022-04-06
categories: [Java]
---

In this post, you will learn how to work with the Hashtable class so that you can use that same knowledge and thus evolve.

- this class represents a collection of associations between pairs of values;
- the first element of the pair is called the key (identifier) and the other is called the content;
- the collection of associations between value pairs are organized according to the hash code of the key.

```java
package com.caffeinealgorithm.programminginjava;

import java.util.Hashtable;

public class HashtableClass {
  private Hashtable<String, Integer> people = new Hashtable<>();

  public void Run() {
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
  Number of people: [Nelson Silva, Raquel Soares, Pedro Henrique]
  Age of people: [25, 68, 100]
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/ZqsM5Ay_PgA" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/ZqsM5Ay_PgA){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/classe-hashtable-em-java/){:target="\_blank"}.

### _Happy coding!_
