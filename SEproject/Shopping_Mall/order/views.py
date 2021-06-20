from django.shortcuts import render

# Create your views here.

def orderlist(request):
    return render(
        request,
        'order/order.html'
    )
