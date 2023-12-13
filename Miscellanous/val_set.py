#!/usr/bin/python3
import os
import random
import shutil

def create_validation_directory(source_dir, validation_dir, validation_percentage):
    # Get the list of files in the source directory
    files = os.listdir(source_dir)

    # Calculate the number of files to move for validation
    num_files = len(files)
    num_validation_files = int(num_files * validation_percentage)

    # Randomly select files for validation
    validation_files = random.sample(files, num_validation_files)

    # Create the validation directory if it doesn't exist
    os.makedirs(validation_dir, exist_ok=True)

    # Move selected files to the validation directory
    for file in validation_files:
        source_path = os.path.join(source_dir, file)
        destination_path = os.path.join(validation_dir, file)
        shutil.move(source_path, destination_path)
        print(f"Moved {file} to {validation_dir}")

# Define source directories
eczema = "Aczema/eczema"
acne = "Aczema/acne"

# Define validation directories
eczema_val = "eczema"
acne_val = "acne"

# Set the validation percentage (5%)
validation_percentage = 0.05

# Create validation directories and move files
create_validation_directory(eczema, eczema_val, validation_percentage)
create_validation_directory(acne, acne_val, validation_percentage)
