---
layout: post
excerpt: Blog
title: 'Path Class in C#'
description: 'Discover how to work with the Path class in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, path class, path, class, post'
date: 2022-01-14
categories: [C#]
---

In this post, you will learn how to work with the Path class so that you can use that same knowledge and thus evolve.

- this class (belonging to the System.IO library) provides various static methods to obtain information about a certain file or directory.

`GetFileName()` | Returns the filename and its extension
`GetFileNameWithoutExtension()` | Returns the filename without the extension
`GetExtension()` | Returns only the file extension
`GetFullPath()` | Returns the entire specified path (absolute path)

- when you use const when creating an attribute, you are declaring a constant field which after this declaration cannot be modified.

```csharp
using System;
using System.IO;

namespace Base {
  class PathClass {
    private const string File = "File.txt";

    public void Run() {
      Console.WriteLine($"File name with extension: {Path.GetFileName(File)}");
      Console.WriteLine($"File name without extension: {Path.GetFileNameWithoutExtension(File)}");
      Console.WriteLine($"File extension: {Path.GetExtension(File)}");
      Console.WriteLine($"Absolute path to file: {Path.GetFullPath(File)}");
    }
  }
}

/*
  File name with extension: File.txt
  File name without extension: File
  File extension: .txt
  Absolute path to file: ...\File.txt
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/8wAijtTtazs" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/8wAijtTtazs){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220114/classe-path-em-csharp/){:target="\_blank"}.

### _Happy coding!_
