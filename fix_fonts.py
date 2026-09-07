import os
import glob

def replace_fonts(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace Google Fonts link
    content = content.replace(
        'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap',
        'https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap'
    )
    
    # Replace font-family CSS rules
    content = content.replace(
        "'IBM Plex Sans Thai','IBM Plex Sans'", 
        "'Prompt'"
    )

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

# Apply to all html and css files
html_files = glob.glob('*.html')
css_files = glob.glob('*.css')

for file in html_files + css_files:
    replace_fonts(file)
    print(f"Updated {file}")

