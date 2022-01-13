---
layout: post
excerpt: Blog
title: 'StreamReader Class in C#'
description: 'Discover how to work with the StreamReader class in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, streamreader class, streamreader, class, post'
date: 2022-01-13
categories: [C#]
---

In this post, you will learn how to work with the StreamReader class so that you can use that same knowledge and thus evolve.

- this class (belonging to System.IO library) implements a reading mode so that the characters present in a stream (file) can be read according to a specific encoding.

`StreamReader (object).ReadLine()` | Reads only one line present in the file content
`StreamReader (object).ReadToEnd()` | Reads the entire contents of the file to the end

```csharp
using System;
using System.IO;

namespace Base {
  class StreamReaderClass {
    private StreamReader readFile;

    public void Run() {
      using (readFile = new StreamReader("File.txt")) {
        var line = string.Empty;

        /*
          while ((line = readFile.ReadLine()) != null)
            Console.WriteLine(line);
        */

        Console.WriteLine(readFile.ReadToEnd());
      }
    }
  }
}

/*
  Portugal
  Brazil
  Spain
  France
  Italy
  Australia
  India
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/NpjrizaL77w" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/NpjrizaL77w){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220113/classe-streamreader-em-csharp/){:target="\_blank"}.

### _Happy coding!_
