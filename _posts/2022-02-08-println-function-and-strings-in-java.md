---
layout: post
excerpt: Blog
title: 'println() function and Strings in Java'
description: 'Discover how to work with the println() function and with strings in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, println function, println, functions, strings, string, post'
date: 2022-02-08
categories: [Java]
---

In this post, you will learn how to work with the `println()` function and with strings so that you can use that same knowledge and thus evolve.

- the `print()` function prints all of its contents on the command line without switching the lines;
- the `println()` function prints all its content on the command line and switches the line;
- a string is a set of characters (letters, numbers and/or symbols);
- all strings are initialized and ending with quotes ("string").

```java
package com.caffeinealgorithm.programminginjava;

public class Main {
  public static void main(String[] args) {
    var video = new PrintlnFunctionAndStrings();
    video.Run();
  }
}
```

```java
package com.caffeinealgorithm.programminginjava;

public class PrintlnFunctionAndStrings {
  public void Run() {
    System.out.print("We are using the print() function and I am a string.");
    System.out.println("We are using the println() function and I am still a string.");
    System.out.println("We are using the println() function again and I am still a string.");
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/GZblJ-SqU_s" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/GZblJ-SqU_s){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/funcao-println-e-strings-em-java/){:target="\_blank"}.

### _Happy coding!_
