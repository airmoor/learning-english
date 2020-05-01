from django.db import models
from django.contrib.auth.models import User

KNOWLEDGE_CHOICES = [
    ('1', 'Fail'),
    ('2', 'Hard'),
    ('3', 'Good'),
    ('4', 'Easy'),
]

class UserWord(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    word = models.CharField(max_length=255)
    transcription = models.CharField(max_length=255, blank=True)
    definitions = models.TextField(max_length=255, blank=True) 
    translations = models.TextField(max_length=255, blank=True)
    examples = models.TextField(max_length=255, blank=True)
    # knowledge = models.CharField(max_length=1, choices=KNOWLEDGE_CHOICES)
    def __str__(self):
        return self.word


# class Word(models.Model):
#     title = models.CharField(max_length=255)
#     transcription = models.CharField(max_length=255)
    
#     def __str__(self):
#         return self.title

# class Definition(models.Model):
#     word = models.ForeignKey(Word, on_delete=models.CASCADE)
#     definition = models.CharField(max_length=255)

#     def __str__(self):
#         return self.definition

# class Examples(models.Model):     
#     word = models.ForeignKey(Word, on_delete=models.CASCADE)
#     example = models.CharField(max_length=255)

#     def __str__(self):
#         return self.example   


# class Translation(models.Model):
#     word = models.ForeignKey(Word, on_delete=models.CASCADE)
#     translation = models.CharField(max_length=255)

#     def __str__(self):
#         return self.translation