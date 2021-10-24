from re import L
from django.db import models
from django.db.models import fields
from rest_framework import serializers
from leads.models import Lead

# Leads Serializer
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'
