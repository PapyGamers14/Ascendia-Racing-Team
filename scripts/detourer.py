# Détoure les portraits passés en argument (chemin_source chemin_sortie ...).
# Appelé par scripts/portraits.mjs — ne pas lancer à la main.
import sys
from io import BytesIO
from pathlib import Path

from PIL import Image
from rembg import new_session, remove

session = new_session("isnet-general-use")  # bon sur les illustrations au trait net
args = sys.argv[1:]
for source, sortie in zip(args[::2], args[1::2]):
    png = remove(Path(source).read_bytes(), session=session, post_process_mask=True)
    Image.open(BytesIO(png)).save(sortie, "WEBP", quality=90, alpha_quality=100)
    print("  détouré :", Path(sortie).name)
