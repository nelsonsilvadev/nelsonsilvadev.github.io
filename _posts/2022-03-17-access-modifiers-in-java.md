---
layout: post
excerpt: Blog
title: 'Access Modifiers in Java'
description: 'Discover how to work with access modifiers in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, access modifiers, access, modifiers, public, protected, private, post'
date: 2022-03-17
categories: [Java]
---

In this post, you will learn how to work with access modifiers so that you can use that same knowledge and thus evolve.

- access modifiers are used to specify the declared accessibility of a variable (attribute), function (method), class and etc;
- there are three access modifiers (accessibility levels): public, protected and private;
- public ensures that access is not restricted to any part of our code;
- protected boils down to the possibility of accessing only within the class itself or within a class derived from it (however, as we are working with packages, that is, packages, it is also possible to have access to all classes present in the package in which protected is found);
- private means access only within the class itself.

```java
package com.caffeinealgorithm.programminginjava;

public class AccessModifiers {
  // public, protected e private
  private void Run() {
    System.out.println("We are trying to learn how to work with the various access modifiers.");
  }
}
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/e19jPpY8JfA" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/e19jPpY8JfA){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/modificadores-de-acesso-em-java/){:target="\_blank"}.

### _Happy coding!_
