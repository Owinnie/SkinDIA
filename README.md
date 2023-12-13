# SkinDIA - Skin Condition Classification (Acne and Eczema)
<p>SkinDIA is a web-based application that classifies uploaded photos as either acne or eczema. Users can easily obtain predictions for their skin conditions with just a few clicks. This project is built with Flask for the backend and incorporates a trained machine learning model (82% accuracy) for accurate predictions.</p>

## Features
<ul>
<li><strong>Image Classification:</strong> SkinDIA uses a trained model to classify skin condition based on user-uploaded images.</li>
<li><strong>User-Friendly Interface:</strong> The web interface is designed to be intuitive, allowing users to easily upload photos and receive predictions.</li>
<li><strong>Responsive Design:</strong> SkinDIA is optimized for various screen sizes, ensuring a seamless experience on both desktop and mobile devices.</li>
</ul>

## Getting Started
To run SkinDIA locally, follow these steps:
<ol>
  <li>
    <b>Clone the repository:</b>
    <code>
      git clone https://github.com/Owinnie/SkinDIA.git
      cd SkinDIA
    </code>
  </li>
  <li>
    <b>Install Dependencies:</b>
    <code>
      pip install -r requirements.txt
    </code>
  </li>
  <li>
    <b>Run the Application:</b>
    <code>
      python3 app.py
    </code>
  </li>
</ol>
The application will be accessible at <a href="#" style="text-decoration:none;">http://localhost:5000</a>.

## Usage
<ol>
  <li><strong>Upload an Image:</strong> Navigate to the homepage, click on the "Choose File" button, and select an image containing a skin condition you'd like to classify.</li>
  <li><strong>Get Prediction:</strong> After uploading, click the "Predict" button to obtain the classification results.</li>
  <li><strong>View Results:</strong> The results page will display the predicted skin condition along with confidence levels.</li>
</ol>

## Contributing
If you'd like to contribute to SkinDIA, please follow these steps:
<ol>
  <li>Fork the repository.</li>
  <li>Create a new branch for your feature: <code>git checkout -b feature-name</code>.</li>
  <li>Implement your feature and test thoroughly.</li>
  <li>Commit your changes: <code>git commit -m "Add new feature"</code>.</li>
  <li>Push to the branch: <code>git push origin feature-name</code>.</li>
  <li>Submit a pull request.</li>
</ol>

## License
This project is licensed under the MIT License.

## Acknowledgments
Special thanks to contributors of open-source datasets at Kaggle used in this project.

## Contact
For any inquiries or issues, please contact [tillawinnie@gmail.com].
