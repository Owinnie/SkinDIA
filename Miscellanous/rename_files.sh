#!/bin/bash

count=1

for file in *; do
    if [ -f "$file" ]; then
        extension="${file##*.}"
        new_name="acne_$count.$extension"
        mv "$file" "$new_name"
        ((count++))
    fi
done
