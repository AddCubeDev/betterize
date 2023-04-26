let repo_dir = "../vue3-circle-progress" 
if ($repo_dir | path exists) { 
    echo $"Repository in directory ($repo_dir) is already checked out!" 
} else { 
    git clone -b build_with_vite https://github.com/AddCubeDev/vue3-circle-progress.git ../vue3-circle-progress 
    npm install --install-links 
} 