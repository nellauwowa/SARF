import logging
from core.utils import create_json_response
from flask import Blueprint, request
from app.modules.analyzeSentiments.analyzeSentiments_model import AnalyzeSentiments
from flask_cors import CORS

analyzeSentiments = Blueprint('analyzeSentiments', __name__, url_prefix='/api/analyzeSentiments')
CORS(analyzeSentiments)


@analyzeSentiments.route('/create', methods=['POST'])
def api_create():
    logging.info(request.get_json())
    data_json = request.get_json()
    review = data_json["review"]
    category = data_json["category"]

    flag = AnalyzeSentiments.create(review, category)
    if flag is None:
        flag = "Nothing to show"
    else:
        flag = "Review recorded."

    return flag


@analyzeSentiments.route('/retrieveAll/<category>', methods=['GET'])
def api_retrieve(category):

    models = AnalyzeSentiments.retrieve_all()
    list_of_reviews = []
    for model in models:
        if model.category == category:
            data = {
                "category": model.category,
                "content": model.review
            }
            list_of_reviews.append(data)

    return create_json_response(list_of_reviews)


@analyzeSentiments.route('/evaluation/<category>', methods=['GET'])
def api_evaluation(category):

    models = AnalyzeSentiments.retrieve_all()
    list_of_data = []
    logging.info(models)
    for model in models:
        if model.category == category:
            data = {
                "category": model.category,
                "content": model.review,
                "polarity": model.senti_polarity,
                "score": model.senti_score,
                "magnitude": model.senti_magnitude
            }
            list_of_data.append(data)

    return create_json_response(list_of_data)


@analyzeSentiments.route('/summary/<category>', methods=['GET'])
def api_summary(category):

    models = AnalyzeSentiments.retrieve_all()
    list_of_polarities = []
    list_of_ratings = {}
    pos_revs = 0
    neg_revs = 0
    neut_revs = 0

    for model in models:
        if model.category == category:
            data = model.senti_polarity
            list_of_polarities.append(data)

            if data == "Positive":
                pos_revs += 1
            elif data == "Negative":
                neg_revs += 1
            elif data == "Neutral":
                neut_revs += 1

    list_of_ratings.update({"Positive_count": pos_revs})
    list_of_ratings.update({"Negative_count": neg_revs})
    list_of_ratings.update({"Neutral_count": neut_revs})
    list_of_ratings.update({"Total_count": len(list_of_polarities)})
    list_of_ratings.update({"Positive_rating" : float(pos_revs) / len(list_of_polarities)})
    list_of_ratings.update({"Negative_rating" : float(neg_revs) / len(list_of_polarities)})
    list_of_ratings.update({"Neutral_rating" : float(neut_revs) / len(list_of_polarities)})

    return create_json_response(list_of_ratings)


@analyzeSentiments.route('/ratings', methods=['GET'])
def api_ratings():
    category1 = "Wonder Woman"
    category2 = "Deadpool"
    category3 = "Doctor Strange"
    models = AnalyzeSentiments.retrieve_all()
    list_of_polarities = []
    list_of_polarities2 = []
    list_of_polarities3 = []
    list_of_all = {}
    list_of_ratings = {}
    list_of_ratings2 = {}
    list_of_ratings3 = {}
    pos_revs = 0
    neg_revs = 0
    neut_revs = 0
    pos_revs2 = 0
    neg_revs2 = 0
    neut_revs2 = 0
    pos_revs3 = 0
    neg_revs3 = 0
    neut_revs3 = 0

    for model in models:
        if model.category == category1:
            data = model.senti_polarity
            list_of_polarities.append(data)

            if data == "Positive":
                pos_revs += 1
            elif data == "Negative":
                neg_revs += 1
            elif data == "Neutral":
                neut_revs += 1
        elif model.category == category2:
            data = model.senti_polarity
            list_of_polarities2.append(data)

            if data == "Positive":
                pos_revs2 += 1
            elif data == "Negative":
                neg_revs2 += 1
            elif data == "Neutral":
                neut_revs2 += 1
        elif model.category == category3:
            data = model.senti_polarity
            list_of_polarities3.append(data)

            if data == "Positive":
                pos_revs3 += 1
            elif data == "Negative":
                neg_revs3 += 1
            elif data == "Neutral":
                neut_revs3 += 1

    # list_of_ratings.update({"Positive_count": pos_revs})
    # list_of_ratings.update({"Negative_count": neg_revs})
    # list_of_ratings.update({"Neutral_count": neut_revs})
    # list_of_ratings.update({"Total_count": len(list_of_polarities)})
    list_of_ratings.update({"Positive_rating": float(pos_revs) / len(list_of_polarities)})
    list_of_ratings.update({"Negative_rating": float(neg_revs) / len(list_of_polarities)})
    list_of_ratings.update({"Neutral_rating": float(neut_revs) / len(list_of_polarities)})

    # list_of_ratings2.update({"Positive_count": pos_revs2})
    # list_of_ratings2.update({"Negative_count": neg_revs2})
    # list_of_ratings2.update({"Neutral_count": neut_revs2})
    # list_of_ratings2.update({"Total_count": len(list_of_polarities2)})
    list_of_ratings2.update({"Positive_rating": float(pos_revs2) / len(list_of_polarities2)})
    list_of_ratings2.update({"Negative_rating": float(neg_revs2) / len(list_of_polarities2)})
    list_of_ratings2.update({"Neutral_rating": float(neut_revs2) / len(list_of_polarities2)})

    # list_of_ratings3.update({"Positive_count": pos_revs3})
    # list_of_ratings3.update({"Negative_count": neg_revs3})
    # list_of_ratings3.update({"Neutral_count": neut_revs3})
    # list_of_ratings3.update({"Total_count": len(list_of_polarities3)})
    list_of_ratings3.update({"Positive_rating": float(pos_revs3) / len(list_of_polarities3)})
    list_of_ratings3.update({"Negative_rating": float(neg_revs3) / len(list_of_polarities3)})
    list_of_ratings3.update({"Neutral_rating": float(neut_revs3) / len(list_of_polarities3)})

    list_of_all.update({"Movie1": list_of_ratings})
    list_of_all.update({"Movie2": list_of_ratings2})
    list_of_all.update({"Movie3": list_of_ratings3})

    return create_json_response(list_of_all)
