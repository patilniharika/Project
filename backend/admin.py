from django.contrib import admin
from .models import *

class MenuImgAdmin(admin.ModelAdmin):
    list_display = ['menu_id', 'name', 'img']

admin.site.register(BookTable)
admin.site.register(User)
admin.site.register(Menu)
admin.site.register(MenuImg, MenuImgAdmin)
admin.site.register(Cart)