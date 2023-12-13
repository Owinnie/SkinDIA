#!/usr/bin/python3

import os

directory_path = 'Aczema/train/acne'
prefix = 'acne_1a'

files = os.listdir(directory_path)

for file in files:
    # Check if file does not already start with specified prefix
    if not file.startswith(prefix):
        # Create new file name with prefix
        new_name = f"{prefix}_{file}"
        
        # Construct full paths for old and new names
        old_path = os.path.join(directory_path, file)
        new_path = os.path.join(directory_path, new_name)
        
        # Rename file
        os.rename(old_path, new_path)
        print(f"Renamed: {file} to {new_name}")
