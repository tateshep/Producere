from django.db import models

class Journey(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(null=True, blank=True)
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    due_date = models.DateTimeField(null=True, blank=True)

    class Meta:
        ordering = ('title',)

    def __str__(self):
        return self.title

    

class Quest(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(null=True, blank=True)
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    due_date = models.DateTimeField(null=True, blank=True)
    journeys = models.ManyToMany(Journey,blank=True)

    class Meta:
        ordering = ('title',)

    def __str__(self):
        return self.title

    