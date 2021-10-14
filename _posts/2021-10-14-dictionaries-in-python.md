---
layout: post
excerpt: Blog
title: 'Dictionaries in Python'
description: 'Discover how to work with dictionaries in the Python programming language. Get answers to your questions with the theory and examples presented.'
keywords: 'python, dictionaries, dictionary, post'
date: 2021-10-14
categories: [Python]
---

In this post, you will learn how to work with dictionaries so that you can use that same knowledge and thus evolve.

- dictionaries are data structures that implement mappings (collection of associations between value pairs);
- the first element of the pair is called the key (identifier) and the other is called the content.

```python
ages = {'Nelson Silva': 25, 'Larissa Fernandes': 37, 'Pedro Henrique': 52, 'Raquel Soares': 68}

ages['Pedro Henrique'] = 100
del ages['Larissa Fernandes']
# ages.clear()

print(ages) # {'Nelson Silva': 25, 'Pedro Henrique': 100, 'Raquel Soares': 68}
print(ages.items()) # dict_items([('Nelson Silva', 25), ('Pedro Henrique', 100), ('Raquel Soares', 68)])
print(ages.keys()) # dict_keys(['Nelson Silva', 'Pedro Henrique', 'Raquel Soares'])
print(ages.values()) # dict_values([25, 100, 68])
```

Don't forget to [watch the vídeo](https://youtu.be/Ux328aoXQYM){:target="\_blank"} and you can always read this post [in Portuguese](https://caffeinealgorithm.com/blog/20211014/dicionarios-em-python/){:target="\_blank"}.

### _Happy coding!_
