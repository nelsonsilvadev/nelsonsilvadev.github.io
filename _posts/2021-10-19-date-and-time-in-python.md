---
layout: post
excerpt: Blog
title: 'Date and Time in Python'
description: 'Discover how to work with the date and time in the Python programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'python, date and time, date, time, post'
date: 2021-10-19
categories: [Python]
---

In this post, you will learn how to work with the date and time so that you can use that same knowledge and thus evolve.

`calendar(year)` | Returns a calendar of a certain year in read-only format
`month(year, month)` | Returns the chosen month of a certain year in reading format
`time()` | Returns the current system time in ticks since midnight on January 1, 1970
`localtime(time())` | Returns the current date and time in structured format
`asctime(localtime(time()))` | Returns the current date and time in read format

```python
# from calendar import *
from time import *

# print(calendar(2021))
# print(month(2021, 8))
print(time()) # 1628197388.7380881
print(localtime(time())) # time.struct_time(tm_year=2021, tm_mon=8, tm_mday=5, tm_hour=22, tm_min=3, tm_sec=8, tm_wday=3, tm_yday=217, tm_isdst=1)
print(asctime(localtime(time()))) # Thu Aug 5 22:03:08 2021
```

Don't forget to [watch the vídeo](https://youtu.be/pT6gLZZOoIw){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211019/data-e-hora-em-python/){:target="\_blank"}.

### _Happy coding!_
