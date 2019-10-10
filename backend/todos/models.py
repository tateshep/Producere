from django.db import models

class Todo (models.Model):
    # Todo model
    # Need it to have title, description
    # date created
    # date due (as an optional input)
    # author

    # M
    title = models.CharField(max_length=250)
    description = models.TextField(blank=True)
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE,null=True)
    created = models.DateTimeField(auto_now_add=True)
    due_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.title
