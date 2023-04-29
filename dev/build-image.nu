# Build Docker image
def main [] {
    let dst_dir = "./vue3-circle-progress"

    remove_files_from_build_context $dst_dir
    copy_files_to_build_context $dst_dir
    build_image
    remove_files_from_build_context $dst_dir
}

def remove_files_from_build_context [
    dst_dir: string
] {
    if ($dst_dir | path exists) {
        rm -r $dst_dir
    }
}

def copy_files_to_build_context [
    dst_dir: string
] {
    let src_dir = (docker_build_context | path dirname | path join vue3-circle-progress)

    mkdir $dst_dir
    cp ($src_dir | path join package.json) $dst_dir
    cp ($src_dir | path join package-lock.json) $dst_dir
    cp -r ($src_dir | path join dist) $dst_dir
}

def docker_build_context [] {
    # We have the following directory structure:
    # vue3-circle-progress
    # project (e.g.: betterize)
    #    dev
    #       build-image.nu
    #    Dockerfile
    #    docker-compose.yaml
    #
    # Function should return project directory
    $env.FILE_PWD | path dirname
}


def build_image [] {
    docker compose build
}
