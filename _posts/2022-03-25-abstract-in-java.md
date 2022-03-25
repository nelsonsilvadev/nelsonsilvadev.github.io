---
layout: post
excerpt: Blog
title: 'abstract in Java'
description: 'Discover how to work with abstract in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, abstract, post'
date: 2022-03-25
categories: [Java]
---

In this post, you will learn how to work with abstract so that you can use that same knowledge and thus evolve.

- the abstract is used to indicate that a given class cannot be instantiated;
- in short, abstract classes are considered "incomplete" classes;
- it is important to know that a class can inherit from an abstract class and that methods can only be abstract if the class is also;
- when static is applied to a certain member (attribute, method, etc), it is not necessary to instantiate such a class to have access to that member because it is static.

```java
package com.caffeinealgorithm.programminginjava;

import java.util.ArrayList;
import java.util.List;

public class Abstract {
  public void Run() {
    // ClassX.informationX();
    var _class = new ClassY();
    _class.informationY();

    /*
      Country: Portugal
      Country: Brazil
      Country: Spain
      Country: France
      Country: Italy
      Country: Australia
      Country: India
    */
  }
}

abstract class ClassX {
  public static String organization = "Caffeine Algorithm";
  public static List<String> countries = new ArrayList<>();

  public static void informationX() {
    for (char character : organization.toCharArray())
      System.out.printf("Character: %c\n", character);
  }

  public abstract void informationY();
}

class ClassY extends ClassX {
  public void informationY() {
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
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/ZsiTd23CfUs" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/ZsiTd23CfUs){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220325/abstract-em-java/){:target="\_blank"}.

### _Happy coding!_
