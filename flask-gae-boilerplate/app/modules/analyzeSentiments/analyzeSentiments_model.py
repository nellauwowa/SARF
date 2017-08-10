
from google.appengine.ext import ndb
from core.ndb import BasicModel
from google.cloud import language


class AnalyzeSentiments(BasicModel):
    review = ndb.StringProperty()
    category = ndb.StringProperty()
    senti_score = ndb.FloatProperty()
    senti_magnitude = ndb.FloatProperty()
    senti_polarity = ndb.StringProperty()

    @classmethod
    def create(cls, review, category):

        language_client = language.Client()
        document = language_client.document_from_text(review)
        sentiment = document.analyze_sentiment().sentiment

        if(sentiment.score >= -1) and (sentiment.score <= -0.26):
            polarity = "Negative"
            score = float(sentiment.score)
            magnitude = float(sentiment.magnitude)
        elif(sentiment.score >= -0.25) and (sentiment.score <= 0.25):
            polarity = "Neutral"
            score = float(sentiment.score)
            magnitude = float(sentiment.magnitude)
        elif(sentiment.score >= 0.26) and (sentiment.score <= 1):
            polarity = "Positive"
            score = float(sentiment.score)
            magnitude = float(sentiment.magnitude)

        reviews = AnalyzeSentiments()
        reviews.review = review
        reviews.category = category
        reviews.senti_polarity = polarity
        reviews.senti_score = score
        reviews.senti_magnitude = magnitude
        reviews.put()
        print('Category: {}'.format(category))
        print('Text: {}'.format(review))
        print('Polarity: {}'.format(polarity))
        print('Sentiment: {}, {}'.format(sentiment.score, sentiment.magnitude))

        return reviews

    @classmethod
    def retrieve_all(cls):

        return AnalyzeSentiments.query().order(-AnalyzeSentiments.created).fetch()
