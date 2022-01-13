---
layout: post
excerpt: Blog
title: 'break and continue in Python'
description: 'Discover how to work with break and continue in the Python programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'python, break and continue, break, continue, post'
date: 2021-09-30
categories: [Python]
---

In this post, you will learn how to work with break and continue so that you can use that same knowledge and thus evolve.

- break makes the life of the cycle end, that is, it makes it not iterate for anything else;
- continue ignores all content of the loop that is following itself and automatically moves to the next iteration.

```python
animals = ['Dog', 'Cat', 'Chicken', 'Rabbit', 'Lion']
counter = 0

for animal in animals:
  print('Animal:', animal)

  if animal == 'Rabbit':
    break

'''
  Animal: Dog
  Animal: Cat
  Animal: Chicken
  Animal: Rabbit
'''

while counter < 10:
  counter += 1

  if counter == 5:
    continue

  print('Interaction number:', counter)

'''
  Interaction number: 1
  Interaction number: 2
  Interaction number: 3
  Interaction number: 4
  Interaction number: 6
  Interaction number: 7
  Interaction number: 8
  Interaction number: 9
  Interaction number: 10
'''
```

<div class="video-container">
  <iframe src="https://www.youtube.com/embed/bh0yUxxWBZE" frameborder="0" allowfullscreen></iframe>
</div>

Don't forget to [watch the video](https://youtu.be/bh0yUxxWBZE){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20210930/break-e-continue-em-python/){:target="\_blank"}.

### _Happy coding!_
