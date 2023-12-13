from flask import Flask, render_template, request
import tensorflow as tf
import numpy as np
import os
from werkzeug.utils import secure_filename


app = Flask(__name__, static_url_path='/templates', static_folder='templates')

model_path = "model/"
model = tf.keras.models.load_model(model_path)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/predict', methods=['POST'])
def predict():
    print(request.files.keys())
    if request.method == 'POST':
        # Check if the request contains 'capturedPhoto'
        print(request.files.keys())  # Add this line for debugging
        if 'file' in request.files:
            img = request.files['file']
        else:
            img = request.files['capturedPhoto']

        # Save the uploaded file to a temporary location
        filename = secure_filename(img.filename)
        img_path = os.path.join("static/uploads", filename)
        img.save(img_path)
        
        # Preprocess the image
        img_array = preprocess_image(img_path)

        # Make prediction
        prediction = model.predict(img_array)
        
        # Binary classification
        if prediction[0] < 0.1:
            result = "Neither acne nor eczema"
        elif prediction[0] > 0.5:
            result = "Eczema"
        else:
            result = "Acne"

        return render_template('result.html', prediction=prediction, result=result)

def preprocess_image(img):
    # Load, resize, normalize
    # Return a NumPy array ready for prediction
    img = tf.keras.preprocessing.image.load_img(img, target_size=(150, 150))
    img_array = tf.keras.preprocessing.image.img_to_array(img)
    img_array /= 255.0
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
