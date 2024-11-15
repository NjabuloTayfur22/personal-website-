#!/bin/bash

# Array of repository names
repos=(
    "student-task-manager"
    "weather-analyzer"
    "library-system"
    "grade-calculator"
    "restaurant-website"
    "personal-website"
)

# Create and setup each repository
for repo in "${repos[@]}"; do
    echo "Setting up $repo..."
    
    # Create directory if it doesn't exist
    mkdir -p "../$repo"
    
    # Initialize git
    cd "../$repo"
    git init
    
    # Copy respective README
    cp "../personal-website/project-readmes/$repo.md" "./README.md"
    
    # Create .gitignore
    echo "node_modules/
.env
*.pyc
__pycache__/
.vs/
bin/
obj/
.vscode/
dist/
build/" > .gitignore
    
    # Initial commit
    git add .
    git commit -m "Initial commit: Project setup with README and .gitignore"
    
    # Create GitHub repository and push
    gh repo create "njabulomlang/$repo" --public --source=. --remote=origin --push
    
    cd ..
done

echo "All repositories have been created and initialized!"
