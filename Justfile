#!/usr/bin/env -S just --justfile

alias ch := choose
alias cd := dev_create_dist
alias pd := dev_push_dist

default:
    @just --list

choose:
    @just --choose

# ------------------------------------------------------------------------------

dev_create_dist:
    #!/usr/bin/env nu
    if ("dist.tgz" | path exists) {
        rm dist.tgz
    }
    let-env PATH = ($env.PATH | append './node_modules/.bin' | append '/home/pawel/opt/node/bin')
    astro build
    if ("dist.betterize" | path exists) {
        rm -rf dist.betterize.old
        mv dist.betterize dist.betterize.old
    }
    mv dist dist.betterize
    tar cvzf dist.betterize.tgz dist.betterize

dev_push_dist:
    scp dist.betterize.tgz debian@betterize.pl:strona_ad/

clone_vue3-circle-progress:
    nu dev/clone-circle-progress.nu 

pull_vue3-circle-progress:
    nu dev/pull-circle-progress.nu

build_image:
    nu dev/build-image.nu

prod_reinstall_packages:
    docker compose run --rm betterize_build npm install --install-links

prod_reinstall_packages:
    docker compose run --rm betterize_build astro build

