from leads.models import Lead
from rest_framework import serializers, viewsets, permissions
from .serializers import LeadSerializer

# Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
    permissions_classes = [permissions.IsAuthenticated]
    serializer_class = LeadSerializer
    
    def get_queryset(self):
        return self.request.user.leads.all() 

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
        
    
