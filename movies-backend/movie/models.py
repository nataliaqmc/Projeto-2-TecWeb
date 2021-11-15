from django.db import models


class Movie(models.Model):
    
    title = models.CharField(max_length=200)

    def _str_(self):
        #ID.TITULO - RETURN
        return f'{self.id}.{self.title}'