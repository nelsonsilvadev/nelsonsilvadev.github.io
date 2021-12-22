---
layout: post
excerpt: Blog
title: 'Access Modifiers in C#'
description: 'Discover how to work with access modifiers in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, access modifiers, access, modifiers, public, protected, internal, protected internal, private, post'
date: 2021-12-22
categories: [C#]
---

In this post, you will learn how to work with access modifiers so that you can use that same knowledge and thus evolve.

- access modifiers are used to specify the declared accessibility of a variable (attribute), function (method), class, etc;
- there are five access modifiers (accessibility levels): public, protected, internal, protected internal and private;
- public ensures that access is not restricted to any part of our code;
- protected boils down to the possibility of access only within the class itself or within a class derived from it;
- the internal makes only if it is possible to have access inside the current namespace;
- protected internal means that you only have access to the current namespace and classes derived from another namespace;
- private means access only within the class itself.

```csharp
using System;

namespace Base {
  class AccessModifiers {
    // public, protected, internal, protected internal and private
    private void Run() {
      Console.WriteLine("We are trying to learn how to work with the various access modifiers.");
    }
  }
}
```

Don't forget to [watch the video](https://youtu.be/Uz-wyfqr9yU){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211222/modificadores-de-acesso-em-csharp/){:target="\_blank"}.

### _Happy coding!_
