from django.db import models

# Create your models here.


class User(models.Model):
    name = models.CharField(max_length=30, verbose_name='이름')
    identity = models.CharField(max_length=30, verbose_name='아이디')
    password = models.CharField(max_length=30, verbose_name='비밀번호')
    email = models.EmailField(verbose_name='이메일')
    phone = models.IntegerField("전화번호")
    register_data = models.DateTimeField(auto_now_add=True, verbose_name='생성일자')

    def __str__(self):
        return self.name