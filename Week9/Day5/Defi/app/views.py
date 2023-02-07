from django.shortcuts import render
from your.utils.lib import get_tweets

# Create your views here.
# import twitter
# def get_tweets():
#     """
#     returns twitter feed with settings as described below, contains all related twitter settings
#     """
#     api = twitter.Api(consumer_key='yourcustomerkey',
#                       consumer_secret='customerkeysecret',
#                       access_token_key='accesstokenkey',
#                       access_token_secret='accesstokensecret')

#     return api.GetUserTimeline(screen_name='twitter_screen_name', exclude_replies=True, include_rts=False)  # includes entities

def aff(request):
	context['tweets'] = get_tweets()
	return render(request,'aff.html',context)

