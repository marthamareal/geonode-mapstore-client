import os
import json

from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist

from geoserver.catalog import FailedRequestError
from geonode.geoserver.helpers import gs_catalog
from geonode.layers.models import Dataset
from geonode.upload.models import UploadSizeLimit


def set_default_style_to_open_in_visual_mode(instance, **kwargs):
    if isinstance(instance, Dataset):
        style = gs_catalog.get_style(instance.name, workspace=instance.workspace) or \
            gs_catalog.get_style(isinstance.name)
        if style:
            headers = {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
            data = {
                "style": {
                    "metadata": {
                        "msForceVisual": "true"
                    }
                }
            }
            body_href = os.path.splitext(style.body_href)[0] + '.json'

            resp = gs_catalog.http_request(body_href, method='put', data=json.dumps(data), headers=headers)
            if resp.status_code not in (200, 201, 202):
                raise FailedRequestError('Failed to update style {} : {}, {}'.format(style.name, resp.status_code, resp.text))


def get_max_upload_size(slug):
    try:
       max_size =  UploadSizeLimit.objects.get(slug=slug).max_size
    except ObjectDoesNotExist:
       max_size = getattr(settings, "DEFAULT_MAX_UPLOAD_SIZE", 104857600)
    return max_size
