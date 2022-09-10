---
layout: post
excerpt: Blog
title: 'Methods III in Java'
description: 'Discover how to work with two specific methods (equals() and replace()) in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, remove, replace, methods, method, functions, function, post'
date: 2022-04-12
categories: [Java]
---

In this post, you will learn how to work with two specific methods (`equals()` and `replace()`) so that you can use that same knowledge and thus evolve.

`equals()` | Returns a boolean value (true or false) relative to the comparison of the given string of characters with the specified object
`replace()` | Returns a new string, in which all occurrences of a given string are replaced by another specified string

```java
package com.caffeinealgorithm.programminginjava;

public class MethodsIII {
  private String a = "Nelson", b = "Nelson", c = "Silva";
  private String favProgLanguage = "My favorite programming language was once Java.";

  public void Run() {
    // equals()
    System.out.printf("a == b : %b\n", a.equals(b));
    System.out.printf("b == c : %b\n", b.equals(c));

    // replace()
    System.out.println(favProgLanguage);
    System.out.println(favProgLanguage.replace("was once", "is"));
  }
}

/*
  a == b : true
  b == c : false
  My favorite programming language was once Java.
  My favorite programming language is Java.
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/hqICEMabCZQ" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/hqICEMabCZQ){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/metodos-iii-em-java/){:target="\_blank"}.

### _Happy coding!_
