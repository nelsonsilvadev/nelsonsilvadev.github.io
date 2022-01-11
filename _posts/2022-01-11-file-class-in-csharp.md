---
layout: post
excerpt: Blog
title: 'File Class in C#'
description: 'Discover how to work with the File class in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, file class, file, class, post'
date: 2022-01-11
categories: [C#]
---

In this post, you will learn how to work with the File class so that you can use that same knowledge and thus evolve.

- this class (belonging to the System.IO library) provides static methods to create, copy, delete, move and open a single file at a time.

`Create()` | Create a file in the specified path
`Copy()` | Copy an existing file to a new file (overwriting a file with the same name is not allowed)
`Delete()` | Delete a certain file
`Move()` | Move the specified file to another location (there is option to rename the given file)
`Open()` | It opens a certain file and it is possible to access it
`Exists()` | Check whether a given file exists or not

```csharp
using System;
using System.IO;

namespace Base {
  class FileClass {
    public void Run() {
      // File.Create("Create-File.txt");
      // File.Copy("Create-File.txt", "Copy-File.txt", true);
      // File.Delete("Copy-File.txt");
      // File.Move("Create-File.txt", "Move-File.txt");

      File.Delete("Move-File.txt");

      if (File.Exists("Move-File.txt"))
        Console.WriteLine("The file \"Move-File.txt\" exists.");
      else
        Console.WriteLine("The file \"Move-File.txt\" does not exist.");
    }
  }
}

// The file "Move-File.txt" does not exist.
```

Don't forget to [watch the video](https://youtu.be/jW8uXGlFwZo){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220111/classe-file-em-csharp/){:target="\_blank"}.

### _Happy coding!_
