---
layout: post
excerpt: Blog
title: 'Switch in Java'
description: 'Discover how to work with switch in the Java programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'java, switch, conditions, condition, post'
date: 2022-02-24
categories: [Java]
---

In this post, you will learn how to work with switch so that you can use that same knowledge and thus evolve.

- the switch is another way of working with decisions and can only check an equality relationship, ie it cannot use comparison operators;
- the case compares what was defined in itself with the content of the argument that was defined in the switch;
- the default is executed when the content of the argument that was defined in the switch is not found in any case.

```java
package com.caffeinealgorithm.programminginjava;

public class Switch {
  public void Run() {
    char _case = 'D';

    switch (_case) {
      case 'A':
        System.out.println("The case A exists.");
        break;
      case 'B':
        System.out.println("The case B exists.");
        break;
      case 'C':
        System.out.println("The case C exists.");
        break;
      default:
        System.out.printf("The case %c does not exist.", _case);
        break;
    }
  }
}

// The case D does not exist.
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/445d_X4N6OI" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/445d_X4N6OI){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/switch-em-java/){:target="\_blank"}.

### _Happy coding!_
