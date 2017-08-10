import logging

from app.exceptions import CustomException

from app.modules.analyzeSentiments.analyzeSentiments_api import analyzeSentiments
from core.auth import validate
from core.config import _is_app_spot
from core.config import _is_testbed
from flask import Flask, jsonify
from flask import request


app = Flask(__name__)

app.config.update(DEBUG=(not _is_app_spot() or _is_testbed()))


app.register_blueprint(analyzeSentiments)


@app.before_request
def auth_user():
    """
    executed before entering blueprint endpoints
    """

    logging.info(request.headers)
    validate(request)


@app.after_request
def add_header(response):
    """
    allow request from any source
    """
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response


@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, nothing at this URL.', 404


@app.errorhandler(500)
def server_error(e):
    """Return a custom 500 error."""
    return 'Error while serving request', 500


@app.errorhandler(CustomException)
def handle_invalid_usage(error):
    """
    used to return a json formatted version of the error upon request
    :param error:
    :return:
    """
    logging.warn(error.message)
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response
