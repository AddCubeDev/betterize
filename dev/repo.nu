export def clone [
    url: string,
    --branch="main": string,
    --output_dir: string,
] {
    let color_url = $'(ansi white_bold)url(ansi reset)'
    let color_output_dir = $'(ansi white_bold)output_dir(ansi reset)'
    let color_branch = $'(ansi white_bold)branch(ansi reset)'
    print $"Clone repository from ($color_url) to ($color_output_dir) using ($color_branch):"
    print $'($color_url)       : ($url)'
    print $'($color_output_dir): ($output_dir)'
    print $'($color_branch)    : ($branch)'

    if ($output_dir | path exists) {
        print $"Repository in directory ($output_dir) is already checked out!"
    } else {
        git clone -b $branch $url $output_dir
        npm install --install-links
    }
}

export def pull [
    --output_dir: string,
] {
    if ($output_dir | path exists) {
        enter $output_dir
        git pull
        exit
    } else {
        print $"Directory ($output_dir) doesn't exist!"
    }
}