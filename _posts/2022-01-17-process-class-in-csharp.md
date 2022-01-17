---
layout: post
excerpt: Blog
title: 'Process Class in C#'
description: 'Discover how to work with the Process class in the C# programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'c#, csharp, process class, process, class, post'
date: 2022-01-17
categories: [C#]
---

In this post, you will learn how to work with the Process class so that you can use that same knowledge and thus evolve.

- this class (belonging to System.Diagnostics library) provides access to local/remote processes and allows to start/stop system processes.

`Start()` | A certain process starts
`Kill()` | Immediately stop the associated process
`Close()` | Frees all resources that are associated with a given process
`GetProcesses()` | Returns all processes that are running at that exact moment
`GetProcessesByName()` | Returns all processes with that name that are running at that exact moment

```csharp
using System;
using System.Diagnostics;
using System.Linq;

namespace Base {
  class ProcessClass {
    // private Process process;
    private Process[] processes;

    public void Run() {
      /*
        process = Process.Start("notepad.exe");
        process.Kill();

        Console.Write("Search for: ");
        var search = Console.ReadLine();
        SearchOnGoogle(search);
      */

      processes = Process.GetProcessesByName("chrome");
      Console.WriteLine($"Number of processes: {processes.Count()}");

      foreach (var process in processes)
        Console.WriteLine($"Process name: {process.ProcessName}");
    }

    private void SearchOnGoogle(string search) {
      var application = @"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe";
      Process.Start(application, $"https://www.google.com/search?q={search}".Replace(' ', '+'));
    }
  }
}

/*
  Number of processes: 28
  Process name: chrome
  Process name: chrome
  Process name: chrome
  ...
*/
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/yXHX-nA4Gsk" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/yXHX-nA4Gsk){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20220117/classe-process-em-csharp/){:target="\_blank"}.

### _Happy coding!_
